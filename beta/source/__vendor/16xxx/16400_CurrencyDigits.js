// Module ID: 16400
// Function ID: 16401
// Name: CurrencyDigits
// Dependencies: [16378]
// Exports: CurrencyDigits

// Module 16400 (CurrencyDigits)
import ToString from "ToString" /* 16378 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
