// Module ID: 15356
// Function ID: 15357
// Name: LookupSupportedLocales
// Dependencies: [15357, 15368, 15369]
// Exports: match

// Module 15356 (LookupSupportedLocales)
import _mod15368 from "module_15368" /* 15368 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15368.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15369").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
