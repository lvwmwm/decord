// Module ID: 16409
// Function ID: 16410
// Name: LookupSupportedLocales
// Dependencies: [16410, 16421, 16422]
// Exports: match

// Module 16409 (LookupSupportedLocales)
import _mod16421 from "module_16421" /* 16421 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16421.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16422").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
