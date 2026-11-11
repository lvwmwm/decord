// Module ID: 16572
// Function ID: 16573
// Name: LookupMatcher
// Dependencies: [16573, 16576]
// Exports: LookupMatcher

// Module 16572 (LookupMatcher)
import _mod16573 from "module_16573" /* 16573 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16576 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16573.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    while (!BestAvailableLocaleResult) {
      num = num + 1;
    }
    obj.locale = BestAvailableLocaleResult;
    if (arg1[num] !== replaced) {
      obj.extension = arg1[num].slice(replaced.length, arg1[num].length);
    }
    return obj;
  }
  return obj;
}
