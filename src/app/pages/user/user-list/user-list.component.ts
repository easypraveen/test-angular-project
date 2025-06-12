import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  standalone : true
})
export class UserListComponent implements OnInit {
  users:User[] = [];
  isLoading = true;

  constructor( private userService:UserService, private router:Router){

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.isLoading = false
    });
  }

  selectUser(user : User){
   this.userService.selectUser(user);
   this.router.navigate(['/user',user.id])
  }
}
