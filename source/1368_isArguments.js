// Module ID: 1368
// Function ID: 16486
// Name: isArguments
// Dependencies: []

// Module 1368 (isArguments)
let closure_0 = require(dependencyMap[0])();
let closure_1 = require(dependencyMap[1])("Object.prototype.toString");
function isArguments(arg0) {
  let tmp = closure_0;
  if (closure_0) {
    tmp = arg0;
  }
  if (tmp) {
    tmp = "object" === typeof arg0;
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in arg0;
  }
  let tmp3 = !tmp;
  if (tmp3) {
    tmp3 = "[object Arguments]" === callback(arg0);
  }
  return tmp3;
}
let isArguments2 = function isArguments(callee) {
  const tmp = isArguments(callee);
  let tmp2 = tmp;
  if (!tmp) {
    let tmp4 = null !== callee;
    if (tmp4) {
      tmp4 = "object" === typeof callee;
    }
    if (tmp4) {
      tmp4 = "length" in callee;
    }
    if (tmp4) {
      tmp4 = "number" === typeof callee.length;
    }
    if (tmp4) {
      tmp4 = callee.length >= 0;
    }
    if (tmp4) {
      tmp4 = "[object Array]" !== callback(callee);
    }
    if (tmp4) {
      tmp4 = "callee" in callee;
    }
    if (tmp4) {
      tmp4 = "[object Function]" === callback(callee.callee);
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
isArguments.isLegacyArguments = isArguments2;
if (() => isArguments(arguments)()) {
  isArguments2 = isArguments;
}

export default isArguments2;
