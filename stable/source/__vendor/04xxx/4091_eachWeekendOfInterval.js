// Module ID: 4091
// Function ID: 4092
// Name: eachWeekendOfInterval
// Dependencies: [4083, 4029, 4028, 3878]
// Exports: default

// Module 4091 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4083 */;
import module_4029_mod from "module_4029" /* 4029 */;
import module_4028_mod from "module_4028" /* 4028 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj2 = { default: module_4029 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4029;
}
module_4029 = tmp5;
let module_4028 = module_4028_mod;
if (!module_4028) {
  const obj3 = { default: module_4028 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4028;
}
module_4028 = tmp7;
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
      if (module_4028.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4029.default(tmp3)) {
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
