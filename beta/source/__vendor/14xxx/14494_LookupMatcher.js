// Module ID: 14494
// Function ID: 14495
// Name: LookupMatcher
// Dependencies: [14495, 14498]
// Exports: LookupMatcher

// Module 14494 (LookupMatcher)
import _mod14495 from "module_14495" /* 14495 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14498 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14495.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
