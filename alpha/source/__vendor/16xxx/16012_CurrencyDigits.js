// Module ID: 16012
// Function ID: 16013
// Name: CurrencyDigits
// Dependencies: [15990]
// Exports: CurrencyDigits

// Module 16012 (CurrencyDigits)
import _mod15990 from "module_15990" /* 15990 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15990.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
