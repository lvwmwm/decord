// Module ID: 16414
// Function ID: 16415
// Name: LookupSupportedLocales
// Dependencies: [16415, 16426, 16427]
// Exports: match

// Module 16414 (LookupSupportedLocales)
import _mod16426 from "module_16426" /* 16426 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16426.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16427").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
