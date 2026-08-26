// Module ID: 13768
// Function ID: 13769
// Name: __exportStarResult15
// Dependencies: [13746]

// Module 13768 (__exportStarResult15)
import __exportStarResult32 from "__exportStarResult32" /* 13746 */;

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
