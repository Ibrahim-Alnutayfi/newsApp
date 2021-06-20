import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeadlinesComponent } from './components/news-headlines/news-headlines.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FontSizeComponent } from './components/font-size/font-size.component';
import { Store, StoreModule } from '@ngrx/store';
import { FontReducer } from './reducer/font-size.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeadlinesComponent,
    NewsDetailsComponent,
    NotFoundComponent,
    FontSizeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ fontSize : FontReducer})
  ],
  providers: [FormBuilder,Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
