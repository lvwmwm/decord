// Module ID: 15440
// Function ID: 15441
// Name: LookupSupportedLocales
// Dependencies: [15441, 15452, 15453]
// Exports: match

// Module 15440 (LookupSupportedLocales)
import _mod15452 from "module_15452" /* 15452 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15452.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15453").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
