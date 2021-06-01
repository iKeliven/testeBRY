import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';
 
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee();

  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData(); 
  }
  getEmployeesData() {
    this.dataService.getEmployeeData().subscribe(res => {
      this.employees = res;
    });
  }

  deleteEmployee(){
    this.dataService.deleteEmployee(id).subscribe(res =>{
      this.getEmployeesData();
    })
  }
}
