import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote';
import { from } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Always live life','McDonald ','Jean',new Date(2019,6,16)),
    new Quote(2,'Always live life','McDonald','John',new Date(2019,2,9)),
    new Quote(3,'Happy Coding','Mercy','Nzau',new Date(2020,4,3))
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.name = "";
    // quote.author = "";
    // quote.submittor = "";
    quote.Date = new Date(quote.Date);
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm ('Are you sure you want to delete this quote by ${this.quotes[index].author}?' )


      if (toDelete){
        this.quotes.splice(index,1)
      }
      
    }
  }

  
  constructor() { }

  ngOnInit() {
  }

}
