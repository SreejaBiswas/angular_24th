import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent  {
  name: string ="Sreejaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  address: string="Kolkata";
  dob: Date=new Date();

}
