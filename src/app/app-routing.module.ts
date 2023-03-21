import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SkillrotationComponent } from './skillrotation/skillrotation.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'skillrotation', component: SkillrotationComponent },
  { path: 'data-protection/:id', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
