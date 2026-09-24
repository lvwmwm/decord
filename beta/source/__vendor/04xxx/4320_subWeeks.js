// Module ID: 4320
// Function ID: 4321
// Name: subWeeks
// Dependencies: [3885, 4049, 3882]
// Exports: default

// Module 4320 (subWeeks)
import module_3885_mod from "module_3885" /* 3885 */;
import module_4049_mod from "module_4049" /* 4049 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let module_4049 = module_4049_mod;
if (!module_4049) {
  const obj2 = { default: module_4049 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4049;
}
module_4049 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4049.default(arg0, -module_3885.default(arg1));
};
export default exports.default;
