// Module ID: 15282
// Function ID: 15283
// Name: SupportedLocales
// Dependencies: [15231, 15238, 15265]
// Exports: SupportedLocales

// Module 15282 (SupportedLocales)
import _mod15231 from "module_15231" /* 15231 */;
import GetOption from "GetOption" /* 15238 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15265 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15231.ToObject(arg2);
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
