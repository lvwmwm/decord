// Module ID: 1897
// Function ID: 1898
// Dependencies: [19, 1898, 1705]
// Exports: useHandler

// Module 1897
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export function useHandler(memoizedGestureCallbacks, items26) {
  let prevHandlers;
  _require = memoizedGestureCallbacks;
  const tmp = closure_3(null);
  if (null === tmp.current) {
    tmp.current = { context: "Array", prevHandlers: "flexDirection" };
  }
  const current = tmp.current;
  let obj = require("module_1898");
  const tmp2 = !obj.areWorkletHandlersEqual(memoizedGestureCallbacks, current.prevHandlers);
  closure_2(() => {
    current.prevHandlers = prevHandlers;
  });
  const obj2 = { doDependenciesDiffer: tmp2 };
  Object.defineProperty(obj2, "context", {
    get: () => {
      if (undefined === current.context) {
        const obj = require("module_1705");
        current.context = obj.makeShareable({});
      }
      return current.context;
    },
    set: undefined
  });
  return obj2;
}
