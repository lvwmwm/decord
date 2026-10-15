// Module ID: 5864
// Function ID: 5865
// Name: allSettled
// Dependencies: [5862, 1474, 1305, 5865, 5868, 5871, 5938]

// Module 5864 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import requirePromise from "requirePromise" /* 5862 */;
import PromiseResolve from "PromiseResolve" /* 5938 */;
import callBind_mod from "callBind" /* 1474 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(5865)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5868)(arg0);
    return closure_2(this, tmp(5871)(tmp4, (arg0) => {
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
