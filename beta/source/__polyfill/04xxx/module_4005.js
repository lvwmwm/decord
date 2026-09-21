// Module ID: 4005
// Function ID: 4006
// Dependencies: [3853, 4006, 4009, 3850]
// Exports: default

// Module 4005
import module_3853_mod from "module_3853" /* 3853 */;
import module_4006_mod from "module_4006" /* 4006 */;
import module_4009_mod from "module_4009" /* 4009 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let module_4006 = module_4006_mod;
if (!module_4006) {
  const obj2 = { default: module_4006 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4006;
}
module_4006 = tmp5;
let module_4009 = module_4009_mod;
if (!module_4009) {
  const obj3 = { default: module_4009 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4009;
}
module_4009 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4009.default(arg0, module_4006.default(arg0) + module_3853.default(arg1));
};
export default exports.default;
