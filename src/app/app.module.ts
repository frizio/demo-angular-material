import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { TypographyComponent } from './tutorials/typography/typography.component';

import { ButtonComponent } from './tutorials/control/button/button.component';
import { ButtonToggleComponent } from './tutorials/control/button-toggle/button-toggle.component';

import { IconsComponent } from './tutorials/indicator/icons/icons.component';
import { BadgesComponent } from './tutorials/indicator/badges/badges.component';
import { ProgressSpinnerComponent } from './tutorials/indicator/progress-spinner/progress-spinner.component';

import { NavBarComponent } from './tutorials/navigation/nav-bar/nav-bar.component';
import { SideNavComponent } from './tutorials/navigation/side-nav/side-nav.component';
import { MenuComponent } from './tutorials/navigation/menu/menu.component';

import { ListComponent } from './layout/list/list.component';
import { GridComponent } from './layout/grid/grid.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { CardsComponent } from './layout/cards/cards.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { StepperComponent } from './layout/stepper/stepper.component';

import { InputComponent } from './forms/input/input.component';
import { SelectComponent } from './forms/select/select.component';
import { AutocompleteComponent } from './forms/autocomplete/autocomplete.component';
import { CheckboxRadiobuttonComponent } from './forms/checkbox-radiobutton/checkbox-radiobutton.component';
import { DatepickerComponent } from './forms/datepicker/datepicker.component';
import { TooltipComponent } from './forms/tooltip/tooltip.component';
import { SnackbarComponent } from './forms/snackbar/snackbar.component';
import { DialogComponent } from './forms/dialog/dialog.component';
import { DialogExampleComponent } from './forms/dialog/dialog-example/dialog-example.component';

import { DataTableComponent } from './data-table/data-table/data-table.component';
import { VirtualScrollingComponent } from './layout/virtual-scrolling/virtual-scrolling.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

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
    GridComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,

    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxRadiobuttonComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,

    DataTableComponent,

    VirtualScrollingComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
