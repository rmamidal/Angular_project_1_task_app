// Importing required libraries.
import{ Routes, RouterModule } from '@angular/router'
import { AddTaskComponent } from './Component/add-task.component'
import { ListTaskComponent } from './Component/list-task.component'
import { PageNotFoundComponent } from './Component/page-not-found.component'
import { DetailsTaskComponent } from './Component/details-task.component'

// Defining path and assigning component to it.
export const ApplicationRoutes: Routes = [
    { path:'', redirectTo:'/AddTask', pathMatch:'full'}, /* Default routes*/
    { path:'AddTask', component: AddTaskComponent },
    { path:'ListTask', component: ListTaskComponent },
    { path: 'DetailsTask/:id', component: DetailsTaskComponent},
    { path:'**', component: PageNotFoundComponent } /* Wild card routes */
]
