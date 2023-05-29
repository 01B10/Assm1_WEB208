import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  REST_API = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getDatas() {
    return this.http.get<IProduct[]>(this.REST_API);
  }

  getData(id: number) {
    return this.http.get<IProduct>(`${this.REST_API}/${id}`);
  }

  addData(product: IProduct) {
    return this.http.post<IProduct>(this.REST_API, product);
  }

  updateData(product: IProduct) {
    return this.http.put<IProduct>(`${this.REST_API}/${product.id}`, product);
  }

  deleteData(id: number) {
    return this.http.delete<IProduct>(`${this.REST_API}/${id}`);
  }
}
