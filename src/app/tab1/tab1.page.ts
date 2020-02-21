import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  firstName: string = "";
  gender: string = "";
  samples: number = 0;
  accuracy: number = 0;
  showOutput: boolean = false;

  constructor(
    private httpService: HttpService,
    private alertController: AlertController
  ) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      //header: header,
      message: message,
      buttons: ["OK"]
    });

    await alert.present();
  }

  getGender(): void {
    if (this.firstName == "") {
      this.presentAlert("Enter a name to view results.");
      return;
    }
    this.httpService.getGenderData(this.firstName).subscribe(data => {
      this.gender = data["gender"];
      this.samples = data["samples"];
      this.accuracy = data["accuracy"];
      this.showOutput = true;
    });
  }
}
