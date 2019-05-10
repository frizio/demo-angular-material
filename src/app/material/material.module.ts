import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule,
         MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
         MatToolbarModule,
         MatSidenavModule,
         MatMenuModule,
         MatListModule,
         MatDividerModule} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
