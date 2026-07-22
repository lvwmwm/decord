// Module ID: 4443
// Function ID: 38919
// Name: PromiseResolve
// Dependencies: []

// Module 4443 (PromiseResolve)
const tmp = require(dependencyMap[0])("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = require(dependencyMap[1])(tmp);
}

export default function PromiseResolve(arg0, arg1) {
  if (tmp2) {
    return tmp2(arg0, arg1);
  } else {
    let tmp3 = require(dependencyMap[2]);
    const prototype = tmp3.prototype;
    tmp3 = new tmp3("This environment does not support Promises.");
    throw tmp3;
  }
};
