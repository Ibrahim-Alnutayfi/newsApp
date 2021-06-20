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
  newsList! : [];
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
    
  

  // APIValidation(){
  //     (res: any) => {
  //      this.newsData = res
  //     },
  //     (err) => {
  //       if (err.status == 400) {
  //         console.log("Bad request");
  //       } 
  //     }
  //   )
  

// this.http.get("https://newsapi.org/v2/everything?domains="+this.DOMAINS+"&apiKey="+this.API_KEY).subscribe(
//       (res: any) => {
//         console.log(res);
//       },
//       (err) => {
//         if (err.status == 400) {
//           console.log("Bad request");
//         } 
//       }
//     )



// fetchWallStreetJournal(){
//      return this.http.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey="+this.NEWS_API_KEY).subscribe(this.APIValidation)
//   }
//   fetchApple(){
//     let from = "2021-06-13";
//     let to = "2021-06-13";
//     let sortBy = "popularity"
//     let type = "apple"
//     this.http.get("https://newsapi.org/v2/everything?q="+type+"&from="+from+"&to="+to+"&sortBy="+sortBy+"&apiKey="+this.NEWS_API_KEY)
//   }
//   fetchTesla(){
//     let from = "2021-06-13";
//     let to = "2021-06-13";
//     let sortBy = "publishedAt"
//     let type = "tesla"
//     this.http.get("https://newsapi.org/v2/everything?q="+type+"&from="+from+"&to="+to+"&sortBy="+sortBy+"&apiKey="+this.NEWS_API_KEY)
//   }
//   fetchUSBusiness(){
//     let country = "us"
//     let category = "business"
//     this.http.get("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey="+this.NEWS_API_KEY)
//   }
//   fetchTechCrunch(){
//     let sources = "techcrunch"
//     this.http.get("https://newsapi.org/v2/top-headlines?sources="+sources+"&apiKey="+this.NEWS_API_KEY)
//   }





// if(newsType == "WallStreetJournal")
//       this.fetchWallStreetJournal()
//     else if(newsType == "Apple")
//       this.fetchApple()
//     else if(newsType == "Tesla")
//       this.fetchTesla()
//     else if(newsType == "USBusiness")
//       this.fetchUSBusiness()
//     else if(newsType == "TechCrunch")   
//       this.fetchTechCrunch()
//   }
  