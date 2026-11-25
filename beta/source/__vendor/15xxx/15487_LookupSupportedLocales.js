// Module ID: 15487
// Function ID: 15488
// Name: LookupSupportedLocales
// Dependencies: [15488, 15499, 15500]
// Exports: match

// Module 15487 (LookupSupportedLocales)
import _mod15499 from "module_15499" /* 15499 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15499.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15500").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
