// Module ID: 14428
// Function ID: 14429
// Dependencies: [14418, 14421]
// Exports: LookupSupportedLocales

// Module 14428
import _mod14418 from "module_14418" /* 14418 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14421 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14418.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
