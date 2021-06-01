import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompaniesComponent } from './components/companies/companies.component';

import { HttpClientModule } from '@angular/common/Http';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { EmployeeInsertComponent } from './components/employee-insert/employee-insert.component';
import { CompanyInsertComponent } from './components/company-insert/company-insert.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent},
  { path: '', component:CompaniesComponent},
  { path: 'edit/:id', component:EmployeeEditComponent},
  { path: 'edit/id', component:CompanyEditComponent},
  { path: 'insert/:id', component:EmployeeInsertComponent},
  { path: 'insert/id', component:CompanyInsertComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    CompaniesComponent,
    EmployeeEditComponent,
    CompanyEditComponent,
    EmployeeInsertComponent,
    CompanyInsertComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    MultiSelectModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
