// Module ID: 4212
// Function ID: 4213
// Dependencies: [4204, 3850]
// Exports: default

// Module 4212
import module_4204_mod from "module_4204" /* 4204 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4204 = module_4204_mod;
if (!module_4204) {
  const obj = { default: module_4204 };
  let tmp3 = obj;
} else {
  tmp3 = module_4204;
}
module_4204 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4204.default(arg0, Date.now());
};
export default exports.default;
