// Module ID: 14181
// Function ID: 14182
// Name: __exportStarResult31
// Dependencies: [14130, 14137, 14164]

// Module 14181 (__exportStarResult31)
import __exportStarResult32 from "__exportStarResult32" /* 14130 */;
import __exportStarResult4 from "__exportStarResult4" /* 14137 */;
import match from "match" /* 14164 */;

require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = __exportStarResult32.ToObject(arg2);
    str = __exportStarResult4.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return match.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return match.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
