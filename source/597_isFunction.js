// Module ID: 597
// Function ID: 7023
// Name: isFunction
// Dependencies: []

// Module 597 (isFunction)

export default function isFunction(arg0) {
  if (require(dependencyMap[0])(arg0)) {
    const tmp3 = require(dependencyMap[1])(arg0);
    let tmp4 = "[object Function]" == tmp3;
    if (!tmp4) {
      tmp4 = "[object GeneratorFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object AsyncFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object Proxy]" == tmp3;
    }
    return tmp4;
  } else {
    return false;
  }
};
