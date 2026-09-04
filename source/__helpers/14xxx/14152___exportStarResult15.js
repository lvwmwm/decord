// Module ID: 14152
// Function ID: 14153
// Name: __exportStarResult15
// Dependencies: [14130]

// Module 14152 (__exportStarResult15)
import __exportStarResult32 from "__exportStarResult32" /* 14130 */;

require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (__exportStarResult32.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
