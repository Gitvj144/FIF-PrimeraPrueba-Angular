import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentaService {

  url = 'http://localhost:4000/rent';
  httpOptions: any;
  constructor(private http: HttpClient) {
  }

  async createRegistro(rut: string, numero: string, mail: string, renta: string) {
    const body = {
      RUT: rut,
      NUMBER: numero,
      EMAIL: mail,
      RENT: renta
    };
    return await this.http.post( this.url , body).toPromise();
  }
}
