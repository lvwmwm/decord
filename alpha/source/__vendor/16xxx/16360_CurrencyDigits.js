// Module ID: 16360
// Function ID: 16361
// Name: CurrencyDigits
// Dependencies: [16338]
// Exports: CurrencyDigits

// Module 16360 (CurrencyDigits)
import ToString from "ToString" /* 16338 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
