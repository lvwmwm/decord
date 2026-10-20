// Module ID: 14510
// Function ID: 14511
// Dependencies: [14500, 14503]
// Exports: LookupSupportedLocales

// Module 14510
import _mod14500 from "module_14500" /* 14500 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14503 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14500.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
