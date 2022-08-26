import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class AddTaskService {
  tasks: Task[] = [
    { id: 0, task: 'Badmidton' },
    { id: 1, task: 'Take dog outside' },
  ];

  constructor() {}

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(title: string): void {
    this.tasks.push({
      id: Math.floor(Math.random() * 100),
      task: title,
    });
  }
}
