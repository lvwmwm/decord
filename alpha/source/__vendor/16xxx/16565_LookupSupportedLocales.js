// Module ID: 16565
// Function ID: 16566
// Name: LookupSupportedLocales
// Dependencies: [16566, 16577, 16578]
// Exports: match

// Module 16565 (LookupSupportedLocales)
import _mod16577 from "module_16577" /* 16577 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16577.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16578").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
