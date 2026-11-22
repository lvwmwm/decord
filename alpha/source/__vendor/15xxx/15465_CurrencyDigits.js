// Module ID: 15465
// Function ID: 15466
// Name: CurrencyDigits
// Dependencies: [15443]
// Exports: CurrencyDigits

// Module 15465 (CurrencyDigits)
import ToString from "ToString" /* 15443 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
