import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: AuthenticationComponent
  },
  {
    path: "home",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  { path: "**", redirectTo: "signin", pathMatch: "full" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
