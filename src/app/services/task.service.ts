import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private getAllTaskApi='http://localhost:8081/task/all'
  private postTaskApi='http://localhost:8081/task/add'
  private getTaskByIdApi='http://localhost:8081/task/getById/'
  private UpdateTaskByIdApi='http://localhost:8081/task/update/'
  private deleteByIdApi='http://localhost:8081/task/deletebyid/'
  private getTaskByTitleApi='http://localhost:8081/task/getByTitle/'

  constructor(private httpClient: HttpClient) { }

  public getTaskByTitle(obj:any){
    return this.httpClient.get(this.getTaskByTitleApi+obj);
  }
  public getAllTask(){
    return this.httpClient.get(this.getAllTaskApi);
  }

  public postTask(obj:any):Observable<any>{
     let new_obj={
        title: obj.title,
        description: obj.description,
        due_date: obj.due_date,
        priority: obj.priority,
        status: obj.status
    }
    return this.httpClient.post(this.postTaskApi,new_obj);
  }
  
  public getTaskById(id:any){
    return this.httpClient.get(this.getTaskByIdApi+id);
  }

  public updateTaskById(obj:any,id:any):Observable<any>{
    let new_task={
      title: obj.title,
      description: obj.description,
      due_date: obj.due_date,
      priority: obj.priority,
      status: obj.status
    }
    return this.httpClient.post(this.UpdateTaskByIdApi+id,new_task);
  }
  public deleteTaskById(id:any){
    return this.httpClient.delete(this.deleteByIdApi+id);
  }
}
