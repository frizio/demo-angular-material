import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule,
         MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
         MatToolbarModule,
         MatSidenavModule,
         MatMenuModule,
         MatListModule,
         MatDividerModule,
         MatGridListModule} from '@angular/material';
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
  MatDividerModule,
  MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
