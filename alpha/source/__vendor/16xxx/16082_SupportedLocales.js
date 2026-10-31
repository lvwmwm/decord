// Module ID: 16082
// Function ID: 16083
// Name: SupportedLocales
// Dependencies: [16031, 16038, 16065]
// Exports: SupportedLocales

// Module 16082 (SupportedLocales)
import _mod16031 from "module_16031" /* 16031 */;
import GetOption from "GetOption" /* 16038 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16065 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16031.ToObject(arg2);
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
