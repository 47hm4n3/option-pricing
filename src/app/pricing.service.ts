import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Option } from './model/option';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private http: HttpClient) { }

public blackSholes(option:Option, putCall:boolean) :number {
  // contact java projetc by a post request
  return 0;
}


}
