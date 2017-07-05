import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Use TypeScript not Javascript!';
  public results: Array<string> = new Array<string>();

  ngOnInit(): void {
    var result: string;
   
    for (let num = 10; num < 101; num++) {
  
      result = '';
      // see if number is divisible by 4 nd 6
      var div_4 = (num % 4 == 0);
      var div_6 = (num % 6 == 0);

      // set result to  Dr.
      if (div_4)
        result = 'Dr. ';

      // set result to Who or Dr Who
      if (div_6)
        result += 'Who';

      // otherwise, it was not evenly divisible and  display the number only
      if (result.length == 0)
        result = num.toString();

      this.results.push(result);
    }
  }
}
