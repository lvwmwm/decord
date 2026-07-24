// Module ID: 3500
// Function ID: 26928
// Name: intervalToDuration
// Dependencies: [3385, 3356, 3400, 3401, 3406, 3407, 3412, 3414, 3209, 3210]
// Exports: default

// Module 3500 (intervalToDuration)
import compareAsc from "compareAsc";
import _typeof from "_typeof";
import compareLocalAsc from "compareLocalAsc";
import differenceInHours from "differenceInHours";
import differenceInMinutes from "differenceInMinutes";
import differenceInMonths from "differenceInMonths";
import differenceInSeconds from "differenceInSeconds";
import differenceInYears from "differenceInYears";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function intervalToDuration(start) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(start.start);
  const defaultResult2 = _typeof.default(start.end);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Start Date is invalid");
    throw rangeError;
  } else {
    const _isNaN = isNaN;
    if (isNaN(defaultResult2.getTime())) {
      const _RangeError = RangeError;
      const rangeError1 = new RangeError("End Date is invalid");
      throw rangeError1;
    } else {
      let obj = {};
      const _Math = Math;
      obj.years = Math.abs(differenceInYears.default(defaultResult2, defaultResult1));
      const defaultResult3 = compareAsc.default(defaultResult2, defaultResult1);
      obj = {};
      obj.years = defaultResult3 * obj.years;
      const defaultResult4 = _typeof.default(defaultResult1, obj);
      const _Math2 = Math;
      obj.months = Math.abs(differenceInMonths.default(defaultResult2, defaultResult4));
      const obj1 = { months: defaultResult3 * obj.months };
      const defaultResult5 = _typeof.default(defaultResult4, obj1);
      const _Math3 = Math;
      obj.days = Math.abs(compareLocalAsc.default(defaultResult2, defaultResult5));
      const obj2 = { days: defaultResult3 * obj.days };
      const defaultResult6 = _typeof.default(defaultResult5, obj2);
      const _Math4 = Math;
      obj.hours = Math.abs(differenceInHours.default(defaultResult2, defaultResult6));
      const obj3 = { hours: defaultResult3 * obj.hours };
      const defaultResult7 = _typeof.default(defaultResult6, obj3);
      const _Math5 = Math;
      obj.minutes = Math.abs(differenceInMinutes.default(defaultResult2, defaultResult7));
      const obj4 = { minutes: defaultResult3 * obj.minutes };
      const _Math6 = Math;
      obj.seconds = Math.abs(differenceInSeconds.default(defaultResult2, _typeof.default(defaultResult7, obj4)));
      return obj;
    }
  }
};
export default exports.default;
