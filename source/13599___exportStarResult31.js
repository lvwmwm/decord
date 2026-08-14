// Module ID: 13599
// Function ID: 13600
// Name: __exportStarResult31
// Dependencies: [13548, 13555, 13582]

// Module 13599 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13548) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13555) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13582) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13582) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
