// Module ID: 4131
// Function ID: 4132
// Name: eachWeekOfInterval
// Dependencies: [4086, 4077, 3918, 3919]
// Exports: default

// Module 4131 (eachWeekOfInterval)
import addWeeks_mod from "addWeeks" /* 4086 */;
import startOfWeek_mod from "startOfWeek" /* 4077 */;
import toDate_mod from "toDate" /* 3918 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let addWeeks = addWeeks_mod;
if (!addWeeks) {
  let obj = { default: addWeeks };
  tmp3 = obj;
} else {
  tmp3 = addWeeks;
}
addWeeks = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  tmp5 = { default: startOfWeek };
  const obj2 = { default: startOfWeek };
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekOfInterval(arg0, arg1) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = toDate.default(obj.start);
  const defaultResult2 = toDate.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfWeek.default(defaultResult1, arg1);
    const defaultResult4 = startOfWeek.default(defaultResult2, arg1);
    defaultResult3.setHours(15);
    defaultResult4.setHours(15);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let setHoursResult2 = defaultResult3.setHours(0);
        let arr = items.push(toDate.default(defaultResult3));
        let defaultResult5 = addWeeks.default(defaultResult3, 1);
        let setHoursResult3 = defaultResult5.setHours(15);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
