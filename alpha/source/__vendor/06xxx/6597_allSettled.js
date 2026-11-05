// Module ID: 6597
// Function ID: 6598
// Name: allSettled
// Dependencies: [6595, 1470, 1292, 6598, 6601, 6604, 6671]

// Module 6597 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import requirePromise from "requirePromise" /* 6595 */;
import PromiseResolve from "PromiseResolve" /* 6671 */;
import callBind_mod from "callBind" /* 1470 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(6598)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(6601)(arg0);
    return closure_2(this, tmp(6604)(tmp4, (arg0) => {
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
