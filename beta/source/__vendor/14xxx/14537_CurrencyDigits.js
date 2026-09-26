// Module ID: 14537
// Function ID: 14538
// Name: CurrencyDigits
// Dependencies: [14515]
// Exports: CurrencyDigits

// Module 14537 (CurrencyDigits)
import _mod14515 from "module_14515" /* 14515 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14515.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
