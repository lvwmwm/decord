// Module ID: 4206
// Function ID: 4207
// Dependencies: [4198, 3846]
// Exports: default

// Module 4206
import module_4198_mod from "module_4198" /* 4198 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4198 = module_4198_mod;
if (!module_4198) {
  const obj = { default: module_4198 };
  let tmp3 = obj;
} else {
  tmp3 = module_4198;
}
module_4198 = tmp3;
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
  return module_4198.default(Date.now(), arg0);
};
export default exports.default;
