import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { SeeTaskByIdComponent } from './components/see-task-by-id/see-task-by-id.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { GetByTitleComponent } from './components/get-by-title/get-by-title.component';

export const routes: Routes = [

    {
        path: '', component:AppComponent, children:[
            {
                path:'', component:TaskViewComponent
            },
            {
                path:'task-by-id', component:SeeTaskByIdComponent
            },
            {
                path:'add-task', component:AddTaskComponent
            },
            {
                path:'update', component:SeeTaskByIdComponent
            },
            {
                path:'getByTitle', component:GetByTitleComponent
            }
        ]
    }
];
