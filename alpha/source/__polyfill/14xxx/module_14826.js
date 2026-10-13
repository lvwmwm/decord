// Module ID: 14826
// Function ID: 14827
// Dependencies: [14816, 14819]
// Exports: LookupSupportedLocales

// Module 14826
import _mod14816 from "module_14816" /* 14816 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14819 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14816.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
