import { Component } from '@angular/core';

import { quotes } from '../quotes';

@Component({
  selector: 'quote-list',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  

})
export class quoteComponent {
  
  quotes = quotes;
  today : number = Date.now();


  share() {
    window.alert('The quote has been shared!');
  }
  public initialCount = 0;
  public liked = false;

  likeClick(){
    this.liked=!this.liked;
    this.initialCount+=(this.liked ? 1:-1);
  }
  public initialCounts = 0;
  public disliked =false;

  dislikeClick(){
    this.disliked=!this.disliked;
    this.initialCounts+=(this.disliked ? 1:-1)
  }
  
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/