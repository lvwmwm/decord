// Module ID: 14509
// Function ID: 14510
// Name: SupportedLocales
// Dependencies: [14458, 14465, 14492]
// Exports: SupportedLocales

// Module 14509 (SupportedLocales)
import _mod14458 from "module_14458" /* 14458 */;
import GetOption from "GetOption" /* 14465 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14492 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14458.ToObject(arg2);
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
