// Module ID: 16312
// Function ID: 16313
// Name: CurrencyDigits
// Dependencies: [16290]
// Exports: CurrencyDigits

// Module 16312 (CurrencyDigits)
import ToString from "ToString" /* 16290 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
