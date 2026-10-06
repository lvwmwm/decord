// Module ID: 6298
// Function ID: 6299
// Name: react
// Dependencies: [19, 6142]
// Exports: useBoundingClientRect

// Module 6298 (react)
import react from "react" /* 19 */;
import _mod6142 from "module_6142" /* 6142 */;

const useLayoutEffect = react.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod6142;
  if (obj.isFabricInstalled()) {
    const tmp = useLayoutEffect;
    useLayoutEffect(() => {
      if (ref) {
        if (ref.current) {
          if (typeof ref.current.unstable_getBoundingClientRect !== "function") {
            if (typeof ref.current.getBoundingClientRect === "function") {
              const current2 = tmp.current;
              closure_1(current2.getBoundingClientRect());
            }
          } else {
            const current = tmp.current;
            closure_1(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};
