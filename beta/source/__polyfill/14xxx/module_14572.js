// Module ID: 14572
// Function ID: 14573
// Dependencies: [14562, 14565]
// Exports: LookupSupportedLocales

// Module 14572
import _mod14562 from "module_14562" /* 14562 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14565 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14562.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
