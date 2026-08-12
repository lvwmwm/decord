// Module ID: 4585
// Function ID: 4586
// Name: allSettled
// Dependencies: [4583, 1422, 540, 4586, 4589, 4592, 4659]

// Module 4585 (allSettled)
import callBind from "callBind";
import callBind from "callBind";

require("requirePromise")();
let closure_2 = callBind(require("getEvalledConstructor")("%Promise.all%"));
let closure_3 = callBind(require("getEvalledConstructor")("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4586)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4592)(tmp(4589)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return outer1_3(tmp, tmp3);
      }
    }));
  }
};
