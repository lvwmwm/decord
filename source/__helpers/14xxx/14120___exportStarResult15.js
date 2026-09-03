// Module ID: 14120
// Function ID: 14121
// Name: __exportStarResult15
// Dependencies: [14098]

// Module 14120 (__exportStarResult15)
import __exportStarResult32 from "__exportStarResult32" /* 14098 */;

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
