// Module ID: 13268
// Function ID: 102100
// Name: __exportStarResult15
// Dependencies: [13246]

// Module 13268 (__exportStarResult15)
const require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (require(13246) /* __exportStarResult32 */.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
