// Module ID: 15697
// Function ID: 15698
// Name: SupportedLocales
// Dependencies: [15646, 15653, 15680]
// Exports: SupportedLocales

// Module 15697 (SupportedLocales)
import ToString from "ToString" /* 15646 */;
import GetOption from "GetOption" /* 15653 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15680 */;


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
