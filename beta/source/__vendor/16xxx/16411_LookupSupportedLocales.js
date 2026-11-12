// Module ID: 16411
// Function ID: 16412
// Name: LookupSupportedLocales
// Dependencies: [16412, 16423, 16424]
// Exports: match

// Module 16411 (LookupSupportedLocales)
import _mod16423 from "module_16423" /* 16423 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16423.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16424").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
