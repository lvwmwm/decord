// Module ID: 16078
// Function ID: 16079
// Dependencies: [16068, 16071]
// Exports: LookupSupportedLocales

// Module 16078
import _mod16068 from "module_16068" /* 16068 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16071 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16068.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
