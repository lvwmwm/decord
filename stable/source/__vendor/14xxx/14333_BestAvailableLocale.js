// Module ID: 14333
// Function ID: 14334
// Name: BestAvailableLocale
// Dependencies: []
// Exports: BestAvailableLocale

// Module 14333 (BestAvailableLocale)

export const BestAvailableLocale = function BestAvailableLocale(arr, arg1) {
  let substr = arg1;
  while (arr.indexOf(substr) <= -1) {
    let lastIndexOfResult = substr.lastIndexOf("-");
    if (~lastIndexOfResult) {
      let tmp2 = lastIndexOfResult >= 2 && "-" === substr[lastIndexOfResult - 2];
      let diff = lastIndexOfResult;
      if (tmp2) {
        diff = lastIndexOfResult - 2;
      }
      substr = substr.slice(0, diff);
      continue;
    }
  }
  return substr;
};
