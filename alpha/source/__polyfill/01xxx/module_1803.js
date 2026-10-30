// Module ID: 1803
// Function ID: 1804
// Dependencies: [32, 19, 1695, 1723]
// Exports: useSharedValue

// Module 1803
import startMapper from "startMapper" /* 1695 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export function useSharedValue(UNDETERMINED) {
  let closure_0 = UNDETERMINED;
  const first = _slicedToArray(closure_4(() => {
    const obj = startMapper;
    return obj.makeMutable(UNDETERMINED);
  }), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const obj = UNDETERMINED(first[3]);
    obj.cancelAnimation(closure_1_1);
  }, items);
  return first;
}
