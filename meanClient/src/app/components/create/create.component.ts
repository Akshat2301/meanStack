import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  article:Article;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.article={
      id:'',
      title:'',
      description:''
    }
  }
  Create(){
    this.articleService.createArticle(this.article).subscribe(
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
