import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-get-by-title',
  imports: [FormsModule,NgIf,NgClass,NgFor],
  templateUrl: './get-by-title.component.html',
  styleUrl: './get-by-title.component.css'
})
export class GetByTitleComponent {
    task_title:any 
    tasks:any=[]
    success:any|undefined

    constructor(private taskService:TaskService){
    }

    submit(){
      this.taskService.getTaskByTitle(this.task_title).subscribe({
        next:data=>{
          this.tasks=data;
          this.success="success"
        },
        error:(err)=>{
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

}