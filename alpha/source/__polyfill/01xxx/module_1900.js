// Module ID: 1900
// Function ID: 1901
// Dependencies: [19, 1901, 1708]
// Exports: useHandler

// Module 1900
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export function useHandler(ChannelListLegendListTsx1, items26) {
  let prevHandlers;
  _require = ChannelListLegendListTsx1;
  const tmp = closure_3(null);
  if (null === tmp.current) {
    tmp.current = { context: "disabled", prevHandlers: "isArray" };
  }
  const current = tmp.current;
  let obj = require("module_1901");
  const tmp2 = !obj.areWorkletHandlersEqual(ChannelListLegendListTsx1, current.prevHandlers);
  closure_2(() => {
    current.prevHandlers = prevHandlers;
  });
  const obj2 = { doDependenciesDiffer: tmp2 };
  Object.defineProperty(obj2, "context", {
    get: () => {
      if (undefined === current.context) {
        const obj = require("module_1708");
        current.context = obj.makeShareable({});
      }
      return current.context;
    },
    set: undefined
  });
  return obj2;
}
