// Module ID: 5096
// Function ID: 5097
// Name: allSettled
// Dependencies: [5094, 1456, 1281, 5097, 5100, 5103, 5170]

// Module 5096 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import requirePromise from "requirePromise" /* 5094 */;
import PromiseResolve from "PromiseResolve" /* 5170 */;
import callBind_mod from "callBind" /* 1456 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(5097)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5100)(arg0);
    return closure_2(this, tmp(5103)(tmp4, (arg0) => {
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
