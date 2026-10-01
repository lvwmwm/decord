// Module ID: 1790
// Function ID: 1791
// Dependencies: [32, 19, 1682, 1710]
// Exports: useSharedValue

// Module 1790
import startMapper from "startMapper" /* 1682 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export const useSharedValue = function useSharedValue(UNDETERMINED) {
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
};
