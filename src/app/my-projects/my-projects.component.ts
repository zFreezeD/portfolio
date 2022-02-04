import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() {

  }


  projectName = [
    'Beispiel Website1',
    'Beispiel Website2',
    'Beispiel Website3',
    'Beispiel Website4',
    'Beispiel Website5',
  ]

  projectImg = [
    '/assets/img/prototype.png',
  ]

  projectText = [
    'This is a example text'
  ]

  projectLink = [
    '#'
  ]


  All = true;
  Angular = true;
  JavaScript = true;
  Unity = true;

  //grid : any;

  ngOnInit(): void {
    //this.grid = document.querySelector("#grid");
  }

  over(int : number) {
    console.log(`project-${int}`)
    console.log(document.querySelector("project1"));
  }

  exit() {
    console.log("Exit");
  }


  OnClick(name: string) {

    console.log(name);

    if (name == "All") {
      this.All = true;
      this.Angular = false;
      this.JavaScript = false;
      this.Unity = false;
    } else if (name == "Angular") {
      this.All = false;
      this.Angular = true;
      this.JavaScript = false;
      this.Unity = false;
    } else if (name == "JavaScript") {
      this.All = false;
      this.Angular = false;
      this.JavaScript = true;
      this.Unity = false;
    } else if (name == "Unity") {
      this.All = false;
      this.Angular = false;
      this.JavaScript = false;
      this.Unity = true;
    }
  }
}
