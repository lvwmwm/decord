// Module ID: 14002
// Function ID: 14003
// Name: LookupMatcher
// Dependencies: [14003, 14006]
// Exports: LookupMatcher

// Module 14002 (LookupMatcher)
import _mod14003 from "module_14003" /* 14003 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14006 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14003.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
