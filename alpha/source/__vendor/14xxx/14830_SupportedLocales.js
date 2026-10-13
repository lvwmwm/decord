// Module ID: 14830
// Function ID: 14831
// Name: SupportedLocales
// Dependencies: [14779, 14786, 14813]
// Exports: SupportedLocales

// Module 14830 (SupportedLocales)
import _mod14779 from "module_14779" /* 14779 */;
import GetOption from "GetOption" /* 14786 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14813 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14779.ToObject(arg2);
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
