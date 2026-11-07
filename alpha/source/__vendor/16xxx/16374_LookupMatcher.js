// Module ID: 16374
// Function ID: 16375
// Name: LookupMatcher
// Dependencies: [16375, 16378]
// Exports: LookupMatcher

// Module 16374 (LookupMatcher)
import _mod16375 from "module_16375" /* 16375 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16378 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16375.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
