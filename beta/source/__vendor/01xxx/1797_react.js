// Module ID: 1797
// Function ID: 1798
// Name: react
// Dependencies: [19, 1798]
// Exports: useFrameCallback

// Module 1797 (react)
import _modDef1798 from "module_1798" /* 1798 */;
import react from "react" /* 19 */;

let _window;
let map;
({ useEffect: _window, useRef: map } = react);
let closure_2 = new _modDef1798();
new _modDef1798();

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  let closure_0 = fn;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let closure_1;
  const obj = {
    setActive(isActive) {
      const result = closure_2.manageStateFrameCallback(closure_1.current.callbackId, isActive);
      closure_1.current.isActive = isActive;
    },
    isActive: flag,
    callbackId: -1
  };
  const tmp = closure_1(obj);
  closure_1 = tmp;
  const items = [fn, flag];
  closure_0(() => {
    let closure_129_0;
    let current;
    closure_1.current.callbackId = closure_2.registerFrameCallback(fn);
    ({ current: closure_129_0, current } = closure_1);
    current.setActive(closure_1.current.isActive);
    return () => {
      const result = closure_2_2.unregisterFrameCallback(callbackId.callbackId);
      callbackId.callbackId = -1;
    };
  }, items);
  return tmp.current;
};
