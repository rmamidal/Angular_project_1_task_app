import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AddTaskComponent } from './Component/add-task.component';
import { ListTaskComponent } from './Component/list-task.component';
import { DetailsTaskComponent } from './Component/details-task.component';
import { PageNotFoundComponent } from './Component/page-not-found.component';
import { SearchPipe } from "./Pipe/search.pipe";
import { ApplicationRoutes } from './app.routes'
import { CapitalisePipe } from "./Pipe/capitalise.pipe";
import { HoverOverComponent } from "./directive/hover-over.directive";


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    DetailsTaskComponent,
    PageNotFoundComponent,
    SearchPipe,
    CapitalisePipe,
    HoverOverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ApplicationRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
