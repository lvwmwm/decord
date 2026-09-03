// Module ID: 4760
// Function ID: 4761
// Name: allSettled
// Dependencies: [4758, 1417, 537, 4761, 4764, 4767, 4834]

// Module 4760 (allSettled)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import requirePromise from "requirePromise" /* 4758 */;
import callBind from "callBind" /* 1417 */;

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4761)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4767)(tmp(4764)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_1_3(tmp, tmp3);
      }
    }));
  }
};
