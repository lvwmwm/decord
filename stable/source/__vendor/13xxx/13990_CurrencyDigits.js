// Module ID: 13990
// Function ID: 13991
// Name: CurrencyDigits
// Dependencies: [13968]
// Exports: CurrencyDigits

// Module 13990 (CurrencyDigits)
import _mod13968 from "module_13968" /* 13968 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13968.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
