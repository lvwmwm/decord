// Module ID: 14815
// Function ID: 14816
// Name: LookupMatcher
// Dependencies: [14816, 14819]
// Exports: LookupMatcher

// Module 14815 (LookupMatcher)
import _mod14816 from "module_14816" /* 14816 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14819 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14816.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
