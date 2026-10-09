// Module ID: 14417
// Function ID: 14418
// Name: LookupMatcher
// Dependencies: [14418, 14421]
// Exports: LookupMatcher

// Module 14417 (LookupMatcher)
import _mod14418 from "module_14418" /* 14418 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14421 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14418.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
