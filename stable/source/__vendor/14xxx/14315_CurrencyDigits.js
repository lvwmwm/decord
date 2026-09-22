// Module ID: 14315
// Function ID: 14316
// Name: CurrencyDigits
// Dependencies: [14293]
// Exports: CurrencyDigits

// Module 14315 (CurrencyDigits)
import _mod14293 from "module_14293" /* 14293 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14293.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
