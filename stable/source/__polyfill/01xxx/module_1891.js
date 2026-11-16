// Module ID: 1891
// Function ID: 1892
// Dependencies: [32, 19, 1827, 1839]
// Exports: useSharedValue

// Module 1891
import startMapper from "startMapper" /* 1827 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export function useSharedValue(UNDETERMINED) {
  let closure_0 = UNDETERMINED;
  const first = _slicedToArray(closure_4(() => {
    let tmpResult = UNDETERMINED;
    if (typeof UNDETERMINED === "function") {
      tmpResult = tmp();
    }
    const obj = startMapper;
    return obj.makeMutable(tmpResult);
  }), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const obj = UNDETERMINED(first[3]);
    obj.cancelAnimation(closure_1_1);
  }, items);
  return first;
}
