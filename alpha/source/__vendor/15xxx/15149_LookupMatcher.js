// Module ID: 15149
// Function ID: 15150
// Name: LookupMatcher
// Dependencies: [15150, 15153]
// Exports: LookupMatcher

// Module 15149 (LookupMatcher)
import _mod15150 from "module_15150" /* 15150 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15153 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15150.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
