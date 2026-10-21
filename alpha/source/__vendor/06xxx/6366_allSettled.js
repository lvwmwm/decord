// Module ID: 6366
// Function ID: 6367
// Name: allSettled
// Dependencies: [6364, 1476, 1307, 6367, 6370, 6373, 6440]

// Module 6366 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import requirePromise from "requirePromise" /* 6364 */;
import PromiseResolve from "PromiseResolve" /* 6440 */;
import callBind_mod from "callBind" /* 1476 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(6367)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(6370)(arg0);
    return closure_2(this, tmp(6373)(tmp4, (arg0) => {
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
