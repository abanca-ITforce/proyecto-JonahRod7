import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title: 'Home';
  countries$: Observable<any[]>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.countries$ = this.api.getAllCountries$();
  }
}
