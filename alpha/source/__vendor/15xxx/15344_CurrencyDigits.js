// Module ID: 15344
// Function ID: 15345
// Name: CurrencyDigits
// Dependencies: [15322]
// Exports: CurrencyDigits

// Module 15344 (CurrencyDigits)
import ToString from "ToString" /* 15322 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
