// Module ID: 16382
// Function ID: 16383
// Name: LookupSupportedLocales
// Dependencies: [16383, 16394, 16395]
// Exports: match

// Module 16382 (LookupSupportedLocales)
import _mod16394 from "module_16394" /* 16394 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16394.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16395").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
