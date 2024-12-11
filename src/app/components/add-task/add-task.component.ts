import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 successMsg:any|undefined
 errorMsg:any|undefined
 taskRegister: FormGroup;

 constructor(private taskService:TaskService){
  this.taskRegister=new FormGroup({
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        due_date: new FormControl('',[Validators.required]),
        priority: new FormControl('',[Validators.required]),
        status: new FormControl('',[Validators.required])
  })
 }

 onFormSubmit(){
  this.taskService.postTask(this.taskRegister.value).subscribe({
    next:data=>{
      this.successMsg="Added Task Successfully!";
    },
    error:(err)=>{
      this.errorMsg="Sorry, Couldn't Add Task!"
    },
  })
 }
}
