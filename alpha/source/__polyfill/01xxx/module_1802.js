// Module ID: 1802
// Function ID: 1803
// Dependencies: [32, 19, 1694, 1722]
// Exports: useSharedValue

// Module 1802
import startMapper from "startMapper" /* 1694 */;
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
