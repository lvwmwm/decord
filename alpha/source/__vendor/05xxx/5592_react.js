// Module ID: 5592
// Function ID: 5593
// Name: react
// Dependencies: [19, 5425]
// Exports: useBoundingClientRect

// Module 5592 (react)
import react from "react" /* 19 */;
import _mod5425 from "module_5425" /* 5425 */;

const useLayoutEffect = react.useLayoutEffect;

export function useBoundingClientRect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod5425;
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
}
