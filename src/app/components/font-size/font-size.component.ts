import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { FontSizeState } from 'src/app/action/fontSizeState.action';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})

export class FontSizeComponent {
  font_size = '14'
  @Output() event = new EventEmitter<string>()

  constructor(private store: Store<FontSizeState>, private cookieService: CookieService) {

    this.store.select('fontSize').subscribe(font => {
      let cookieValue = this.cookieService.get('font');
    
      if(!cookieValue)
        this.cookieService.set('font', font);
      
      else if(cookieValue && font != '14')
        this.cookieService.set('font', font);

      this.font_size = font;
    });
  }

  fontSizeSlider(event:any){
    this.store.dispatch({ type: event.target.value})
    this.store.select('fontSize').subscribe(font => {
      this.event.emit(font)
    });
  }

}
