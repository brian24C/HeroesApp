import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private httpClient: HttpClient) {
    console.log('service');
  }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }
}
