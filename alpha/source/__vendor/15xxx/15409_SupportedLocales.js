// Module ID: 15409
// Function ID: 15410
// Name: SupportedLocales
// Dependencies: [15358, 15365, 15392]
// Exports: SupportedLocales

// Module 15409 (SupportedLocales)
import ToString from "ToString" /* 15358 */;
import GetOption from "GetOption" /* 15365 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15392 */;


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
