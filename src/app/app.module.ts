import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgServeValidationDisplayModule } from '@ngserveio/validation-messages';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgServeMaterialFormsModule } from '@ngserveio/material-forms';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgServeValidationDisplayModule,
    NgServeMaterialFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
