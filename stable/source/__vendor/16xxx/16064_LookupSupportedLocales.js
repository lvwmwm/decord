// Module ID: 16064
// Function ID: 16065
// Name: LookupSupportedLocales
// Dependencies: [16065, 16076, 16077]
// Exports: match

// Module 16064 (LookupSupportedLocales)
import _mod16076 from "module_16076" /* 16076 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16076.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16077").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
