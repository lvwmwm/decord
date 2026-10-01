// Module ID: 13946
// Function ID: 13947
// Dependencies: [13936, 13939]
// Exports: LookupSupportedLocales

// Module 13946
import _mod13936 from "module_13936" /* 13936 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13939 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod13936.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
