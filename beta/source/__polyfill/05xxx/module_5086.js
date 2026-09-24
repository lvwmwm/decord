// Module ID: 5086
// Function ID: 5087
// Dependencies: [5087, 5088]

// Module 5086
import _mod5087 from "module_5087" /* 5087 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 5088 */;

const tmp = _mod5087("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  const obj = {
    () => {

      }
  };
  DefinePropertyOrThrow({}, "", obj);
  let tmp4 = DefinePropertyOrThrow;
  if (tmp4) {
    if (tmp) {
      let closure_1 = {};
      const obj2 = {};
      const obj3 = {
        () => {
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
  module.exports = function IsConstructor(fn) {
    let prototype = typeof fn === "function";
    if (typeof fn === "function") {
      prototype = fn.prototype;
    }
    return prototype;
  };
} catch (err) {
  tmp4 = null;
}
