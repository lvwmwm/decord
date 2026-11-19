// Module ID: 15380
// Function ID: 15381
// Name: CurrencyDigits
// Dependencies: [15358]
// Exports: CurrencyDigits

// Module 15380 (CurrencyDigits)
import ToString from "ToString" /* 15358 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
