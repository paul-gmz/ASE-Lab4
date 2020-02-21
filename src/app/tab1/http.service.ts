import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  url = "https://gender-api.com/get?name=";
  API_KEY = "CvBFLGUHzQFCgNbWHK";

  constructor(private http: HttpClient) {}

  public getGenderData(firstName) {
    // return data from from api call
    return this.http.get(`${this.url}${firstName}&key=${this.API_KEY}`);
  }
}
