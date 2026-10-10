// Module ID: 14482
// Function ID: 14483
// Dependencies: [14472, 14475]
// Exports: LookupSupportedLocales

// Module 14482
import _mod14472 from "module_14472" /* 14472 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14475 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14472.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
