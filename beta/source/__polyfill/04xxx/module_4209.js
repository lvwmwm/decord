// Module ID: 4209
// Function ID: 4210
// Dependencies: [4201, 3850]
// Exports: default

// Module 4209
import module_4201_mod from "module_4201" /* 4201 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4201 = module_4201_mod;
if (!module_4201) {
  const obj = { default: module_4201 };
  let tmp3 = obj;
} else {
  tmp3 = module_4201;
}
module_4201 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4201.default(Date.now(), arg0);
};
export default exports.default;
