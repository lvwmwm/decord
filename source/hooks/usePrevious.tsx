// Module ID: 8276
// Function ID: 65340
// Name: usePrevious
// Dependencies: []
// Exports: default, usePreviousWhen

// Module 8276 (usePrevious)
const _module = require(dependencyMap[0]);
({ useRef: closure_0, useEffect: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(arg0) {
  const tmp = arg0(null);
  const items = [arg0];
  tmp(() => {
    tmp.current = arg0;
  }, items);
  return tmp.current;
};
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const shouldUpdate = value.shouldUpdate;
  const tmp = value(null);
  const items = [value, shouldUpdate];
  shouldUpdate(() => {
    if (shouldUpdate) {
      tmp.current = value;
    }
  }, items);
  return tmp.current;
};
