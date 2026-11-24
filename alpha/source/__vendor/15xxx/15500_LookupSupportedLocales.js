// Module ID: 15500
// Function ID: 15501
// Name: LookupSupportedLocales
// Dependencies: [15501, 15512, 15513]
// Exports: match

// Module 15500 (LookupSupportedLocales)
import _mod15512 from "module_15512" /* 15512 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15512.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15513").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
