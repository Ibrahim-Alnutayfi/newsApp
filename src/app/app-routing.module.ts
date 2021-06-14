import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsHeadlinesComponent } from './components/news-headlines/news-headlines.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'', component: NewsHeadlinesComponent},
  {path:'newsDetails/:sourceName/:authorName', component: NewsDetailsComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
