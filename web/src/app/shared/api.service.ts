import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  url = "http:localhost:8000/api/ships";
  constructor(private http: HttpClient) {}

  addShip(ship: any)
  {
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    let httpOptions = 
    {
      headers: httpHeader
    };
    return this.http.post(this.url, ship, httpOptions);
  }
}

