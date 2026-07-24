// Module ID: 13889
// Function ID: 106302
// Name: useTimeValue
// Dependencies: [31, 2, 10252]
// Exports: default

// Module 13889 (useTimeValue)
import result from "result";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
  let result;
  let closure_1;
  ({ initial: result, defaultValue: closure_1 } = arg0);
  return React.useState(() => {
    if (null != result) {
      const obj = {};
      ({ hours: obj.hours, minutes: obj.minutes } = result);
      let tmp = obj;
    } else {
      tmp = closure_1;
    }
    return tmp;
  });
};
export const timeToMinutes = require("_createForOfIteratorHelperLoose").timeToMinutes;
