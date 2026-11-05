// Module ID: 16340
// Function ID: 16341
// Dependencies: [16330, 16333]
// Exports: LookupSupportedLocales

// Module 16340
import _mod16330 from "module_16330" /* 16330 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16333 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16330.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
