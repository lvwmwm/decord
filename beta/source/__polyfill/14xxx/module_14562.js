// Module ID: 14562
// Function ID: 14563
// Dependencies: [14552, 14555]
// Exports: LookupSupportedLocales

// Module 14562
import _mod14552 from "module_14552" /* 14552 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14555 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14552.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
