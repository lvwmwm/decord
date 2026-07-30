// Module ID: 13315
// Function ID: 13316
// Name: __exportStarResult31
// Dependencies: [13264, 13271, 13298]

// Module 13315 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13264) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13271) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13298) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13298) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
