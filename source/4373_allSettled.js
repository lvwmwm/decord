// Module ID: 4373
// Function ID: 38792
// Name: allSettled
// Dependencies: [4371, 1379, 517, 4374, 4377, 4380, 4447]

// Module 4373 (allSettled)
import callBind from "callBind";
import callBind from "callBind";

require("requirePromise")();
let closure_2 = callBind(require("getEvalledConstructor")("%Promise.all%"));
let closure_3 = callBind(require("getEvalledConstructor")("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4374)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, self(4380)(self(4377)(arg0), (arg0) => self(outer1_1[6])(self, arg0).then(function onFulfill(value) {
      return { status: "fulfilled", value };
    }, function onReject(reason) {
      return { status: "rejected", reason };
    })));
  }
};
