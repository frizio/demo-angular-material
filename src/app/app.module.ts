import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './tutorials/typography/typography.component';
import { ButtonComponent } from './tutorials/button/button.component';
import { ButtonToggleComponent } from './tutorials/button-toggle/button-toggle.component';
import { IconsComponent } from './tutorials/icons/icons.component';
import { BadgesComponent } from './tutorials/badges/badges.component';
import { ProgressSpinnerComponent } from './tutorials/progress-spinner/progress-spinner.component';
import { NavBarComponent } from './tutorials/navigation/nav-bar/nav-bar.component';
import { SideNavComponent } from './tutorials/navigation/side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavBarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
