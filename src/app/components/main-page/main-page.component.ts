import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/model/Usuario';
import { Meet } from 'src/app/model/Meet';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Usuarios:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(res => {
      console.log(res);
      this.Usuarios=res
    })
  }

}
