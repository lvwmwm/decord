// Module ID: 14853
// Function ID: 14854
// Name: LookupMatcher
// Dependencies: [14854, 14857]
// Exports: LookupMatcher

// Module 14853 (LookupMatcher)
import _mod14854 from "module_14854" /* 14854 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14857 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14854.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
