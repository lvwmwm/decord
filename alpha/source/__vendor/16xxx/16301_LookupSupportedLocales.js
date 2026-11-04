// Module ID: 16301
// Function ID: 16302
// Name: LookupSupportedLocales
// Dependencies: [16302, 16313, 16314]
// Exports: match

// Module 16301 (LookupSupportedLocales)
import _mod16313 from "module_16313" /* 16313 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16313.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16314").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
