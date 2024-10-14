import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../model/Vehiculo';
import {ServiceService} from '../../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListarComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(){
    this.service.getAutos().subscribe(data => {
      this.vehiculos = data;
    });
  }
}
