// Module ID: 15449
// Function ID: 15450
// Name: CurrencyDigits
// Dependencies: [15427]
// Exports: CurrencyDigits

// Module 15449 (CurrencyDigits)
import _mod15427 from "module_15427" /* 15427 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15427.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
