import { Component, OnInit } from '@angular/core';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classActive = false;
  routerLinkVariable = "/appRoutes";

  constructor() { }

  ngOnInit(): void {
  }

  changeMenu() {
    console.log("Test");

    if (this.classActive == true) {
      this.classActive = false
      document.body.style.overflowY = "scroll";
    }
    else {
      this.classActive = true;
      document.body.style.overflowY = "hidden";
    }


  }

  /* $(".navT").on("click", function(){
     $(this).toggleClass("active");
     $("#menu").toggleClass("open");
     $(".content").toggleClass("shift");
     
     
   })*/

}
