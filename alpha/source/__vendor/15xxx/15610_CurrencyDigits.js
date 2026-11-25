// Module ID: 15610
// Function ID: 15611
// Name: CurrencyDigits
// Dependencies: [15588]
// Exports: CurrencyDigits

// Module 15610 (CurrencyDigits)
import ToString from "ToString" /* 15588 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
