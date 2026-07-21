// Module ID: 5085
// Function ID: 43418
// Name: useBoundingClientRect
// Dependencies: []
// Exports: useBoundingClientRect

// Module 5085 (useBoundingClientRect)
const useLayoutEffect = require(dependencyMap[0]).useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (arg0) {
        if (arg0.current) {
          if (null === arg0.current.unstable_getBoundingClientRect) {
            if (null !== arg0.current.getBoundingClientRect) {
              const current2 = arg0.current;
              arg1(current2.getBoundingClientRect());
            }
          } else {
            const current = arg0.current;
            arg1(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};
