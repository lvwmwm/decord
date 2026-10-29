// Module ID: 16001
// Function ID: 16002
// Name: SupportedLocales
// Dependencies: [15950, 15957, 15984]
// Exports: SupportedLocales

// Module 16001 (SupportedLocales)
import _mod15950 from "module_15950" /* 15950 */;
import GetOption from "GetOption" /* 15957 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15984 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15950.ToObject(arg2);
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
