// Module ID: 5035
// Function ID: 5036
// Dependencies: [5033, 1459, 1285, 5036, 5039, 5042, 5109]

// Module 5035
import _mod1285 from "module_1285" /* 1285 */;
import requirePromise from "requirePromise" /* 5033 */;
import callBind_mod from "callBind" /* 1459 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1285("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1285("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5036)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5042)(tmp(5039)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
