// Module ID: 15184
// Function ID: 15185
// Name: LookupMatcher
// Dependencies: [15185, 15188]
// Exports: LookupMatcher

// Module 15184 (LookupMatcher)
import _mod15185 from "module_15185" /* 15185 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15188 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15185.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
