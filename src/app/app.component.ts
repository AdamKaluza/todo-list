import { Component } from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [{



  }]

  constructor() {
    setTimeout(() => {this.config = {
      title: 'Lista zadań',
      footer: '© Lista zadań, zbudowana w Angularze.',
      date: new Date()
    };
    },500);

  }
}
