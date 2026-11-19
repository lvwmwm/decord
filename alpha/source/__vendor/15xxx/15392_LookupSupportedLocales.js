// Module ID: 15392
// Function ID: 15393
// Name: LookupSupportedLocales
// Dependencies: [15393, 15404, 15405]
// Exports: match

// Module 15392 (LookupSupportedLocales)
import _mod15404 from "module_15404" /* 15404 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15404.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15405").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
