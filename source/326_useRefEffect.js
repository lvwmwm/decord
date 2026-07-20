// Module ID: 326
// Function ID: 4903
// Name: useRefEffect
// Dependencies: []
// Exports: default

// Module 326 (useRefEffect)
const _module = require(dependencyMap[0]);
({ useCallback: closure_0, useRef: closure_1 } = _module);

export default function useRefEffect(arg0) {
  const callback = callback(undefined);
  const items = [arg0];
  return arg0((arg0) => {
    if (ref.current) {
      ref.current();
      ref.current = undefined;
    }
    if (null != arg0) {
      ref.current = arg0(arg0);
    }
  }, items);
};
