// Module ID: 13407
// Function ID: 13408
// Name: __exportStarResult15
// Dependencies: [13385]

// Module 13407 (__exportStarResult15)
const require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (require(13385) /* __exportStarResult32 */.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
