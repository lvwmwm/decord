// Module ID: 17506
// Function ID: 17507
// Name: useTimeValue
// Dependencies: [19, 2, 11782]
// Exports: default

// Module 17506 (useTimeValue)
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils" /* 11782 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
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
};
export const timeToMinutes = FamilyCenterRestrictedHoursUtils.timeToMinutes;
