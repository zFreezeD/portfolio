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


  btn1Active = true;
  btn2Active = false;
  btn3Active = false;
  btn4Active = false;
  //grid : any;

  ngOnInit(): void {
    //this.grid = document.querySelector("#grid");
  }

  over(int: number) {
    console.log(`project-${int}`)
    console.log(document.querySelector("project1"));
  }

  exit() {
    console.log("Exit");
  }


  OnClick(name: string, int: number) {

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


    this.btn1Active = false,
      this.btn2Active = false;
    this.btn3Active = false;
    this.btn4Active = false;

    if (int == 1)
      this.btn1Active = true;
    else if (int == 2)
      this.btn2Active = true;
    else if (int == 3)
      this.btn3Active = true;
    else if (int == 4)
      this.btn4Active = true;
  }
}
