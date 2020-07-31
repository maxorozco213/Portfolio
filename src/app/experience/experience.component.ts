import { Component, OnInit } from '@angular/core';
import * as exp from '../../assets/expData.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    expData: any = exp.professional;

    constructor() {  }

    ngOnInit(): void {
        console.log(this.expData);
        this.expData.forEach(item => {
            console.log(item.acquiredSkills);
        });
    }

    sendToLink(link): void {
        const win = window.open(link);
        win.focus();
    }
}
