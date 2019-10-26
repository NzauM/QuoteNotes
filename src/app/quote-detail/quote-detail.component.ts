import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import{ Quote  } from '../quote';
import { from } from 'rxjs';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  up: number = 0;
  down: number = 0;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote(){
    this.up +=1;
  }

  downVote(){
    this.down +=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
