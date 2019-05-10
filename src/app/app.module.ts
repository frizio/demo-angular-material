import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './tutorials/typography/typography.component';
import { ButtonComponent } from './tutorials/control/button/button.component';
import { ButtonToggleComponent } from './tutorials/control/button-toggle/button-toggle.component';
import { IconsComponent } from './tutorials/indicator/icons/icons.component';
import { BadgesComponent } from './tutorials/indicator/badges/badges.component';
import { ProgressSpinnerComponent } from './tutorials/indicator/progress-spinner/progress-spinner.component';
import { NavBarComponent } from './tutorials/navigation/nav-bar/nav-bar.component';
import { SideNavComponent } from './tutorials/navigation/side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './tutorials/navigation/menu/menu.component';
import { ListComponent } from './layout/list/list.component';
import { GridComponent } from './layout/grid/grid.component';

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
    SideNavComponent,
    MenuComponent,
    ListComponent,
    GridComponent
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
