// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { Task } from "../Service/task"
import { TaskService } from "../Service/task.service"
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
    selector: "task-list",
    templateUrl: "../View/list-task.component.html",
    providers: [TaskService]
})
export class ListTaskComponent {
    // List of Tasks.
    listOfTasks: Task [];

    // Search Field variable,
    private searchTask: string;

    // Injecting services into constructor. 
    constructor(private _taskService: TaskService) {}

    // Initialising  Form Grpup, drop down and tasks
    ngOnInit(): void {
      this._taskService.getTaskList()
      .then(listOfTasks => this.listOfTasks = listOfTasks);

      this.searchTask = ""; // Initialising search field value.
    }
}
