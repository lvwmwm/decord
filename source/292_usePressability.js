// Module ID: 292
// Function ID: 4488
// Name: usePressability
// Dependencies: [31, 282]
// Exports: default

// Module 292 (usePressability)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);

export default function usePressability(arg0) {
  const importDefault = arg0;
  let tmp = callback2(null);
  if (tmp2) {
    let tmp5 = importDefault(current[1]);
    const prototype = tmp5.prototype;
    tmp5 = new tmp5(arg0);
    tmp.current = tmp5;
  }
  current = tmp.current;
  const items = [arg0, current];
  callback(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != current;
    }
    if (tmp) {
      current.configure(closure_0);
    }
  }, items);
  const items1 = [current];
  callback(() => null != current ? (() => {
    outer1_1.reset();
  }) : undefined, items1);
  let eventHandlers = null;
  if (null != current) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
};
