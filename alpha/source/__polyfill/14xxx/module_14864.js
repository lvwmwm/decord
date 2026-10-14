// Module ID: 14864
// Function ID: 14865
// Dependencies: [14854, 14857]
// Exports: LookupSupportedLocales

// Module 14864
import _mod14854 from "module_14854" /* 14854 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14857 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14854.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
