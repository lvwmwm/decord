// Module ID: 292
// Function ID: 4488
// Name: usePressability
// Dependencies: []
// Exports: default

// Module 292 (usePressability)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);

export default function usePressability(arg0) {
  const importDefault = arg0;
  const tmp = callback2(null);
  if (tmp2) {
    let tmp5 = importDefault(dependencyMap[1]);
    const prototype = tmp5.prototype;
    tmp5 = new tmp5(arg0);
    tmp.current = tmp5;
  }
  const current = tmp.current;
  const dependencyMap = current;
  const items = [arg0, current];
  callback(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null != current;
    }
    if (tmp) {
      current.configure(arg0);
    }
  }, items);
  const items1 = [current];
  callback(() => null != current ? () => {
    navigation.reset();
  } : undefined, items1);
  let eventHandlers = null;
  if (null != current) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
};
