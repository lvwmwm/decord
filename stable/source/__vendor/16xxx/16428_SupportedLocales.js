// Module ID: 16428
// Function ID: 16429
// Name: SupportedLocales
// Dependencies: [16377, 16384, 16411]
// Exports: SupportedLocales

// Module 16428 (SupportedLocales)
import ToString from "ToString" /* 16377 */;
import GetOption from "GetOption" /* 16384 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16411 */;


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
