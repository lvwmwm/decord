// Module ID: 5308
// Function ID: 45819
// Name: useBoundingClientRect
// Dependencies: [31, 5212]
// Exports: useBoundingClientRect

// Module 5308 (useBoundingClientRect)
import { useLayoutEffect } from "result";


export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (closure_0.current) {
          if (null === closure_0.current.unstable_getBoundingClientRect) {
            if (null !== closure_0.current.getBoundingClientRect) {
              const current2 = closure_0.current;
              callback(current2.getBoundingClientRect());
            }
          } else {
            const current = closure_0.current;
            callback(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};
