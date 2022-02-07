import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showDetail = false;

  constructor() { }

  ngOnInit(): void {
  }

  logTest() {
    console.log("Button Test");
    !this.showDetail;
    console.log("Current showDetail status: ", this.showDetail);
  }

}
