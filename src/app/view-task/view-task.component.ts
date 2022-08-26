import { Component, OnInit } from '@angular/core';
import { AddTaskService } from '../add-task.service';
import { Task } from '../task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: AddTaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTask();
  }
}
