// Module ID: 16413
// Function ID: 16414
// Name: LookupMatcher
// Dependencies: [16414, 16417]
// Exports: LookupMatcher

// Module 16413 (LookupMatcher)
import _mod16414 from "module_16414" /* 16414 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16417 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16414.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
