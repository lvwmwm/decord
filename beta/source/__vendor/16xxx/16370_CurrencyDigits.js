// Module ID: 16370
// Function ID: 16371
// Name: CurrencyDigits
// Dependencies: [16348]
// Exports: CurrencyDigits

// Module 16370 (CurrencyDigits)
import ToString from "ToString" /* 16348 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
