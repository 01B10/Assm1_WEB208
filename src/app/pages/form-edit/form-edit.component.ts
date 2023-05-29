import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/interfaces';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
  product!: IProduct;
  constructor(
    private fb: FormBuilder,
    private service: ServicesService,
    private router: ActivatedRoute,
    private direct: Router
  ) {}
  FormEdit = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+$')]],
    price: [0, [Validators.required, Validators.min(100)]],
    img: ['', [Validators.required]],
  });

  ngOnInit(): void {
    const id = Number(this.router.snapshot.params['id']);
    this.service.getData(id).subscribe((data) => {
      (this.product = data),
        this.FormEdit.patchValue({
          name: data.name,
          price: data.price,
          img: data.img,
        });
    });
  }

  get CheckName() {
    return this.FormEdit.get('name') as FormControl;
  }

  get CheckPrice() {
    return this.FormEdit.get('price') as FormControl;
  }

  get CheckImg() {
    return this.FormEdit.get('img') as FormControl;
  }

  onEdit() {
    this.product = {
      ...this.product,
      name: this.FormEdit.value.name || '',
      price: this.FormEdit.value.price || 0,
      img: this.FormEdit.value.img || '',
    };
    this.service
      .updateData(this.product)
      .subscribe(() => this.direct.navigateByUrl('/DashBoard'));
  }
}
