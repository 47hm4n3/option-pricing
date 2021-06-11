import { Component, OnInit } from '@angular/core';
import { Option } from '../model/option';
import { PricingService } from '../pricing.service';

@Component({
  selector: 'app-black-scholes',
  templateUrl: './black-scholes.component.html',
  styleUrls: ['./black-scholes.component.css']
})
export class BlackScholesComponent implements OnInit {

  option:Option = new Option(1,0,1,0,1);

  constructor(private price:PricingService) { }

  ngOnInit(): void {
  }

  public blackScholes() : number {
    return this.price.blackSholes(this.option, false);
  }

}
