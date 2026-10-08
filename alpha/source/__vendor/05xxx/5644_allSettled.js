// Module ID: 5644
// Function ID: 5645
// Name: allSettled
// Dependencies: [5642, 1473, 1304, 5645, 5648, 5651, 5718]

// Module 5644 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import requirePromise from "requirePromise" /* 5642 */;
import PromiseResolve from "PromiseResolve" /* 5718 */;
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
  if ("Object" !== self(5645)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5648)(arg0);
    return closure_2(this, tmp(5651)(tmp4, (arg0) => {
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
