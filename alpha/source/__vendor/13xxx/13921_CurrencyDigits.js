// Module ID: 13921
// Function ID: 13922
// Name: CurrencyDigits
// Dependencies: [13899]
// Exports: CurrencyDigits

// Module 13921 (CurrencyDigits)
import _mod13899 from "module_13899" /* 13899 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13899.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
