// Module ID: 4431
// Function ID: 4432
// Name: allSettled
// Dependencies: [4429, 1403, 540, 4432, 4435, 4438, 4505]

// Module 4431 (allSettled)
import callBind from "callBind";
import callBind from "callBind";

require("requirePromise")();
let closure_2 = callBind(require("getEvalledConstructor")("%Promise.all%"));
let closure_3 = callBind(require("getEvalledConstructor")("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4432)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4438)(tmp(4435)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return outer1_3(tmp, tmp3);
      }
    }));
  }
};
