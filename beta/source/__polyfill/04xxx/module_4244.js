// Module ID: 4244
// Function ID: 4245
// Dependencies: [4236, 3882]
// Exports: default

// Module 4244
import module_4236_mod from "module_4236" /* 4236 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4236 = module_4236_mod;
if (!module_4236) {
  const obj = { default: module_4236 };
  let tmp3 = obj;
} else {
  tmp3 = module_4236;
}
module_4236 = tmp3;
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
  return module_4236.default(arg0, Date.now());
};
export default exports.default;
