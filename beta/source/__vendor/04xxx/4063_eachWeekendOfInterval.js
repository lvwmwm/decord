// Module ID: 4063
// Function ID: 4064
// Name: eachWeekendOfInterval
// Dependencies: [4055, 4001, 4000, 3850]
// Exports: default

// Module 4063 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4055 */;
import module_4001_mod from "module_4001" /* 4001 */;
import module_4000_mod from "module_4000" /* 4000 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4001 = module_4001_mod;
if (!module_4001) {
  const obj2 = { default: module_4001 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4001;
}
module_4001 = tmp5;
let module_4000 = module_4000_mod;
if (!module_4000) {
  const obj3 = { default: module_4000 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4000;
}
module_4000 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfInterval(arg0) {
  let tmp5;
  requiredArgs.default(1, arguments);
  const defaultResult1 = eachDayOfInterval.default(arg0);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      let tmp3 = defaultResult1[num];
      tmp5 = sum;
      if (module_4000.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4001.default(tmp3)) {
          sum1 = sum + 5;
        }
        tmp5 = sum1;
      }
      num = tmp5;
    } while (tmp5 < defaultResult1.length);
  }
  return items;
};
export default exports.default;
