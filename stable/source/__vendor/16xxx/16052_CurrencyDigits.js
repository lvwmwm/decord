// Module ID: 16052
// Function ID: 16053
// Name: CurrencyDigits
// Dependencies: [16030]
// Exports: CurrencyDigits

// Module 16052 (CurrencyDigits)
import _mod16030 from "module_16030" /* 16030 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16030.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
