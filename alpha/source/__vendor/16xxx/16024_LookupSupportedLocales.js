// Module ID: 16024
// Function ID: 16025
// Name: LookupSupportedLocales
// Dependencies: [16025, 16036, 16037]
// Exports: match

// Module 16024 (LookupSupportedLocales)
import _mod16036 from "module_16036" /* 16036 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16036.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16037").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
