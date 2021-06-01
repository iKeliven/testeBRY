import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //crud Employee

  getEmployeeData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertEmployee( data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee', data);
  }
  
  deleteEmployee(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee', id);
  }

  updateEmployee(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/addEmployee'+id, data);
  }

  getEmployeeById(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }

  //crud company

  getCompanyData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/companyes');
  }

  insertCompany( data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addCompany', data);
  }
  
  deleteCompany(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteCompany', id);
  }

  updateCompany(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/addCompany'+id, data);
  }

  getCompanyById(){
    return this.httpClient.get('http://127.0.0.1:8000/api/company/'+id);
  }

}
