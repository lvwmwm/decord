// Module ID: 15510
// Function ID: 15511
// Name: CurrencyDigits
// Dependencies: [15488]
// Exports: CurrencyDigits

// Module 15510 (CurrencyDigits)
import _mod15488 from "module_15488" /* 15488 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15488.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
