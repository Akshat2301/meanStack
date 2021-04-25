import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import {ArticleService} from './shared/article.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditComponent } from './components/edit/edit.component';
import {CreateComponent} from './components/create/create.component';
import{FormsModule} from '@angular/forms';
import { ShowComponent } from './components/show/show.component';
const appRoutes:Routes=[
  {path:'',component:ListComponent},
  {path:'edit',component:EditComponent},
  {path:'create',component:CreateComponent},
  {path:'show',component:ShowComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    EditComponent,
    CreateComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
