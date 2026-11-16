// Module ID: 16424
// Function ID: 16425
// Dependencies: [16414, 16417]
// Exports: LookupSupportedLocales

// Module 16424
import _mod16414 from "module_16414" /* 16414 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16417 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16414.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
