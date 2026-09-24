// Module ID: 4037
// Function ID: 4038
// Dependencies: [3885, 4038, 4041, 3882]
// Exports: default

// Module 4037
import module_3885_mod from "module_3885" /* 3885 */;
import module_4038_mod from "module_4038" /* 4038 */;
import module_4041_mod from "module_4041" /* 4041 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let module_4038 = module_4038_mod;
if (!module_4038) {
  const obj2 = { default: module_4038 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4038;
}
module_4038 = tmp5;
let module_4041 = module_4041_mod;
if (!module_4041) {
  const obj3 = { default: module_4041 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4041;
}
module_4041 = tmp7;
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
  return module_4041.default(arg0, module_4038.default(arg0) + module_3885.default(arg1));
};
export default exports.default;
