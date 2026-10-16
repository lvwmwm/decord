// Module ID: 14485
// Function ID: 14486
// Name: CurrencyDigits
// Dependencies: [14463]
// Exports: CurrencyDigits

// Module 14485 (CurrencyDigits)
import _mod14463 from "module_14463" /* 14463 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14463.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
