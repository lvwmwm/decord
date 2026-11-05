// Module ID: 16327
// Function ID: 16328
// Name: LookupSupportedLocales
// Dependencies: [16328, 16339, 16340]
// Exports: match

// Module 16327 (LookupSupportedLocales)
import _mod16339 from "module_16339" /* 16339 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16339.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16340").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
