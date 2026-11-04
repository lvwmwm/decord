// Module ID: 6594
// Function ID: 6595
// Name: allSettled
// Dependencies: [6592, 1470, 1292, 6595, 6598, 6601, 6668]

// Module 6594 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import requirePromise from "requirePromise" /* 6592 */;
import PromiseResolve from "PromiseResolve" /* 6668 */;
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
  if ("Object" !== self(6595)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(6598)(arg0);
    return closure_2(this, tmp(6601)(tmp4, (arg0) => {
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
