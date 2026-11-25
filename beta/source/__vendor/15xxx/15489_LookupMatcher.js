// Module ID: 15489
// Function ID: 15490
// Name: LookupMatcher
// Dependencies: [15490, 15493]
// Exports: LookupMatcher

// Module 15489 (LookupMatcher)
import _mod15490 from "module_15490" /* 15490 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15493 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15490.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
