// Module ID: 16200
// Function ID: 16201
// Name: CurrencyDigits
// Dependencies: [16178]
// Exports: CurrencyDigits

// Module 16200 (CurrencyDigits)
import _mod16178 from "module_16178" /* 16178 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16178.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
