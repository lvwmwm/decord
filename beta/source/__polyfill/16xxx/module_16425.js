// Module ID: 16425
// Function ID: 16426
// Dependencies: [16415, 16418]
// Exports: LookupSupportedLocales

// Module 16425
import _mod16415 from "module_16415" /* 16415 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16418 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16415.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
