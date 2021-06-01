import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/company';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.scss']
})
export class CompanyInsertComponent implements OnInit {
  [x: string]: any;
  id:any;
  data:any;
  company = new Company();

  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id)
    this.id = this.route.snapshot.params.id;
    this.insertCompany();
  }

  //funcion insert data
  insertCompany(){
    this.dataService.insertCompany(this.company).subscribe(res => {
      this.getCompaniesData();
    })
  }
}
