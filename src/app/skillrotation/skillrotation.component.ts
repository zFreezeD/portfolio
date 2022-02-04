import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skillrotation',
  templateUrl: './skillrotation.component.html',
  styleUrls: ['./skillrotation.component.scss']
})
export class SkillrotationComponent implements OnInit {



  /*
      < div class = "main-container-object" >
        <div class="main-container-object-head">
          <img src="assets/img/skills/unityIcon.png" >
            </div>
            < div class="main-container-object-body" >
              <p>Unity Engine < /p>
                < /div>
                < /div>
  */

  skillName = [
    "Angular",
    "Blender 3D",
    "Canva",
    "C#",
    "CSS",
    "GitHub",
    "HTML",
    "Illustrator",
    "JavaScript",
    "Adobe Photoshop",
    "Slack",
    "Unity Engine",
    "Zoom",
  ]

  skillImage = [
    "assets/img/skills/angularIcon.svg",
    "assets/img/skills/blenderIcon.png",
    "assets/img/skills/canvaIcon.png",
    "assets/img/skills/cSharpIcon.png",
    "assets/img/skills/css3IconIcon.png",
    "assets/img/skills/githubIcon.png",
    "assets/img/skills/html5Icon.png",
    "assets/img/skills/illustratorIcon.png",
    "assets/img/skills/javascriptIcon.png",
    "assets/img/skills/photoshopIcon.png",
    "assets/img/skills/slackIcon.png",
    "assets/img/skills/unityIcon.png",
    "assets/img/skills/zoomIcon.png",
  ]

  skillBool = [
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
  ]

  doPlay = false;

  group1Count = 0;
  group2Count = 0;
  group3Count = 0;
  
  constructor() {
    
  } 


  ngOnInit() {
    //let test = document.getElementById('group1');
    //this.update();
  }

  update() {

    setInterval(() => {
    }, 8000);

    setInterval(() => {
    }, 1000 / 30);
  }



}
