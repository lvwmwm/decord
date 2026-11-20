// Module ID: 16692
// Function ID: 16693
// Name: LookupMatcher
// Dependencies: [16693, 16696]
// Exports: LookupMatcher

// Module 16692 (LookupMatcher)
import _mod16693 from "module_16693" /* 16693 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16696 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16693.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
}
