// Module ID: 13733
// Function ID: 13734
// Name: LookupMatcher
// Dependencies: [13734, 13737]
// Exports: LookupMatcher

// Module 13733 (LookupMatcher)
import _mod13734 from "module_13734" /* 13734 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13737 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod13734.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
