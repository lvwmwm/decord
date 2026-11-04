// Module ID: 16289
// Function ID: 16290
// Name: CurrencyDigits
// Dependencies: [16267]
// Exports: CurrencyDigits

// Module 16289 (CurrencyDigits)
import _mod16267 from "module_16267" /* 16267 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16267.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
