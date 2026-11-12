// Module ID: 16567
// Function ID: 16568
// Name: LookupMatcher
// Dependencies: [16568, 16571]
// Exports: LookupMatcher

// Module 16567 (LookupMatcher)
import _mod16568 from "module_16568" /* 16568 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16571 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16568.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
