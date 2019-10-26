import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSince'
})
export class DateSincePipe implements PipeTransform {

  transform(value: any): number {
   let today:Date = new Date();
   let timelessToday:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
   var dateDifference = Math.abs(timelessToday - value);
   const dailySeconds = 86400;
   var dateDifferenceSecs = dateDifference*0.001;
   var dayCounter = dateDifferenceSecs/dailySeconds;

   return dayCounter;
    
  }

}
