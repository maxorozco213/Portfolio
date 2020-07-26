import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// NG-Zorro Styles
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule, NzDividerModule, NzGridModule, NzTypographyModule} from 'ng-zorro-antd';

// Components
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        ExperienceComponent,
        ProjectsComponent,
        ExtracurricularsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzCardModule,
        NzGridModule,
        NzDividerModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule { }
