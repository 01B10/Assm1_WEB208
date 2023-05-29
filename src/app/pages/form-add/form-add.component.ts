import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/interfaces';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss'],
})
export class FormAddComponent {
  constructor(
    private fb: FormBuilder,
    private service: ServicesService,
    private direct: Router
  ) {}
  FormAdd = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+$')]],
    price: [0, [Validators.required, Validators.min(100)]],
    img: ['', [Validators.required]],
  });

  get CheckName() {
    return this.FormAdd.get('name') as FormControl;
  }

  get CheckPrice() {
    return this.FormAdd.get('price') as FormControl;
  }

  get CheckImg() {
    return this.FormAdd.get('img') as FormControl;
  }

  onAdd() {
    const product: IProduct = {
      name: this.FormAdd.value.name || '',
      price: this.FormAdd.value.price || 0,
      img: this.FormAdd.value.img || '',
    };
    this.service
      .addData(product)
      .subscribe(() => this.direct.navigateByUrl('/DashBoard'));
  }
}
