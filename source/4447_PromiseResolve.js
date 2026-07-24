// Module ID: 4447
// Function ID: 38952
// Name: PromiseResolve
// Dependencies: [517, 1379, 539]

// Module 4447 (PromiseResolve)
const tmp = require("getEvalledConstructor")("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = require("callBind")(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (tmp2) {
    return tmp2(arg0, arg1);
  } else {
    let tmp3 = require(539);
    const prototype = tmp3.prototype;
    tmp3 = new tmp3("This environment does not support Promises.");
    throw tmp3;
  }
};
