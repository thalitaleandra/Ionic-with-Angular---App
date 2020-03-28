import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeuProvedorService {
  private baseURL: string = 'https://api.github.com/';

  constructor(public http: HttpClient) {
    console.log('estou funcionando');
  }
  public getPopularRepo() {
    return this.http.get(this.baseURL + 'repositories');
  }

  private getApiKey(): string {
    return '?api_key=cb4ca198f2e98877caee30c21a507451';
  }
}
