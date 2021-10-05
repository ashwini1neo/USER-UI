import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {

  public users: User[] = [];
  message: any;


  name: string;
  surname: string;
  pincode: string;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //Get All user on link clicking
  public getAllUsers() {
    this.service.getAllUsrs().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(data);
      },
      (error: User[]) => {
        console.log(error);
      }
    );

  }

  //Delete a user based on id
  public deleteUser(id: number) {
    console.log('Inside Componet deletUSer');
    confirm("Data will permanently delete");
    this.service.deleteUser(id).subscribe(
      data => {
        console.log('Inside componet data response');
        this.message = data;
      }, error => {
        console.log('Inside component error response ');
        console.error(console.error());

      });

    this.getAllUsers();
  }

  //Update User
  // //1)getUser By Id
  // public getUserById(id:number){
  //   console.log('Inside Componet getUserById');
  //   this.service.getuserById(id).subscribe(
  //     data=> {
  //       console.log('Inside componet data response');
  //       this.message=data;
  //     },error=>{
  //       console.log('Inside component error response ');
  //       console.error(console.error());

  //     });

  //   this.getAllUsers();
  // }

  //navigate user to edit Page
  public showUpdatePage(id: number) {
    this.router.navigate(['update', id]);
  }

  serachByName() {
    //&& this.name.length<this.name.length
    if (this.name != "") {
      this.users = this.users.filter(res => {
        return res.name.toLowerCase().match(this.name.toLowerCase())
      });
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }


  serachBySurname() {
    if (this.surname != "") {
      this.users = this.users.filter(res => {
        return res.surname.toLowerCase().match(this.surname.toLowerCase())
      });
    } else if (this.surname == "") {
      this.ngOnInit();
    }
   
  }

  serachBypincode() {
    if (this.pincode != "") {
      this.users = this.users.filter(res => {
        return res.pincode.toLowerCase().match(this.pincode.toLowerCase())
      });
    } else if (this.pincode == "") {
      this.ngOnInit();
    }
   
  }
}
