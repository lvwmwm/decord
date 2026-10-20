// Module ID: 15295
// Function ID: 15296
// Name: LookupMatcher
// Dependencies: [15296, 15299]
// Exports: LookupMatcher

// Module 15295 (LookupMatcher)
import _mod15296 from "module_15296" /* 15296 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15299 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15296.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
};
