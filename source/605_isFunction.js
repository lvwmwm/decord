// Module ID: 605
// Function ID: 606
// Name: isFunction
// Dependencies: [606, 607]

// Module 605 (isFunction)

export default function isFunction(arg0) {
  if (require(606) /* isObject */(arg0)) {
    const tmp3 = tmp(607)(arg0);
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
  tmp = require;
};
