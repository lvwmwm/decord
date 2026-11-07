// Module ID: 16372
// Function ID: 16373
// Name: LookupSupportedLocales
// Dependencies: [16373, 16384, 16385]
// Exports: match

// Module 16372 (LookupSupportedLocales)
import _mod16384 from "module_16384" /* 16384 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16384.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16385").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
