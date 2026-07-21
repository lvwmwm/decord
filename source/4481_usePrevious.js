// Module ID: 4481
// Function ID: 39560
// Name: usePrevious
// Dependencies: []
// Exports: usePrevious

// Module 4481 (usePrevious)
const _module = require(dependencyMap[0]);
({ useEffect: closure_0, useRef: closure_1 } = _module);

export const usePrevious = function usePrevious(arg0) {
  const tmp = tmp(undefined);
  arg0(() => {
    tmp.current = arg0;
  });
  return tmp.current;
};
