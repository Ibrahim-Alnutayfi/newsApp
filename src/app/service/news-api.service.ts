import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  private content = new BehaviorSubject<Object>({});
  public share = this.content.asObservable();
  NEWS_API_KEY = "0acb6d92fc48489f95a6acb977ad6d09"
  URL : any ;
  todayDay : any ;

  constructor(private http:HttpClient) { }

  updateData(data:any){
    this.content.next(data)
  }

  async fetchAPI(newsType:any){
    await this.adoptAPI(newsType)
    return  await this.http.get(this.URL+this.NEWS_API_KEY)
   }

   adoptAPI(newsType:string){
     let date = new Date();
     date.setDate(date.getDate() - 1);
     this.todayDay = formatDate(date,'yyyy-MM-dd', 'en');

     switch(newsType){
       case 'Wall Street Journal':
         this.URL = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey="  
         break;
       case 'Apple':
         this.URL = "https://newsapi.org/v2/everything?q=apple&from="+this.todayDay+"&sortBy=popularity&apiKey="  
         break;
       case 'Tesla':
         this.URL ="https://newsapi.org/v2/everything?q=tesla&from="+this.todayDay+"&sortBy=publishedAt&apiKey="
         break;
       case 'US Business':
         this.URL = "https://newsapi.org/v2/top-headlines?country=us&from="+this.todayDay+"&category=business&apiKey="  
         break;
       case 'Tech Crunch':
         this.URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&from="+this.todayDay+"&apiKey="  
    }  
   }
}