// Module ID: 16399
// Function ID: 16400
// Name: SupportedLocales
// Dependencies: [16348, 16355, 16382]
// Exports: SupportedLocales

// Module 16399 (SupportedLocales)
import ToString from "ToString" /* 16348 */;
import GetOption from "GetOption" /* 16355 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16382 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = ToString.ToObject(arg2);
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
