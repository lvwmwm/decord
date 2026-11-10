// Module ID: 16422
// Function ID: 16423
// Dependencies: [16412, 16415]
// Exports: LookupSupportedLocales

// Module 16422
import _mod16412 from "module_16412" /* 16412 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16415 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16412.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
