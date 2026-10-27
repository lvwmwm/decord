// Module ID: 5904
// Function ID: 5905
// Name: allSettled
// Dependencies: [5902, 1476, 1307, 5905, 5908, 5911, 5978]

// Module 5904 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import requirePromise from "requirePromise" /* 5902 */;
import PromiseResolve from "PromiseResolve" /* 5978 */;
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
  if ("Object" !== self(5905)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5908)(arg0);
    return closure_2(this, tmp(5911)(tmp4, (arg0) => {
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
