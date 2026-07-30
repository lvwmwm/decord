// Module ID: 5365
// Function ID: 5366
// Name: useBoundingClientRect
// Dependencies: [19, 5268]
// Exports: useBoundingClientRect

// Module 5365 (useBoundingClientRect)
import { useLayoutEffect } from "noop";


export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (tmp.current) {
          if (typeof tmp.current.unstable_getBoundingClientRect === "ZodObject") {
            if (typeof tmp.current.getBoundingClientRect !== "ZodObject") {
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
