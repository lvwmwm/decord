// Module ID: 5097
// Function ID: 5098
// Name: allSettled
// Dependencies: [5095, 1462, 1293, 5098, 5101, 5104, 5171]

// Module 5097 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import requirePromise from "requirePromise" /* 5095 */;
import PromiseResolve from "PromiseResolve" /* 5171 */;
import callBind_mod from "callBind" /* 1462 */;

let tmp = requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  let tmp = self;
  const tmp2 = dependencyMap;
  if ("Object" !== self(5098)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5101)(arg0);
    return closure_2(this, tmp(5104)(tmp4, (arg0) => {
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
