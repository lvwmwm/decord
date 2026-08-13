// Module ID: 13583
// Function ID: 13584
// Name: LookupSupportedLocales
// Dependencies: [13573, 13576]

// Module 13583 (LookupSupportedLocales)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let tmp = require;
    let tmp2 = dependencyMap;
    let replaced = str.replace(require(13573) /* isMatched */.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = require(13576) /* BestAvailableLocale */.BestAvailableLocale(arg0, replaced);
    let tmp5 = num;
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
