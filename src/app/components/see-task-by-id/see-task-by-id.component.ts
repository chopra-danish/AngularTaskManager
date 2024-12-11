import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-see-task-by-id',
  imports: [FormsModule,NgIf],
  templateUrl: './see-task-by-id.component.html',
  styleUrl: './see-task-by-id.component.css'
})
export class SeeTaskByIdComponent {
task: any=[]
task_id:any=localStorage.getItem('update_id')
successMsg:string|undefined;
errorMsg:string|undefined;

constructor(private taskService:TaskService){
  this.taskService.getTaskById(this.task_id).subscribe({
    next:data=>{
      this.task=data;
    },
    error:(err)=>{
    },
  })
}

onFormSubmit(){
  this.taskService.updateTaskById(this.task,this.task_id).subscribe({
    next:data=>{
      this.successMsg="Updated Task Successfully!";
    },
    error:(err)=>{
      this.errorMsg="Sorry, Couldn't update !"
    },
  })
}
}
