// Module ID: 15369
// Function ID: 15370
// Dependencies: [15359, 15362]
// Exports: LookupSupportedLocales

// Module 15369
import _mod15359 from "module_15359" /* 15359 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15362 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15359.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
