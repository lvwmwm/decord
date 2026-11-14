// Module ID: 16701
// Function ID: 16702
// Dependencies: [16691, 16694]
// Exports: LookupSupportedLocales

// Module 16701
import _mod16691 from "module_16691" /* 16691 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16694 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16691.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
