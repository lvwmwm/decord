// Module ID: 14469
// Function ID: 14470
// Name: LookupSupportedLocales
// Dependencies: [14470, 14481, 14482]
// Exports: match

// Module 14469 (LookupSupportedLocales)
import _mod14481 from "module_14481" /* 14481 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14481.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14482").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
