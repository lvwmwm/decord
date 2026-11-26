// Module ID: 16678
// Function ID: 16679
// Name: CurrencyDigits
// Dependencies: [16656]
// Exports: CurrencyDigits

// Module 16678 (CurrencyDigits)
import ToString from "ToString" /* 16656 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
