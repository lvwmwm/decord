// Module ID: 1789
// Function ID: 1790
// Dependencies: [32, 19, 1681, 1709]
// Exports: useSharedValue

// Module 1789
import runOnRuntime from "runOnRuntime" /* 1681 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);

export const useSharedValue = function useSharedValue(UNDETERMINED) {
  closure_0 = UNDETERMINED;
  const first = _slicedToArray(closure_4(() => runOnRuntime.makeMutable(closure_0)), 1)[0];
  const items = [first];
  closure_3(() => () => {
    closure_0(first[3]).cancelAnimation(closure_1_1);
  }, items);
  return first;
};
