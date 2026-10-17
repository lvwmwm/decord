// Module ID: 15278
// Function ID: 15279
// Name: SupportedLocales
// Dependencies: [15227, 15234, 15261]
// Exports: SupportedLocales

// Module 15278 (SupportedLocales)
import _mod15227 from "module_15227" /* 15227 */;
import GetOption from "GetOption" /* 15234 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15261 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15227.ToObject(arg2);
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
