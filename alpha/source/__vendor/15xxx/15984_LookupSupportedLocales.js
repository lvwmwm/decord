// Module ID: 15984
// Function ID: 15985
// Name: LookupSupportedLocales
// Dependencies: [15985, 15996, 15997]
// Exports: match

// Module 15984 (LookupSupportedLocales)
import _mod15996 from "module_15996" /* 15996 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15996.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15997").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
