// Module ID: 15661
// Function ID: 15662
// Name: CurrencyDigits
// Dependencies: [15639]
// Exports: CurrencyDigits

// Module 15661 (CurrencyDigits)
import ToString from "ToString" /* 15639 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
