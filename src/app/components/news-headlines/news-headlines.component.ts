import { Component } from '@angular/core';
import { NewsAPIService } from 'src/app/service/news-api.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})

export class NewsHeadlinesComponent{
  constructor(private NewsAPIService: NewsAPIService,private router: Router,private cookieService: CookieService) {  }

 dataPipe = new DatePipe('en-US');
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
    this.cookieService.set("newsDetails",JSON.stringify(newsDetails))
    this.router.navigate(['/newsDetails/' + newsDetails.title])
  }

}
