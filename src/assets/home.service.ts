import { Injectable } from '@angular/core';
interface userDetailes {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}
@Injectable({
    providedIn:'root'
})
export class homeService {
  private users: userDetailes[] = [];

  addDetailes(user: userDetailes) {
    this.users.push(user);
  }
  getDetailes():userDetailes[]{
    return this.users
  }
}
