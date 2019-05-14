import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(
    private snackBarService: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbar(message: string, action: string) {
    console.log('Delete Clicked');
    let snackBarRef = this.snackBarService.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(
      () => {
        console.log('The snackbar was dismissed');
      }
    );

    snackBarRef.onAction().subscribe(
      () => {
        console.log('The snackbar action was triggered');
      }
    );

    return;
  }

}
