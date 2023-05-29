import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/interfaces';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  products!: IProduct[];
  constructor(private service: ServicesService) {}
  ngOnInit(): void {
    this.service.getDatas().subscribe((data) => (this.products = data));
  }

  onDelete(id: number) {
    this.service
      .deleteData(id)
      .subscribe(
        () => (this.products = this.products.filter((item) => item.id !== id))
      );
  }
}
