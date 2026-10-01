// Module ID: 13731
// Function ID: 13732
// Name: LookupMatcher
// Dependencies: [13732, 13735]
// Exports: LookupMatcher

// Module 13731 (LookupMatcher)
import _mod13732 from "module_13732" /* 13732 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13735 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod13732.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
