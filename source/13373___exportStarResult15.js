// Module ID: 13373
// Function ID: 13374
// Name: __exportStarResult15
// Dependencies: [13351]

// Module 13373 (__exportStarResult15)
const require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (require(13351) /* __exportStarResult32 */.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
