// Importing required libraries.
import { Injectable } from "@angular/core"
import { Task} from "./task"
import { TASKS } from "./task-list"

@Injectable()
export class TaskService {
    
    // Get Task data.
    getTaskList(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }

    // Get Task Details by selected Id.
    getTaskDetails(id: number): Promise<Task> {
        return this.getTaskList()
        .then(tasks => tasks.find(task => task.id === id));
    }

    // Add Task data.
    addTask(currentTask: Task) {
        this.getTaskList().then(taskList => {
            let maxIndex = taskList.length - 1;
            let taskWithMaxIndex = taskList[maxIndex];
            currentTask.id = taskWithMaxIndex.id + 1;
            taskList.push(currentTask);
        })
    }
}
