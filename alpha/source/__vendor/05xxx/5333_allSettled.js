// Module ID: 5333
// Function ID: 5334
// Name: allSettled
// Dependencies: [5331, 1461, 1292, 5334, 5337, 5340, 5407]

// Module 5333 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import requirePromise from "requirePromise" /* 5331 */;
import PromiseResolve from "PromiseResolve" /* 5407 */;
import callBind_mod from "callBind" /* 1461 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(5334)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5337)(arg0);
    return closure_2(this, tmp(5340)(tmp4, (arg0) => {
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
