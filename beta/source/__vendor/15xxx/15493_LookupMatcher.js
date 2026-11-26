// Module ID: 15493
// Function ID: 15494
// Name: LookupMatcher
// Dependencies: [15494, 15497]
// Exports: LookupMatcher

// Module 15493 (LookupMatcher)
import _mod15494 from "module_15494" /* 15494 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15497 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15494.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
