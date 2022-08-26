import { Component, OnInit } from '@angular/core';
import { AddTaskService } from '../add-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  task: string = '';
  message: string = '';

  constructor(private taskService: AddTaskService) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    this.taskService.createTask(this.task);
    this.task = '';
    this.message = 'Add Task Successfully';
  }
}
