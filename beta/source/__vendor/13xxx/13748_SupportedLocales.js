// Module ID: 13748
// Function ID: 13749
// Name: SupportedLocales
// Dependencies: [13697, 13704, 13731]
// Exports: SupportedLocales

// Module 13748 (SupportedLocales)
import _mod13697 from "module_13697" /* 13697 */;
import GetOption from "GetOption" /* 13704 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 13731 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod13697.ToObject(arg2);
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
