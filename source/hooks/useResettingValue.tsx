// Module ID: 12490
// Function ID: 96797
// Name: useResettingValue
// Dependencies: [57, 31, 5450, 4015, 2]
// Exports: default

// Module 12490 (useResettingValue)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ useState: closure_4, useCallback: closure_5, useEffect: closure_6 } = result);
result = require("useInitialValue").fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const tmp = callback(callback2(arg0), 2);
  const dependencyMap = tmp[1];
  const tmp2 = importDefault(5450)(() => {
    const timeout = new callback(4015).Timeout();
    return timeout;
  });
  callback = tmp2;
  const items = [tmp2];
  callback4(() => () => outer1_3.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = callback3((arg0) => {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      tmp2.start(closure_1, () => outer1_2(outer1_0));
    }
  }, items2);
  return items1;
};
