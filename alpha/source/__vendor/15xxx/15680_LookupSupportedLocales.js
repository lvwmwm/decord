// Module ID: 15680
// Function ID: 15681
// Name: LookupSupportedLocales
// Dependencies: [15681, 15692, 15693]
// Exports: match

// Module 15680 (LookupSupportedLocales)
import _mod15692 from "module_15692" /* 15692 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15692.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15693").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
