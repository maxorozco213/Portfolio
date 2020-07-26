import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    repoURL: any = 'https://api.github.com/users/maxorozco213/repos';
    baseURL: any = 'https://api.github.com/repos/maxorozco213/';
    repoList: any;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        this.fetchData().then(() => {
            console.log(this.repoList);
        }).catch(error => {
            console.log('API error: ', error);
        });
    }

    private async fetchData(): Promise<void> {
        this.repoList = await this.httpClient.get(this.repoURL).toPromise();
    }

    sendToLink(link): void {
        const win = window.open(link);
        win.focus();
    }

    private async getRepoStats(repoName): Promise<any> {
        const response: any = await this.httpClient.get(`${this.baseURL}${repoName}/contributors?anon=1`).toPromise();

        let contributions;
        const contributors = response.length;

        for (const user of response) {
            if (user.login === 'maxorozco213') {
                contributions = user.contributions;
                return {collaborators: contributors, commits: contributions};
            }
        }

        console.log(response);
    }
}
