// Module ID: 16385
// Function ID: 16386
// Dependencies: [16375, 16378]
// Exports: LookupSupportedLocales

// Module 16385
import _mod16375 from "module_16375" /* 16375 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16378 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16375.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
