import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Electrodomestico } from 'src/app/model/Electrodomestico';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Electrodomesticos:any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getElectrodomesticos().subscribe(res => {
      console.log(res.valueOf);
      this.Electrodomesticos=res;
    })
  }
}

