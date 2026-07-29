// Module ID: 13316
// Function ID: 13317
// Name: LookupSupportedLocales
// Dependencies: [13306, 13309]

// Module 13316 (LookupSupportedLocales)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let tmp = require;
    let tmp2 = dependencyMap;
    let replaced = str.replace(require(13306) /* isMatched */.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = require(13309) /* BestAvailableLocale */.BestAvailableLocale(arg0, replaced);
    let tmp5 = num;
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
