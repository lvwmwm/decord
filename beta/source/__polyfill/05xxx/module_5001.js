// Module ID: 5001
// Function ID: 5002
// Dependencies: [4999, 1455, 1281, 5002, 5005, 5008, 5075]

// Module 5001
import _mod1281 from "module_1281" /* 1281 */;
import requirePromise from "requirePromise" /* 4999 */;
import callBind_mod from "callBind" /* 1455 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1281("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1281("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5002)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5008)(tmp(5005)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
