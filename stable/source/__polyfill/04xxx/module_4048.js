// Module ID: 4048
// Function ID: 4049
// Dependencies: [4049, 4050, 3878]
// Exports: default

// Module 4048
import _typeof_mod from "module_4049" /* 4049 */;
import _typeof_mod from "module_4050" /* 4050 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

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

export default function clamp(arg0, arg1) {
  ({ start, end } = arg1);
  requiredArgs.default(2, arguments);
  const items = [arg0, start];
  const items1 = [_typeof.default(items), end];
  return _typeof.default(items1);
};
export default exports.default;
