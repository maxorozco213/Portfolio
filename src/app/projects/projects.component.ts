import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    repoURL: string = 'https://api.github.com/users/maxorozco213/repos';
    repoList: any;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        this.fetchData().then(res => {
            // this.repoList = res;
            console.log(this.repoList);
        }).catch(error => {
            console.log('API error: ', error);
        });
    }

    private async fetchData(): Promise<void> {
        this.repoList = await this.httpClient.get(this.repoURL).toPromise();
    }
}
