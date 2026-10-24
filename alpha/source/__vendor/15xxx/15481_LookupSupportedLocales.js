// Module ID: 15481
// Function ID: 15482
// Name: LookupSupportedLocales
// Dependencies: [15482, 15493, 15494]
// Exports: match

// Module 15481 (LookupSupportedLocales)
import _mod15493 from "module_15493" /* 15493 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15493.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_15494").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
