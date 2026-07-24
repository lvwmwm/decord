// Module ID: 13237
// Function ID: 101871
// Name: LookupSupportedLocales
// Dependencies: [13227, 13230]

// Module 13237 (LookupSupportedLocales)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let tmp = require;
    let tmp2 = dependencyMap;
    let replaced = str.replace(require(13227) /* isMatched */.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = require(13230) /* BestAvailableLocale */.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
