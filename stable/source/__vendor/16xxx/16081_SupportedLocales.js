// Module ID: 16081
// Function ID: 16082
// Name: SupportedLocales
// Dependencies: [16030, 16037, 16064]
// Exports: SupportedLocales

// Module 16081 (SupportedLocales)
import _mod16030 from "module_16030" /* 16030 */;
import GetOption from "GetOption" /* 16037 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16064 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16030.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
}
