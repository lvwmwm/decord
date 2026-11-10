// Module ID: 16397
// Function ID: 16398
// Name: CurrencyDigits
// Dependencies: [16375]
// Exports: CurrencyDigits

// Module 16397 (CurrencyDigits)
import ToString from "ToString" /* 16375 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
