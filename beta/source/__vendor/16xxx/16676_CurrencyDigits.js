// Module ID: 16676
// Function ID: 16677
// Name: CurrencyDigits
// Dependencies: [16654]
// Exports: CurrencyDigits

// Module 16676 (CurrencyDigits)
import ToString from "ToString" /* 16654 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
