// Module ID: 16587
// Function ID: 16588
// Name: SupportedLocales
// Dependencies: [16536, 16543, 16570]
// Exports: SupportedLocales

// Module 16587 (SupportedLocales)
import ToString from "ToString" /* 16536 */;
import GetOption from "GetOption" /* 16543 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16570 */;


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
