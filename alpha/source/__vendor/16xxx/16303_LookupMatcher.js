// Module ID: 16303
// Function ID: 16304
// Name: LookupMatcher
// Dependencies: [16304, 16307]
// Exports: LookupMatcher

// Module 16303 (LookupMatcher)
import _mod16304 from "module_16304" /* 16304 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16307 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16304.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
