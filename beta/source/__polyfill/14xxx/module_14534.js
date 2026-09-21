// Module ID: 14534
// Function ID: 14535
// Dependencies: [14524, 14527]
// Exports: LookupSupportedLocales

// Module 14534
import _mod14524 from "module_14524" /* 14524 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14527 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14524.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
