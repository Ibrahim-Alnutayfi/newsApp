import { DatePipe } from '@angular/common';
import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NewsAPIService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})

export class NewsDetailsComponent implements OnInit {
  fontsize = 18
  newsData : any 
  dataPipe = new DatePipe('en-US');
  
  constructor(private NewsAPIService:NewsAPIService,private cookieService: CookieService ) {
    if(this.cookieService.get('font')){
    this.fontsize = + this.cookieService.get('font')
    }
    this.newsData = JSON.parse(this.cookieService.get('newsDetails'))
  }
  cookieValue = this.cookieService.get('font');
  
  updateData(){
    this.NewsAPIService.updateData(this.newsData)
  }

  receiveFontSize($event : any){
    this.fontsize = $event
  }
  
  ngOnInit(): void {
    this.newsData = JSON.parse(this.cookieService.get('newsDetails'))
  }
}