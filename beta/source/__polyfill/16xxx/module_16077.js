// Module ID: 16077
// Function ID: 16078
// Dependencies: [16067, 16070]
// Exports: LookupSupportedLocales

// Module 16077
import _mod16067 from "module_16067" /* 16067 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16070 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16067.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
