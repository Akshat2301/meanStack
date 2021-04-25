import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  article:Article;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.article=this.articleService.getter()
  }

  Update(){
    this.articleService.updateArticle(this.article).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
      console.log(error);
      }
    

    )
  }

}
