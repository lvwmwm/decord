// Module ID: 16553
// Function ID: 16554
// Name: CurrencyDigits
// Dependencies: [16531]
// Exports: CurrencyDigits

// Module 16553 (CurrencyDigits)
import ToString from "ToString" /* 16531 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
