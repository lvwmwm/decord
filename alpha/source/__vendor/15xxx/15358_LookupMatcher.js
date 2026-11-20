// Module ID: 15358
// Function ID: 15359
// Name: LookupMatcher
// Dependencies: [15359, 15362]
// Exports: LookupMatcher

// Module 15358 (LookupMatcher)
import _mod15359 from "module_15359" /* 15359 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15362 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15359.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
