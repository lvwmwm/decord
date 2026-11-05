// Module ID: 6648
// Function ID: 6649
// Name: IsConstructor
// Dependencies: [6649, 6650]

// Module 6648 (IsConstructor)
import GetIntrinsic from "GetIntrinsic" /* 6649 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 6650 */;

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
