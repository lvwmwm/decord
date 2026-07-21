// Module ID: 5183
// Function ID: 43986
// Name: useUnmountFlag
// Dependencies: []
// Exports: useUnmountFlag

// Module 5183 (useUnmountFlag)
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
