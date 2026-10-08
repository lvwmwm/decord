// Module ID: 6477
// Function ID: 6478
// Name: react
// Dependencies: [19, 6321]
// Exports: useBoundingClientRect

// Module 6477 (react)
import react from "react" /* 19 */;
import _mod6321 from "module_6321" /* 6321 */;

const useLayoutEffect = react.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod6321;
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
