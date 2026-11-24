// Module ID: 15517
// Function ID: 15518
// Name: SupportedLocales
// Dependencies: [15466, 15473, 15500]
// Exports: SupportedLocales

// Module 15517 (SupportedLocales)
import ToString from "ToString" /* 15466 */;
import GetOption from "GetOption" /* 15473 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15500 */;


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
