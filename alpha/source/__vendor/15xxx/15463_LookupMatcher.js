// Module ID: 15463
// Function ID: 15464
// Name: LookupMatcher
// Dependencies: [15464, 15467]
// Exports: LookupMatcher

// Module 15463 (LookupMatcher)
import _mod15464 from "module_15464" /* 15464 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15467 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15464.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
