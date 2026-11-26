// Module ID: 16690
// Function ID: 16691
// Name: LookupSupportedLocales
// Dependencies: [16691, 16702, 16703]
// Exports: match

// Module 16690 (LookupSupportedLocales)
import _mod16702 from "module_16702" /* 16702 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16702.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_16703").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
