import { HttpService } from "./http.service";

describe("httpservice", () => {
  let http: HttpService;
  let data;
  beforeEach(() => {});

  it("should return data", () => {
    this.httpService.getGenderData("paul").subscribe(data => {
      expect(data != null).toBeTruthy();
    });
  });
});
