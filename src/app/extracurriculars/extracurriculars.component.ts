import { Component, OnInit } from '@angular/core';
import * as exp from '../../assets/expData.json';

@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.css']
})
export class ExtracurricularsComponent implements OnInit {
    expData: any = exp.extra;

    constructor() { }

    ngOnInit(): void {
        console.log(this.expData);
        this.expData.forEach(item => {
        console.log(item.acquiredSkills);
        });
    }
}
