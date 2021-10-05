import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  user: User = new User();
  message:string;

  ngOnInit(): void {
    this.user=new User();
  }


  public createUser() {
    return this.service.createUser(this.user).subscribe(data => {
        this.user=data;
        this.message = "User created succsesfully with id "+this.user.id;
        this.user= new User();
    }, error => {
      console.log("userNotSasved with id"+this.user.id);
      this.message = "user Not Saved with id "+this.user.id;
    }
    );
  }

}
