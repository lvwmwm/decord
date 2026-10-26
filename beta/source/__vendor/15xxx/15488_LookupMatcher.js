// Module ID: 15488
// Function ID: 15489
// Name: LookupMatcher
// Dependencies: [15489, 15492]
// Exports: LookupMatcher

// Module 15488 (LookupMatcher)
import _mod15489 from "module_15489" /* 15489 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15492 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15489.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
