import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User = new User();
  id: number;
  msg:string;
  constructor(private service: UserService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    //catch router variabels and lload user by backend and map to form
    this.id = this.activateRouter.snapshot.params['id'];
    this.service.getuserById(this.id).subscribe(
      data => {
        this.user = data;
      }, error => {
        console.log(error);
      });


  }
  //update user
  public updateUser() {
    this.service.updateUser(this.user).subscribe(
      data=>{
        this.user=data;
      },
      error=>{console.error(error);
    });
    this. msg="User " +this.id +"updated Succsessfully"
    this.router.navigate(['all']);
   }
  

}
