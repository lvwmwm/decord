// Module ID: 14497
// Function ID: 14498
// Name: LookupSupportedLocales
// Dependencies: [14498, 14509, 14510]
// Exports: match

// Module 14497 (LookupSupportedLocales)
import _mod14509 from "module_14509" /* 14509 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14509.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14510").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
