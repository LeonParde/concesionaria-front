export class Vehiculo{
    id:number;
    modelo:String;
    color:String;
    stock:number;
    precio:number;
    idsucursal:number;

    constructor(id: number, modelo: string, color: string, stock: number, precio: number, idsucursal: number) {
        this.id = id;
        this.modelo = modelo;
        this.color = color;
        this.stock = stock; 
        this.precio = precio;
        this.idsucursal = idsucursal;
      }
}