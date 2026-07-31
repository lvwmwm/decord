// Module ID: 13328
// Function ID: 13329
// Name: BestAvailableLocale
// Dependencies: []

// Module 13328 (BestAvailableLocale)
arg5.BestAvailableLocale = function BestAvailableLocale(arr) {
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
