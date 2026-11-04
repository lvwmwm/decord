// Module ID: 16302
// Function ID: 16303
// Name: CurrencyDigits
// Dependencies: [16280]
// Exports: CurrencyDigits

// Module 16302 (CurrencyDigits)
import _mod16280 from "module_16280" /* 16280 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16280.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
