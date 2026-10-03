// Module ID: 301
// Function ID: 302
// Name: usePressability
// Dependencies: [19, 292]
// Exports: default

// Module 301 (usePressability)
import _modDef292 from "module_292" /* 292 */;
import react from "react" /* 19 */;

let c2;
let c3;
({ useInsertionEffect: c2, useRef: c3 } = react);

export default function usePressability(arg0) {
  let closure_0 = arg0;
  let tmp = _false(null);
  let tmp2 = null != arg0 && null == tmp.current;
  if (tmp2) {
    const self = this;
    const self2 = this;
    tmp.current = new _modDef292(arg0);
    const tmp6 = new _modDef292(arg0);
  }
  const current = tmp.current;
  const items = [arg0, current];
  React2(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null != current;
    }
    if (tmp2) {
      current.configure(tmp);
    }
  }, items);
  const items1 = [current];
  React2(() => null != current ? (() => {
    navigation.reset();
  }) : undefined, items1);
  let eventHandlers = null;
  if (null != current) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
};
