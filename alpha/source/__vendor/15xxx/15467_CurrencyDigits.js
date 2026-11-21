// Module ID: 15467
// Function ID: 15468
// Name: CurrencyDigits
// Dependencies: [15445]
// Exports: CurrencyDigits

// Module 15467 (CurrencyDigits)
import ToString from "ToString" /* 15445 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
