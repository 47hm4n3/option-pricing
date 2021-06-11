import { UnderlyingAsset } from "./underlyingAsset";

export class Option extends UnderlyingAsset {

    spot:number;
    strike:number;
    maturity:number;
    interest:number;
    volatility:number;

    constructor(spot:number, strike:number, maturity:number, interest:number, volatility:number) {
        super()
        this.spot = spot;
        this.strike = strike;
        this.maturity = maturity;
        this.interest = interest;
        this.volatility = volatility;
    }


}