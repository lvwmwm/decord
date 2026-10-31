// Module ID: 16053
// Function ID: 16054
// Name: CurrencyDigits
// Dependencies: [16031]
// Exports: CurrencyDigits

// Module 16053 (CurrencyDigits)
import _mod16031 from "module_16031" /* 16031 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16031.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
