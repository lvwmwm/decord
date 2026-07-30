// Module ID: 13286
// Function ID: 13287
// Name: __exportStarResult15
// Dependencies: [13264]

// Module 13286 (__exportStarResult15)
const require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (require(13264) /* __exportStarResult32 */.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
