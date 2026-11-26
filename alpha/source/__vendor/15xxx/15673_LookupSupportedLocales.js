// Module ID: 15673
// Function ID: 15674
// Name: LookupSupportedLocales
// Dependencies: [15674, 15685, 15686]
// Exports: match

// Module 15673 (LookupSupportedLocales)
import _mod15685 from "module_15685" /* 15685 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15685.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15686").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
