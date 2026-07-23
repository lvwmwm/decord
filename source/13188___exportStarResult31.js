// Module ID: 13188
// Function ID: 101552
// Name: __exportStarResult31
// Dependencies: [13137, 13144, 13171]

// Module 13188 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13137) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13144) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13171) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13171) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
