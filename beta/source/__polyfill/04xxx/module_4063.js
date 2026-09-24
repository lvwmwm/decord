// Module ID: 4063
// Function ID: 4064
// Dependencies: [4064, 3881, 3882]
// Exports: default

// Module 4063
import _typeof_mod from "module_4064" /* 4064 */;
import _typeof_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
}
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isValid(num) {
  requiredArgs.default(1, arguments);
  if (!_typeof.default(num)) {
    if (typeof num !== "number") {
      return false;
    }
  }
  return !isNaN(Number(_typeof.default(num)));
};
export default exports.default;
