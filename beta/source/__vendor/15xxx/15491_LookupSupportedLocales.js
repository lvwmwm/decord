// Module ID: 15491
// Function ID: 15492
// Name: LookupSupportedLocales
// Dependencies: [15492, 15503, 15504]
// Exports: match

// Module 15491 (LookupSupportedLocales)
import _mod15503 from "module_15503" /* 15503 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15503.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15504").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
