// Module ID: 4133
// Function ID: 4134
// Dependencies: [4129, 3882]
// Exports: default

// Module 4133
import module_4129_mod from "module_4129" /* 4129 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj = { default: module_4129 };
  let tmp3 = obj;
} else {
  tmp3 = module_4129;
}
module_4129 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4129.default(arg0, Date.now(), arg1);
};
export default exports.default;
