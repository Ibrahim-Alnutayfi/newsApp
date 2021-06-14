import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})
export class NewsHeadlinesComponent implements OnChanges {
 @Input() newsType! : any;
 @Input() age! : any;

  API_KEY = "0acb6d92fc48489f95a6acb977ad6d09"
  DOMAINS = "wsj.com"
  newsTypes = [
    'WallStreetJournal',
    'Apple',
    'Tesla',
    'USBusiness',
    'TechCrunch'
  ]

  constructor(private http:HttpClient) { }

  ngOnChanges(changes: SimpleChanges) : void {
    console.log("changes" + changes);
    console.log("change to ------- : " + this.newsType);
    alert("It works !!!")
  }
  // ngOnInit(){
  //   console.log("changes :" + this.newsType);  
  // }
  // ngDoCheck(){
  //   console.log("change to2 : " + this.newsType);
  // }
  setNewsType(newsType:any){
    this.newsType = newsType;
    // console.log("newsType : " + newsType);
  }

  fetchAPI(){
    this.http.get("https://newsapi.org/v2/everything?domains="+this.DOMAINS+"&apiKey="+this.API_KEY).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        if (err.status == 400) {
          console.log("Bad request");
        } 
      }
    )
  }


}
