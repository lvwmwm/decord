// Module ID: 15324
// Function ID: 15325
// Dependencies: [15314, 15317]
// Exports: LookupSupportedLocales

// Module 15324
import _mod15314 from "module_15314" /* 15314 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15317 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15314.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
