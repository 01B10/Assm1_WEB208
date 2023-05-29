import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layout/user/user.component';
import { FormAddComponent } from './pages/form-add/form-add.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';
import { GetDataComponent } from './component/get-data/get-data.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'DashBoard',
        pathMatch: 'full',
      },
      {
        path: 'DashBoard',
        component: GetDataComponent,
      },
      {
        path: 'FormAdd',
        component: FormAddComponent,
      },
      {
        path: 'FormEdit/:id',
        component: FormEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
