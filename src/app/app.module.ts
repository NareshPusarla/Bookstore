import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthserviceService } from '../app/service/authentication/authservice.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from'./Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    GetallbooksComponent,
    ForgotpasswordComponent,
    QuickviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
