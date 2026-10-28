// Module ID: 15508
// Function ID: 15509
// Name: CurrencyDigits
// Dependencies: [15486]
// Exports: CurrencyDigits

// Module 15508 (CurrencyDigits)
import _mod15486 from "module_15486" /* 15486 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15486.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
