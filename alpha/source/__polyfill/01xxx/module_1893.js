// Module ID: 1893
// Function ID: 1894
// Dependencies: [32, 19, 1829, 1841]
// Exports: useSharedValue

// Module 1893
import startMapper from "startMapper" /* 1829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export function useSharedValue(point) {
  let closure_0 = point;
  const first = _slicedToArray(closure_4(() => {
    let tmpResult = point;
    if (typeof point === "function") {
      tmpResult = tmp();
    }
    const obj = startMapper;
    return obj.makeMutable(tmpResult);
  }), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const obj = point(first[3]);
    obj.cancelAnimation(closure_1_1);
  }, items);
  return first;
}
