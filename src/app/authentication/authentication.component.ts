import { Component, OnInit } from "@angular/core";
import { IUser } from "../user";
import { AlertController } from "@ionic/angular";
import { async } from "rxjs/internal/scheduler/async";
import { Router } from "@angular/router";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  title: string = "Log in";
  isRegistered: boolean = true;
  name: string = "";
  email: string = "";
  password: string = "";
  user: IUser;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ["OK"]
    });

    await alert.present();
  }

  ngOnInit() {}

  showPopUp(alerttitle: string, text: string): void {
    this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"]
    });
  }

  displayRegister(): void {
    this.isRegistered = false;
    this.title = "Sign Up";
  }
  displayLogIn(): void {
    this.isRegistered = true;
    this.title = "Log In";
  }

  logIn(): void {
    if (this.email === "" || this.password === "") {
      this.presentAlert(
        "Invalid credentials",
        "Fill out the your email and password."
      );
    } else {
      this.user = JSON.parse(localStorage.getItem(this.email));
      if (this.user == null) {
        this.presentAlert(
          "Invalid credentials",
          "Entered credentials are invalid. Please try again."
        );
      } else if (this.user.password !== this.password) {
        this.presentAlert(
          "Invalid credentials",
          "Entered credentials are invalid. Please try again."
        );
      } else {
        sessionStorage.setItem(
          "isAuthenticated",
          JSON.stringify({ email: this.email, isLoggedIn: true })
        );
        this.router.navigateByUrl("home");
      }
    }
  }

  signUp(): void {
    if (this.name === "" || this.email === "" || this.password === "") {
      this.presentAlert(
        "Missing Information",
        "Please fill out all the above information to register."
      );
    } else {
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      localStorage.setItem(this.email, JSON.stringify(this.user));
      this.email = "";
      this.name = "";
      this.password = "";
      this.presentAlert("Successful", "You are successfully registered.");
    }
  }
}
