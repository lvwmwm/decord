// Module ID: 4592
// Function ID: 4593
// Name: clamp
// Dependencies: [4593, 4594, 4422]
// Exports: default

// Module 4592 (clamp)
import max_mod from "max" /* 4593 */;
import min_mod from "min" /* 4594 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let tmp3;
let tmp5;
let tmp7;
let max = max_mod;
if (!max) {
  tmp3 = { default: max };
  const obj = { default: max };
} else {
  tmp3 = max;
}
max = tmp3;
let min = min_mod;
if (!min) {
  tmp5 = { default: min };
  const obj2 = { default: min };
} else {
  tmp5 = min;
}
min = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function clamp(arg0, arg1) {
  let end;
  let start;
  ({ start, end } = arg1);
  requiredArgs.default(2, arguments);
  const items = [arg0, start];
  const items1 = [, ];
  const _default = min.default;
  items1[0] = max.default(items);
  items1[1] = end;
  return _default(items1);
};
