// Module ID: 14514
// Function ID: 14515
// Name: SupportedLocales
// Dependencies: [14463, 14470, 14497]
// Exports: SupportedLocales

// Module 14514 (SupportedLocales)
import _mod14463 from "module_14463" /* 14463 */;
import GetOption from "GetOption" /* 14470 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14497 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14463.ToObject(arg2);
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
