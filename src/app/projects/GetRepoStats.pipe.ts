import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Pipe({
    name: 'getRepoStats',
    pure: true
})

export class GetRepoStatsPipe implements PipeTransform {
    baseURL: any = 'https://api.github.com/repos/maxorozco213/';
    response: any;

    constructor(private httpClient: HttpClient) {}

    async transform(repoName: any, type: string): Promise<any> {
        this.response = await this.httpClient.get(`${this.baseURL}${repoName}/contributors?anon=1`).toPromise()
            .catch(err => { console.log('THIS DID NOT WORK'); });

        let contributions;
        const contributors = this.response.length;

        if (type === 'contributors') {
            return contributors;
        } else {
            for (const user of this.response) {
                if (user.login === 'maxorozco213') {
                    contributions = user.contributions;
                    console.log({collaborators: contributors, commits: contributions});
                    return contributions;
                }
            }
        }
    }
}
