// Module ID: 4767
// Function ID: 4768
// Name: allSettled
// Dependencies: [4765, 1418, 537, 4768, 4771, 4774, 4841]

// Module 4767 (allSettled)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import requirePromise from "requirePromise" /* 4765 */;
import callBind from "callBind" /* 1418 */;

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4768)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4774)(tmp(4771)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_1_3(tmp, tmp3);
      }
    }));
  }
};
