import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {ArticleService} from '../../shared/article.service';
import {Article} from '../../article'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  arti:Article;
  articles:Article[];
  private article:Article[];
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articles = []
    this.readArticles()
  }
  newArticle(event:any){
    event.preventDefault();
    this.articleService.setter(new Article());
    this.router.navigate(['/create']);
  }
  editArticle(article){
    this.articleService.setter(article);
    this.router.navigate(['/edit'])
  }
  showArticle(article){
    this.articleService.setter(article);
    this.router.navigate(['/show'])
  }
  readArticles(){
    this.articleService.readArticles().subscribe(
      data=>{
        console.log(data);
        for(var i=0;i<data['msg'].length;i++)
        {
            this.arti={
              id:data['msg'][i]._id,title:data['msg'][i].title,
              description:data['msg'][i].description }
              this.articles.push(this.arti);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  doDelete(article){
    this.articleService.deleteArticle(article.id).subscribe(
      data=>{
          this.articles.splice(this.articles.indexOf(article),1);
      },
      error=>{

      }
    )
  }

}
