import { Component, OnInit } from '@angular/core';
import * as edu from '../../assets/education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    education: any = edu.schools;
    skills: any = edu.skills;

  constructor() { }

  ngOnInit(): void {
      console.log(this.education);
      console.log(this.skills);
  }

    sendToLink(link): void {
        const win = window.open(link);
        win.focus();
    }

}
