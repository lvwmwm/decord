// Module ID: 16341
// Function ID: 16342
// Name: SupportedLocales
// Dependencies: [16290, 16297, 16324]
// Exports: SupportedLocales

// Module 16341 (SupportedLocales)
import ToString from "ToString" /* 16290 */;
import GetOption from "GetOption" /* 16297 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16324 */;


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
