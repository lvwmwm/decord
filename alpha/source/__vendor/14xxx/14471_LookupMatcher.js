// Module ID: 14471
// Function ID: 14472
// Name: LookupMatcher
// Dependencies: [14472, 14475]
// Exports: LookupMatcher

// Module 14471 (LookupMatcher)
import _mod14472 from "module_14472" /* 14472 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14475 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14472.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
