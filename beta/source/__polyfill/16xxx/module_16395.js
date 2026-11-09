// Module ID: 16395
// Function ID: 16396
// Dependencies: [16385, 16388]
// Exports: LookupSupportedLocales

// Module 16395
import _mod16385 from "module_16385" /* 16385 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16388 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16385.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
