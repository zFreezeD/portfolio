import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  whatText: number = 1;

  newTextPos: number = 0;

  isDeleting: boolean = true;
  isTimeout: boolean = false;

  myArray = [
    "Front End Developer",
    "Game Programmer",
    "Unity Programmer",
    "Designer",
    "Gamer",
    "Friend",
    "Dreamer",
    "Web Developer"
  ]
  id;
  constructor() {

  }

  public startAnimation: boolean = false;

  ngOnInit(): void {
    this.changeText()
    setTimeout(() => {
      this.startAnimation = true;
    }, 8000);
  }

  

  changeText(): void {
    setTimeout(() => {
      this.isDeleting = true;
      this.isTimeout = false;
      this.id = setInterval(() => {
        this.DeleteText();
        this.AddText();
      }, 100);
    }, 2000);




  }

  DeleteText(): void {
    if (this.isDeleting == true) {
      let text = document.getElementById('myJobs');
      let length = text.innerHTML.length;


      if (length == 0)
        this.isDeleting = false;


      text.innerHTML = text.innerHTML.slice(0, -1);
    }

  }

  AddText(): void {
    if (this.isDeleting == false && this.isTimeout == false) {

      let text = document.getElementById('myJobs');

      this.newTextPos = text.innerHTML.length;

      text.innerHTML += this.myArray[this.whatText].charAt(this.newTextPos);

      if (text.innerHTML.length == this.myArray[this.whatText].length) {
        this.isTimeout = true;
        setTimeout(() => {
          this.isDeleting = true;
          this.isTimeout = false;
        }, 1000);
        if (this.whatText == (this.myArray.length - 1))
          this.whatText = 0
        else
          this.whatText++;
      }
    }
  }
}

