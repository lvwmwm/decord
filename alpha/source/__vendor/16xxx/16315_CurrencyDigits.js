// Module ID: 16315
// Function ID: 16316
// Name: CurrencyDigits
// Dependencies: [16293]
// Exports: CurrencyDigits

// Module 16315 (CurrencyDigits)
import _mod16293 from "module_16293" /* 16293 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16293.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
