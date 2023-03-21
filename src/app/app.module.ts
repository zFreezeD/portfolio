import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillrotationComponent } from './skillrotation/skillrotation.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { PokedexShowcaseComponent } from './pokedex-showcase/pokedex-showcase.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    SkillsetComponent,
    MyProjectsComponent,
    ContactComponent,
    FooterComponent,
    SkillrotationComponent,
    DataProtectionComponent,
    PokedexShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: DataProtectionComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
