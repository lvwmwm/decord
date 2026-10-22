// Module ID: 15442
// Function ID: 15443
// Name: LookupMatcher
// Dependencies: [15443, 15446]
// Exports: LookupMatcher

// Module 15442 (LookupMatcher)
import _mod15443 from "module_15443" /* 15443 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15446 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15443.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
