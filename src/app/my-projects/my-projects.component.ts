import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor(private router: Router) {

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
  Angular = false;
  JavaScript = false;
  Unity = false;
  Firebase = false;



  btn1Active = true;
  btn2Active = false;
  btn3Active = false;
  btn4Active = false;
  btn5Active = false;
  //grid : any;

  ngOnInit(): void {
    //this.grid = document.querySelector("#grid");
  }

  over(int: number) {
    console.log(`project-${int}`)
    console.log(document.querySelector("project1"));
  }

  exit() {
   
  }


  OnClick(name: string, int: number) {

    console.log(name);

    if (name == "All") {
      this.All = true;
      this.Angular = false;
      this.JavaScript = false;
      this.Unity = false;
      this.Firebase = false;
    } else if (name == "Angular") {
      this.All = false;
      this.Angular = true;
      this.JavaScript = false;
      this.Unity = false;
      this.Firebase = false;
    } else if (name == "JavaScript") {
      this.All = false;
      this.Angular = false;
      this.JavaScript = true;
      this.Unity = false;
      this.Firebase = false;
    }
    else if (name == "Firebase") {
      this.All = false;
      this.Angular = false;
      this.JavaScript = false;
      this.Unity = false;
      this.Firebase = true;
    } else if (name == "Unity") {
      this.All = false;
      this.Angular = false;
      this.JavaScript = false;
      this.Unity = true;
      this.Firebase = false;
    }


    this.btn1Active = false;
    this.btn2Active = false;
    this.btn3Active = false;
    this.btn4Active = false;
    this.btn5Active = false;

    if (int == 1)
      this.btn1Active = true;
    else if (int == 2)
      this.btn2Active = true;
    else if (int == 3)
      this.btn3Active = true;
    else if (int == 4)
      this.btn4Active = true;
    else if (int == 5)
      this.btn5Active = true;
  }
}
