import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {ArticleService} from '../../shared/article.service';
import {Article} from '../../article'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  article:Article;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.article=this.articleService.getter()
  }
  editArticle(article){
    this.articleService.setter(article);
    this.router.navigate(['/edit'])
  }

}
