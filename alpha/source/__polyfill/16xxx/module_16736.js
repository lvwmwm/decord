// Module ID: 16736
// Function ID: 16737
// Dependencies: [16726, 16729]
// Exports: LookupSupportedLocales

// Module 16736
import _mod16726 from "module_16726" /* 16726 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16729 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16726.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
