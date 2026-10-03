// Module ID: 14017
// Function ID: 14018
// Name: SupportedLocales
// Dependencies: [13966, 13973, 14000]
// Exports: SupportedLocales

// Module 14017 (SupportedLocales)
import _mod13966 from "module_13966" /* 13966 */;
import GetOption from "GetOption" /* 13973 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14000 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod13966.ToObject(arg2);
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
