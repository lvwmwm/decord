// Module ID: 14403
// Function ID: 14404
// Name: CurrencyDigits
// Dependencies: [14381]
// Exports: CurrencyDigits

// Module 14403 (CurrencyDigits)
import _mod14381 from "module_14381" /* 14381 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14381.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
