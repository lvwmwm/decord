// Module ID: 14321
// Function ID: 14322
// Name: LookupMatcher
// Dependencies: [14322, 14325]
// Exports: LookupMatcher

// Module 14321 (LookupMatcher)
import _mod14322 from "module_14322" /* 14322 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14325 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14322.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
