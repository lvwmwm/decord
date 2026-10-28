// Module ID: 15736
// Function ID: 15737
// Name: CurrencyDigits
// Dependencies: [15714]
// Exports: CurrencyDigits

// Module 15736 (CurrencyDigits)
import _mod15714 from "module_15714" /* 15714 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15714.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
