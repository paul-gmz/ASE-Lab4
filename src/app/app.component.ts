import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  isAuthenticated: boolean = false;
  userName: string = "";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onActivate(component) {
    let authenticatedUser = JSON.parse(
      sessionStorage.getItem("isAuthenticated")
    );

    if (authenticatedUser !== null && authenticatedUser.isLoggedIn) {
      this.isAuthenticated = true;
      let userEmail = authenticatedUser.email;
      this.userName = JSON.parse(localStorage.getItem(userEmail)).name;
    }
  }
}
