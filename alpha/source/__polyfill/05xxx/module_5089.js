// Module ID: 5089
// Function ID: 5090
// Dependencies: [5087, 1455, 1281, 5090, 5093, 5096, 5163]

// Module 5089
import _mod1281 from "module_1281" /* 1281 */;
import requirePromise from "requirePromise" /* 5087 */;
import callBind_mod from "callBind" /* 1455 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1281("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1281("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5090)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5096)(tmp(5093)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
