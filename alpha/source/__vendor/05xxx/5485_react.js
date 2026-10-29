// Module ID: 5485
// Function ID: 5486
// Name: react
// Dependencies: [19, 5329]
// Exports: useBoundingClientRect

// Module 5485 (react)
import react from "react" /* 19 */;
import _mod5329 from "module_5329" /* 5329 */;

const useLayoutEffect = react.useLayoutEffect;

export function useBoundingClientRect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod5329;
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
