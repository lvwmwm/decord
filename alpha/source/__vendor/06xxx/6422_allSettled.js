// Module ID: 6422
// Function ID: 6423
// Name: allSettled
// Dependencies: [6420, 1473, 1304, 6423, 6426, 6429, 6496]

// Module 6422 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import requirePromise from "requirePromise" /* 6420 */;
import PromiseResolve from "PromiseResolve" /* 6496 */;
import callBind_mod from "callBind" /* 1473 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(6423)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(6426)(arg0);
    return closure_2(this, tmp(6429)(tmp4, (arg0) => {
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
