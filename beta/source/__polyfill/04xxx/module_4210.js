// Module ID: 4210
// Function ID: 4211
// Dependencies: [4202, 3850]
// Exports: default

// Module 4210
import module_4202_mod from "module_4202" /* 4202 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4202 = module_4202_mod;
if (!module_4202) {
  const obj = { default: module_4202 };
  let tmp3 = obj;
} else {
  tmp3 = module_4202;
}
module_4202 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4202.default(Date.now(), arg0);
};
export default exports.default;
