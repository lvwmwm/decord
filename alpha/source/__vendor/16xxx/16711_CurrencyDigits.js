// Module ID: 16711
// Function ID: 16712
// Name: CurrencyDigits
// Dependencies: [16689]
// Exports: CurrencyDigits

// Module 16711 (CurrencyDigits)
import ToString from "ToString" /* 16689 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
