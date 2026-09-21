// Module ID: 4057
// Function ID: 4058
// Name: eachMinuteOfInterval
// Dependencies: [4014, 3849, 4058, 3850]
// Exports: default

// Module 4057 (eachMinuteOfInterval)
import module_4014_mod from "module_4014" /* 4014 */;
import _typeof_mod from "module_3849" /* 3849 */;
import startOfMinute_mod from "startOfMinute" /* 4058 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4014 = module_4014_mod;
if (!module_4014) {
  const obj = { default: module_4014 };
  let tmp3 = obj;
} else {
  tmp3 = module_4014;
}
module_4014 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let startOfMinute = startOfMinute_mod;
if (!startOfMinute) {
  const obj3 = { default: startOfMinute };
  let tmp7 = obj3;
} else {
  tmp7 = startOfMinute;
}
startOfMinute = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachMinuteOfInterval(start, step) {
  let time2;
  requiredArgs.default(1, arguments);
  let defaultResult1 = startOfMinute.default(_typeof.default(start.start));
  const time = defaultResult1.getTime();
  const time1 = _typeof.default(start.end).getTime();
  if (time >= time1) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  } else {
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num = 1;
    if (null !== step) {
      num = 1;
      if (undefined !== step) {
        num = step;
      }
    }
    const NumberResult = Number(num);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let arr = items.push(_typeof.default(defaultResult1));
            let defaultResult3 = module_4014.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
        }
        return items;
      }
    }
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("`options.step` must be a number equal to or greater than 1");
    throw rangeError1;
  }
  const defaultResult2 = _typeof.default(start.end);
};
export default exports.default;
