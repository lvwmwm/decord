// Module ID: 15419
// Function ID: 15420
// Dependencies: [15409, 15412]
// Exports: LookupSupportedLocales

// Module 15419
import _mod15409 from "module_15409" /* 15409 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15412 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15409.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
