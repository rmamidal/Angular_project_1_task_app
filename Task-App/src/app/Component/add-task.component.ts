// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { Task } from "../Service/task"
import { TaskService } from "../Service/task.service"
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms"
import { Router } from "@angular/router"

@Component({
    selector: "task-add",
    templateUrl: "../View/add-task.component.html",
    providers: [TaskService]
})
export class AddTaskComponent {
    // Binding Logic.
    currentTask: Task = new Task();

    // Search Field variable,
    private searchTask: string;

    // Declaring myForm of Type FormGroup
    formTask: FormGroup;


    // Injecting services into constructor. 
    constructor(private _router: Router, private _taskService: TaskService, private _formBuilder: FormBuilder) {}

    // Initialising  Form Grpup, drop down and tasks
    ngOnInit() {
      // Using Form Builder.
      this.formTask = this._formBuilder.group({
        'title': ['',Validators.compose([Validators.required])],
        'description': ['', Validators.compose([Validators.required])],
        'taskCompletionDate': ['', Validators.compose([Validators.required])]
      });

    }

    // Adding task to task list
    addTask() {
        this._taskService.addTask(this.currentTask);
        this._router.navigate(["/ListTask"]); // Redirect to Task list page.
        this.currentTask = new Task(); // Clearing Object.
        this.formTask.reset();; // Reset form after submiting Task info.
    }
}
