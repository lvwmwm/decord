// Module ID: 14492
// Function ID: 14493
// Name: LookupSupportedLocales
// Dependencies: [14493, 14504, 14505]
// Exports: match

// Module 14492 (LookupSupportedLocales)
import _mod14504 from "module_14504" /* 14504 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14504.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14505").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
