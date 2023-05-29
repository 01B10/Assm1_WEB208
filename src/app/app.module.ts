import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './layout/user/user.component';
import { FormAddComponent } from './pages/form-add/form-add.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';
import { GetDataComponent } from './component/get-data/get-data.component';

@NgModule({
  declarations: [AppComponent, UserComponent, FormAddComponent, FormEditComponent, GetDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
