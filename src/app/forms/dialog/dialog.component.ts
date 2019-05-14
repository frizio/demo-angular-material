import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    private dialogService: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    console.log('Open dialog');
    // Component + Configuration (optional)
    const dialogRef = this.dialogService.open(DialogExampleComponent, {data : {name: 'Frizio'}});
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Close Dialog, result: ${result}`);
      }
    );
  }

}
