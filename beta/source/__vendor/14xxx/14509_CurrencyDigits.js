// Module ID: 14509
// Function ID: 14510
// Name: CurrencyDigits
// Dependencies: [14487]
// Exports: CurrencyDigits

// Module 14509 (CurrencyDigits)
import _mod14487 from "module_14487" /* 14487 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14487.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
