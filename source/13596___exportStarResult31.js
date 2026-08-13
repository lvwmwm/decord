// Module ID: 13596
// Function ID: 13597
// Name: __exportStarResult31
// Dependencies: [13545, 13552, 13579]

// Module 13596 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13545) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13552) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13579) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13579) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
