// Module ID: 4215
// Function ID: 4216
// Dependencies: [3997, 4030, 3850]
// Exports: default

// Module 4215
import module_3997_mod from "module_3997" /* 3997 */;
import module_4030_mod from "module_4030" /* 4030 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
let module_4030 = module_4030_mod;
if (!module_4030) {
  const obj2 = { default: module_4030 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4030;
}
module_4030 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4030.default(arg0, module_3997.default(Date.now(), 1));
};
export default exports.default;
