// Module ID: 16324
// Function ID: 16325
// Name: LookupSupportedLocales
// Dependencies: [16325, 16336, 16337]
// Exports: match

// Module 16324 (LookupSupportedLocales)
import _mod16336 from "module_16336" /* 16336 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16336.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16337").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
