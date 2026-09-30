// Module ID: 5292
// Function ID: 5293
// Dependencies: [5290, 1456, 1281, 5293, 5296, 5299, 5366]

// Module 5292
import _mod1281 from "module_1281" /* 1281 */;
import requirePromise from "requirePromise" /* 5290 */;
import callBind_mod from "callBind" /* 1456 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1281("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1281("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5293)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5299)(tmp(5296)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
