// Module ID: 4286
// Function ID: 4287
// Name: subQuarters
// Dependencies: [3853, 4015, 3850]
// Exports: default

// Module 4286 (subQuarters)
import module_3853_mod from "module_3853" /* 3853 */;
import module_4015_mod from "module_4015" /* 4015 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let module_4015 = module_4015_mod;
if (!module_4015) {
  const obj2 = { default: module_4015 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4015;
}
module_4015 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4015.default(arg0, -module_3853.default(arg1));
};
export default exports.default;
