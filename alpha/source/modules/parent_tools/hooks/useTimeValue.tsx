// Module ID: 16787
// Function ID: 16788
// Name: useTimeValue
// Dependencies: [19, 2, 10994]
// Exports: default

// Module 16787 (useTimeValue)
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils" /* 10994 */;
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
