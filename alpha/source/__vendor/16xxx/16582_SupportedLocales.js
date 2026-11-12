// Module ID: 16582
// Function ID: 16583
// Name: SupportedLocales
// Dependencies: [16531, 16538, 16565]
// Exports: SupportedLocales

// Module 16582 (SupportedLocales)
import ToString from "ToString" /* 16531 */;
import GetOption from "GetOption" /* 16538 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16565 */;


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
