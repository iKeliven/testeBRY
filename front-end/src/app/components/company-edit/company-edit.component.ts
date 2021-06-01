import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/company';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  id:any;
  data:any;
  company = new Company();

  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id)
    this.id = this.route.snapshot.params.id;
    this.getCompany();
  }

  getCompany(){
    this.dataService.getCompanyById(this.id).subscribe(res =>{
      //console.log(res);
      this.data = res;
      this.company = this.data;
    });
  }

  updateCompany(){
    this.dataService.updateCompany(this.id, this.company).subscribe(res =>{
        
    });
  }
}
