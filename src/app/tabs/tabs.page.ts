import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  userName: string = "";
  isAuthenticated: boolean = false;

  constructor(private router: Router, private menu: MenuController) {}

  ngOnInit(): void {
    let authenticatedUser = JSON.parse(
      sessionStorage.getItem("isAuthenticated")
    );

    if (authenticatedUser !== null && authenticatedUser.isLoggedIn) {
      this.isAuthenticated = true;
      let userEmail = authenticatedUser.email;
      this.userName = JSON.parse(localStorage.getItem(userEmail)).name;
    } else {
      this.router.navigateByUrl("login");
    }
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigateByUrl("login");
  }

  displayMenu() {
    this.menu.open();
  }
}
