// Module ID: 16427
// Function ID: 16428
// Dependencies: [16417, 16420]
// Exports: LookupSupportedLocales

// Module 16427
import _mod16417 from "module_16417" /* 16417 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16420 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16417.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
