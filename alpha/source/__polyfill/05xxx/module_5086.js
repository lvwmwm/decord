// Module ID: 5086
// Function ID: 5087
// Dependencies: [5084, 1455, 1281, 5087, 5090, 5093, 5160]

// Module 5086
import _mod1281 from "module_1281" /* 1281 */;
import requirePromise from "requirePromise" /* 5084 */;
import callBind_mod from "callBind" /* 1455 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1281("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1281("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5087)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5093)(tmp(5090)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
