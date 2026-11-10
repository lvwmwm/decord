// Module ID: 16426
// Function ID: 16427
// Name: SupportedLocales
// Dependencies: [16375, 16382, 16409]
// Exports: SupportedLocales

// Module 16426 (SupportedLocales)
import ToString from "ToString" /* 16375 */;
import GetOption from "GetOption" /* 16382 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16409 */;


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
