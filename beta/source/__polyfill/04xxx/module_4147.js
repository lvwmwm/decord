// Module ID: 4147
// Function ID: 4148
// Dependencies: [3881, 4148, 3882]
// Exports: default

// Module 4147
import _typeof_mod from "module_3881" /* 3881 */;
import module_4148_mod from "module_4148" /* 4148 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4148 = module_4148_mod;
if (!module_4148) {
  const obj2 = { default: module_4148 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4148;
}
module_4148 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (module_4148.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;
