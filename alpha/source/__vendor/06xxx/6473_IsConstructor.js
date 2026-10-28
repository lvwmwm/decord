// Module ID: 6473
// Function ID: 6474
// Name: IsConstructor
// Dependencies: [6474, 6475]

// Module 6473 (IsConstructor)
import GetIntrinsic from "GetIntrinsic" /* 6474 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 6475 */;

let tmp4;
const tmp = GetIntrinsic("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  const obj = {
    "[[Get]]": () => {

      }
  };
  DefinePropertyOrThrow({}, "", obj);
  tmp4 = DefinePropertyOrThrow;
} catch (err) {
  tmp4 = null;
}
if (tmp4) {
  if (tmp) {
    let closure_1 = {};
    const obj2 = {};
    const obj3 = {
      "[[Get]]": () => {
            throw closure_1;
          },
      "[[Enumerable]]": true
    };
    tmp4(obj2, "length", obj3);
    module.exports = function IsConstructor(arg0) {
      try {
        closure_0(arg0, obj2);
      } catch (tmp5) {
        return tmp5 === closure_1;
      }
    };
  }
}

export default function IsConstructor(fn) {
  let prototype = typeof fn === "function";
  if (typeof fn === "function") {
    prototype = fn.prototype;
  }
  return prototype;
};
