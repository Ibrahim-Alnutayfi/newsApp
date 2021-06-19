import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewsAPIService } from 'src/app/service/news-api.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})

export class NewsHeadlinesComponent{
  constructor(private http:HttpClient,private NewsAPIService: NewsAPIService,private fb: FormBuilder,private router: Router) { 
 }

 pipe = new DatePipe('en-US');
 newsDetailsList! : any ;
 newstype : any ;
 newsTypes = [
   "Wall Street Journal",
   "Tech Crunch",
   "US Business",
   "Apple",
   "Tesla",   
 ];


  async setNewsType(newsType:any){
    if(newsType !== this.newstype){
      this.newstype = newsType;
      (await this.NewsAPIService.fetchAPI(this.newstype)).subscribe(
        (res: any) => {
          this.newsDetailsList = res.articles
        },
        (err:any) => {
          this.newsDetailsList = [];
          if (err.status == 400) 
            console.log("Bad request");
          else if (err.totalResult == 0)
            console.log("sorry something went wrong"); 
        }
      )
    }
    else
      console.log("yes it's already " +  this.newstype);
  }

  redirectToDetailsPage(newsDetails:any){
    this.NewsAPIService.updateData(newsDetails)
    this.router.navigate(['/newsDetails/' + newsDetails.title])
  }

}
