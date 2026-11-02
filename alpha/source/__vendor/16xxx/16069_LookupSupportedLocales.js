// Module ID: 16069
// Function ID: 16070
// Name: LookupSupportedLocales
// Dependencies: [16070, 16081, 16082]
// Exports: match

// Module 16069 (LookupSupportedLocales)
import _mod16081 from "module_16081" /* 16081 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16081.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16082").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
