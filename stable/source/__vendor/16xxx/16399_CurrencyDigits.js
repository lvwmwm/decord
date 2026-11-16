// Module ID: 16399
// Function ID: 16400
// Name: CurrencyDigits
// Dependencies: [16377]
// Exports: CurrencyDigits

// Module 16399 (CurrencyDigits)
import ToString from "ToString" /* 16377 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
