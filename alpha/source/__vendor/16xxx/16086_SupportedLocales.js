// Module ID: 16086
// Function ID: 16087
// Name: SupportedLocales
// Dependencies: [16035, 16042, 16069]
// Exports: SupportedLocales

// Module 16086 (SupportedLocales)
import _mod16035 from "module_16035" /* 16035 */;
import GetOption from "GetOption" /* 16042 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16069 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16035.ToObject(arg2);
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
