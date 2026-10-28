// Module ID: 15533
// Function ID: 15534
// Dependencies: [15523, 15526]
// Exports: LookupSupportedLocales

// Module 15533
import _mod15523 from "module_15523" /* 15523 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15526 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15523.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
