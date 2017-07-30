// Importing required libraries.
import { Component } from "@angular/core"
import { Task } from "../Service/task"
import { TaskService } from "../Service/task.service"
import { Router, Params, ActivatedRoute } from "@angular/router"
import { Location } from "@angular/common"
import "rxjs/add/operator/SwitchMap"

// Component Decorator.
@Component({
    selector:"details-task",
    templateUrl: "../View/details-task.component.html",
    providers: [TaskService]
})
export class DetailsTaskComponent {
    // Task instance created to store select task.
    detailsTask: Task = new Task();

    constructor(private _taskServeice: TaskService, 
    private _router: Router, 
    private _route: ActivatedRoute,
    private _location: Location) {

    }

    // On Init getting task details based on Parama id
    ngOnInit() {
        this._route.params
        .switchMap((params:Params) =>  this._taskServeice.getTaskDetails(+params['id']))
        .subscribe(task => this.detailsTask = task);
    }

    // Going back to list page.
    goBack() {
        this._location.back();
    }
    
}
