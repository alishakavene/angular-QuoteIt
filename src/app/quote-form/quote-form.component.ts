import { Component, OnInit, Output, Input, EventEmitter } from'@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() quoteBinding = new EventEmitter<Object>();

 quote: Object;

 submitQuote (form) { 
   

   alert ('You post has been posted!')

   console.log (form.value)

   this.quote = { 

     name: form.value.author,

    description: form.value.quote,
     
     id: form.value.username
   }   
  console.log (this.quote)

  
   this.quoteBinding.emit(this.quote);
   
   
   }
  
   




  constructor() { }

  ngOnInit() {
  }

}  
