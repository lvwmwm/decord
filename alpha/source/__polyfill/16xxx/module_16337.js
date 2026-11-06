// Module ID: 16337
// Function ID: 16338
// Dependencies: [16327, 16330]
// Exports: LookupSupportedLocales

// Module 16337
import _mod16327 from "module_16327" /* 16327 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16330 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16327.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
