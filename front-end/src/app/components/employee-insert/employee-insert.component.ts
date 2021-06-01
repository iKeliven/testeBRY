import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.scss']
})
export class EmployeeInsertComponent implements OnInit {
  [x: string]: any;
  id:any;
  data:any;
  employee = new Employee();

  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id)
    this.id = this.route.snapshot.params.id;
    this.insertEmployee();
  }

  //funcion insert data
  insertEmployee(){
    this.dataService.insertEmployee(this.employee).subscribe(res => {
      this.getEmployeesData();
    })
  }
}