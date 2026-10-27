// Module ID: 15522
// Function ID: 15523
// Name: LookupSupportedLocales
// Dependencies: [15523, 15534, 15535]
// Exports: match

// Module 15522 (LookupSupportedLocales)
import _mod15534 from "module_15534" /* 15534 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15534.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15535").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
