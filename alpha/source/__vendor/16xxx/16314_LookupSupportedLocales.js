// Module ID: 16314
// Function ID: 16315
// Name: LookupSupportedLocales
// Dependencies: [16315, 16326, 16327]
// Exports: match

// Module 16314 (LookupSupportedLocales)
import _mod16326 from "module_16326" /* 16326 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16326.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16327").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
