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
    new Quote(1,'life','Always live life','McDonald ','Jean',new Date(2019,6,16),0,0),
    new Quote(2,'love','If you love something ,let it free.','Alex','John',new Date(2019,2,9),0,0),
    new Quote(3,'tech','Happy Coding','Mercy','Nzau',new Date(2020,4,3),0,0)
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

  highlightedQuote(){
    let upArray:number[] = [];
    for(let i of this.quotes){
      upArray.push(i.up);
    }
    let mostVoted = Math.max(...upArray);
    let mostVotedQuote = this.quotes.find(quotes => quotes.up === mostVoted);
    return mostVotedQuote;
  }
  
  toggleDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this quote by  ${this.quotes[index].author}?`)


      if (toDelete){
        this.quotes.splice(index,1)
      }
      
    }
  }

  
  constructor() { }

  ngOnInit() {
  }

}
