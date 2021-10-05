import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string='http://localhost:6062/user';

  //http://localhost:6062/user/

  constructor(private http:HttpClient) { }


  //Get all users
  public getAllUsrs():Observable<User[]>{
      console.log("Inside UserService TS");
   return this.http.get<User[]>(`${this.baseUrl}/allUsers`);
  }

  //Delete a User
  public deleteUser(id:number):Observable<any>{
    console.log('Inside service delete Method');
    return this.http.delete(`${this.baseUrl}/hdelete/${id}`,{responseType:'text'});
  //  this.getAllUsrs();
  }

  //Create a user
  public createUser(user:User):Observable<any>{
   return this.http.post(`${this.baseUrl}/addUser`,user);
  }

  //get user by id
  public getuserById(id:number):Observable<User>{
    console.log("Inside UserService TS getuserById()");
 return this.http.get<User>(`${this.baseUrl}/getById/${id}`);
}

//update user
public updateUser(user:User):Observable<any>{
  return this.http.put(`${this.baseUrl}/update`,user);
 }
}
