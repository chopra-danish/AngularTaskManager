import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgClass, NgFor } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  imports: [NgFor,NgClass],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent implements OnInit{

   task: any=[]
  errotMsg: any|undefined

  constructor(private taskService:TaskService, private router:Router){}
  ngOnInit(): void {
    this.taskService.getAllTask().subscribe({
      next:data=>{
        this.task=data;
        
      },
      error:(err)=>{
        this.errotMsg="No Task Found";
      },
    })
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'yellow';
      case 'Low':
        return 'green';
      default:
        return '';
    }
  }

  removeCard(id: any,i:number): void {
   this.taskService.deleteTaskById(id).subscribe({
    next:data=>{
      this.task.splice(i,1);
    },
    error:(err)=>{
    },
   })
  }
  updateCard(id: any): void {
    localStorage.setItem('update_id',id)
    this.router.navigateByUrl("/update")
  }

}
 
