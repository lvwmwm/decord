// Module ID: 15537
// Function ID: 15538
// Name: SupportedLocales
// Dependencies: [15486, 15493, 15520]
// Exports: SupportedLocales

// Module 15537 (SupportedLocales)
import _mod15486 from "module_15486" /* 15486 */;
import GetOption from "GetOption" /* 15493 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15520 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15486.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
