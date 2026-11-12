// Module ID: 16431
// Function ID: 16432
// Name: SupportedLocales
// Dependencies: [16380, 16387, 16414]
// Exports: SupportedLocales

// Module 16431 (SupportedLocales)
import ToString from "ToString" /* 16380 */;
import GetOption from "GetOption" /* 16387 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16414 */;


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
