// Module ID: 16578
// Function ID: 16579
// Dependencies: [16568, 16571]
// Exports: LookupSupportedLocales

// Module 16578
import _mod16568 from "module_16568" /* 16568 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16571 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16568.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
