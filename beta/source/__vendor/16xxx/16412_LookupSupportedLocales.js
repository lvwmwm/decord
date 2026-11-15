// Module ID: 16412
// Function ID: 16413
// Name: LookupSupportedLocales
// Dependencies: [16413, 16424, 16425]
// Exports: match

// Module 16412 (LookupSupportedLocales)
import _mod16424 from "module_16424" /* 16424 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16424.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16425").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
