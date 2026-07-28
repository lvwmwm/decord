// Module ID: 4408
// Function ID: 38919
// Name: allSettled
// Dependencies: [4406, 1379, 517, 4409, 4412, 4415, 4482]

// Module 4408 (allSettled)
import callBind from "callBind";
import callBind from "callBind";

require("requirePromise")();
let closure_2 = callBind(require("getEvalledConstructor")("%Promise.all%"));
let closure_3 = callBind(require("getEvalledConstructor")("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4409)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, self(4415)(self(4412)(arg0), (arg0) => self(outer1_1[6])(self, arg0).then(function onFulfill(value) {
      return { status: "fulfilled", value };
    }, function onReject(reason) {
      return { status: "rejected", reason };
    })));
  }
};
