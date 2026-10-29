// Module ID: 15972
// Function ID: 15973
// Name: CurrencyDigits
// Dependencies: [15950]
// Exports: CurrencyDigits

// Module 15972 (CurrencyDigits)
import _mod15950 from "module_15950" /* 15950 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15950.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
