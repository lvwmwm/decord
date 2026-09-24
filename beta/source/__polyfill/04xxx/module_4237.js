// Module ID: 4237
// Function ID: 4238
// Dependencies: [4226, 3882]
// Exports: default

// Module 4237
import module_4226_mod from "module_4226" /* 4226 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4226 = module_4226_mod;
if (!module_4226) {
  const obj = { default: module_4226 };
  let tmp3 = obj;
} else {
  tmp3 = module_4226;
}
module_4226 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4226.default(Date.now(), arg0);
};
export default exports.default;
