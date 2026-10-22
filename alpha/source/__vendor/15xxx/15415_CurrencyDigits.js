// Module ID: 15415
// Function ID: 15416
// Name: CurrencyDigits
// Dependencies: [15393]
// Exports: CurrencyDigits

// Module 15415 (CurrencyDigits)
import _mod15393 from "module_15393" /* 15393 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15393.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
