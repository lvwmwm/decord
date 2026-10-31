// Module ID: 16065
// Function ID: 16066
// Name: LookupSupportedLocales
// Dependencies: [16066, 16077, 16078]
// Exports: match

// Module 16065 (LookupSupportedLocales)
import _mod16077 from "module_16077" /* 16077 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16077.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16078").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
