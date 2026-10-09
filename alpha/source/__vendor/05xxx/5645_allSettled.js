// Module ID: 5645
// Function ID: 5646
// Name: allSettled
// Dependencies: [5643, 1474, 1305, 5646, 5649, 5652, 5719]

// Module 5645 (allSettled)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import requirePromise from "requirePromise" /* 5643 */;
import PromiseResolve from "PromiseResolve" /* 5719 */;
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
  if ("Object" !== self(5646)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = tmp(5649)(arg0);
    return closure_2(this, tmp(5652)(tmp4, (arg0) => {
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
