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

  openDialog(message: string, action: string) {
    console.log('Open dialog');

  }

}
