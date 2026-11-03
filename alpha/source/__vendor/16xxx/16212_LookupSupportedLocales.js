// Module ID: 16212
// Function ID: 16213
// Name: LookupSupportedLocales
// Dependencies: [16213, 16224, 16225]
// Exports: match

// Module 16212 (LookupSupportedLocales)
import _mod16224 from "module_16224" /* 16224 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16224.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16225").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
