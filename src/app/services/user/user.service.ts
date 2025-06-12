import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[] = [
    { id: 1, name: 'Praveen Singh', email: 'praveen@example.com' },
    { id: 2, name: 'Anita Sharma', email: 'anita@example.com' },
    { id: 3, name: 'Vikram Rao', email: 'vikram@example.com' }
  ]

  public selectedUser$ = new BehaviorSubject<User | null>(null);

  getUsers() : Observable<User[]> {
    return of(this.users).pipe(delay(1000))
  }

  selectUser(user: User): void {
    this.selectedUser$.next(user);
  }

  getSelectedUser(): Observable<User | null> {
    return this.selectedUser$.asObservable().pipe(delay(1000));
  }

  getSelectedUserValue(): User | null {
    return this.selectedUser$.getValue();
  }
}

export interface User{
  id : number;
  name : string;
  email : string
}
