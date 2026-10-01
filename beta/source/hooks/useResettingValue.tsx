// Module ID: 13101
// Function ID: 13102
// Name: useResettingValue
// Dependencies: [32, 19, 5910, 2040, 2]
// Exports: default

// Module 13101 (useResettingValue)
import reactDefault from "react" /* 5910 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useState: closure_4, useCallback: hasOwnProperty, useEffect: metroRequire } = react);
const result = size.fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  let closure_1;
  let closure_2;
  let closure_3;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  [first, dependencyMap] = closure_4(arg0);
  const tmp3 = reactDefault(() => {
    const timeout = new closure_0(closure_2[3]).Timeout();
    return timeout;
  });
  _slicedToArray = tmp3;
  const items = [tmp3];
  closure_6(() => () => closure_1_3.stop(), items);
  const items1 = [first, ];
  const items2 = [arg1, arg0, tmp3];
  items1[1] = closure_5((arg0) => {
    closure_2(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => closure_1_2(closure_1_0));
    }
  }, items2);
  return items1;
};
