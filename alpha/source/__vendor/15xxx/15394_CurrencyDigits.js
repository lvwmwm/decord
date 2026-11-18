// Module ID: 15394
// Function ID: 15395
// Name: CurrencyDigits
// Dependencies: [15372]
// Exports: CurrencyDigits

// Module 15394 (CurrencyDigits)
import ToString from "ToString" /* 15372 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
