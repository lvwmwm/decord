// Module ID: 14512
// Function ID: 14513
// Name: CurrencyDigits
// Dependencies: [14490]
// Exports: CurrencyDigits

// Module 14512 (CurrencyDigits)
import _mod14490 from "module_14490" /* 14490 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14490.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
