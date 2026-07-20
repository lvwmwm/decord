// Module ID: 5182
// Function ID: 43938
// Name: useUnmountFlag
// Dependencies: []
// Exports: useUnmountFlag

// Module 5182 (useUnmountFlag)
const _module = require(dependencyMap[0]);
({ useRef: closure_0, useLayoutEffect: closure_1 } = _module);

export const useUnmountFlag = function useUnmountFlag() {
  const tmp = tmp(false);
  callback(() => {
    tmp.current = false;
    return () => {
      closure_0.current = true;
    };
  }, []);
  return tmp;
};
