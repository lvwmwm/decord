// Module ID: 13715
// Function ID: 103767
// Name: useTimeValue
// Dependencies: []
// Exports: default

// Module 13715 (useTimeValue)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
  ({ initial: closure_0, defaultValue: closure_1 } = arg0);
  return React.useState(() => {
    if (null != closure_0) {
      const obj = {};
      ({ hours: obj.hours, minutes: obj.minutes } = closure_0);
      let tmp = obj;
    } else {
      tmp = closure_1;
    }
    return tmp;
  });
};
export const timeToMinutes = arg1(dependencyMap[2]).timeToMinutes;
