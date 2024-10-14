import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../model/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  Url = `http://localhost:8080/vehiculos/listar`;
  getAutos() {
    return this.http.get<Vehiculo[]>(this.Url);
  }
}

