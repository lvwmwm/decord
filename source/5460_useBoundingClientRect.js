// Module ID: 5460
// Function ID: 5461
// Name: useBoundingClientRect
// Dependencies: [19, 5363]
// Exports: useBoundingClientRect

// Module 5460 (useBoundingClientRect)
import { useLayoutEffect } from "noop";


export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (tmp.current) {
          if (typeof tmp.current.unstable_getBoundingClientRect !== "function") {
            if (typeof tmp.current.getBoundingClientRect === "function") {
              const current2 = tmp.current;
              callback(current2.getBoundingClientRect());
            }
          } else {
            const current = tmp.current;
            callback(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};
