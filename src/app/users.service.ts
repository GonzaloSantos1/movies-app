import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: { email: string; password: string }[] = [
    { email: 'test@test.com', password: 'test' },
    { email: 'bassem@test.com', password: 'test' },
  ];

  private isLoggedIn = false;

  constructor() {}

  getLoginStatus() {
    return this.isLoggedIn;
  }

  loginUser(loginMail: string, loginPassword: string): boolean {
    this.isLoggedIn = this.users.some((user) => {
      return loginMail === user.email && loginPassword === user.password;
    });
    return this.isLoggedIn;
  }

}
