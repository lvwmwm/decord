// Module ID: 13293
// Function ID: 102176
// Name: LookupSupportedLocales
// Dependencies: [13283, 13286]

// Module 13293 (LookupSupportedLocales)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let tmp = require;
    let tmp2 = dependencyMap;
    let replaced = str.replace(require(13283) /* isMatched */.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = require(13286) /* BestAvailableLocale */.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
