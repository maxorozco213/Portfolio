import { Component, OnInit } from '@angular/core';
import * as Exp from '../../assets/expData.json';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor() {
      console.log(Exp);
  }

  ngOnInit(): void {
  }

}
