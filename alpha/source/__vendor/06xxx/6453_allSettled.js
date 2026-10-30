// Module ID: 6453
// Function ID: 6454
// Name: allSettled
// Dependencies: [6451, 1469, 1293, 6454, 6457, 6460, 6527]

// Module 6453 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import requirePromise from "requirePromise" /* 6451 */;
import PromiseResolve from "PromiseResolve" /* 6527 */;
import callBind_mod from "callBind" /* 1469 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(6454)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(6457)(arg0);
    return closure_2(this, tmp(6460)(tmp4, (arg0) => {
      const promise = PromiseResolve(self, arg0);
      const tmp = self;
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp2) {
        return closure_3(tmp, tmp2);
      }
    }));
  }
};
