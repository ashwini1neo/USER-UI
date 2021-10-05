import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
const routes: Routes = [

  {path :'create', component : UserCreateComponent},
  {path :'all', component : AllUsersComponent},
  {path :'update/:id', component : UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
