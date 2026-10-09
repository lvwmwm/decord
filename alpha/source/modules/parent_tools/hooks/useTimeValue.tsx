// Module ID: 15132
// Function ID: 15133
// Name: useTimeValue
// Dependencies: [19, 558, 576, 2, 12519]

// Module 15132 (useTimeValue)
import react2 from "react" /* 576 */;
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils" /* 12519 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTimeValue(initial) {
  const obj = react2;
  const cResult = obj.c(3);
  initial = initial.initial;
  const defaultValue = initial.defaultValue;
  if (cResult[0] === defaultValue) {
    let tmp2;
    if (cResult[1] === initial) {
      tmp2 = cResult[2];
    }
    return react.useState(tmp2);
  }
  const fn = function s() {
    let tmp2;
    const tmp = initial;
    if (null != initial) {
      const time = { hours: null, minutes: null };
      ({ hours: obj.hours, minutes: obj.minutes } = tmp);
      tmp2 = time;
    } else {
      tmp2 = defaultValue;
    }
    return tmp2;
  };
  cResult[0] = defaultValue;
  cResult[1] = initial;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useTimeValue(arg0) {
  let closure_129_0;
  let closure_129_1;
  ({ initial: closure_129_0, defaultValue: closure_129_1 } = arg0);
  return react.useState(() => {
    let tmp2;
    const tmp = closure_1_0;
    if (null != closure_1_0) {
      const time = { hours: null, minutes: null };
      ({ hours: obj.hours, minutes: obj.minutes } = tmp);
      tmp2 = time;
    } else {
      tmp2 = closure_1_1;
    }
    return tmp2;
  });
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default tmp2;
export const timeToMinutes = FamilyCenterRestrictedHoursUtils.timeToMinutes;
