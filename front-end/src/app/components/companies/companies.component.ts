import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';
 
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies:any;
  company = new Company();

  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.getCompaniesData(); 
  }
  getCompaniesData() {
    this.dataService.getCompaniesData().subscribe(res => {
      this.companies = res;
    });
  }


  deleteEmployee(){
    this.dataService.deleteCompany(id).subscribe(res =>{
      this.getCompaniesData();
    })
  }
}
