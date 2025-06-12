import { Component, inject, OnInit } from '@angular/core';
import { User, UserService } from '../../../services/user/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  standalone : true
})
export class UserDetailComponent implements OnInit {

  form !: FormGroup;
  userService = inject(UserService);
  formBuilder = inject(FormBuilder)
  user : User | null = null;

  ngOnInit(): void {
   this.userService.getSelectedUser().subscribe(user => {
    this.user = user;
    if(user){
      this.form = this.formBuilder.group({
        name : [user.name, Validators.required],
        email : [user.email, [Validators.required, Validators.email]]
      })
    }
   })
  }

  onSubmit(){
    if(this.form.valid && this.user){
      const updatedUser : User = {
        ...this.user,
        ...this.form.value
      };
      this.userService.selectUser(updatedUser);
      alert('User Updated!');
    }
  }

}
