import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codziennie: odkurzanie';
  taskDate = '';
  // @ts-ignore
  config: { [key: string] } = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];


  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date(),
      };
    }, 500);
  }
  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskDate ='';
    this.taskName ='';
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  markTaskAsDone(task: Task) {
    task.done = true;
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
  }

  private sortTasks() {

  }
}

