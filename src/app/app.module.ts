import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms'; // Certifique-se de importar isso

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule], // Mova FormsModule para cá
  providers: [],
  bootstrap: [AppComponent], // Mantenha apenas AppComponent aqui
})
export class AppModule {}
