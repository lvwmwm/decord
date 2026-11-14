// Module ID: 1908
// Function ID: 1909
// Name: react
// Dependencies: [19, 1909]
// Exports: useFrameCallback

// Module 1908 (react)
import FrameCallbackRegistryJSDefault from "FrameCallbackRegistryJS" /* 1909 */;
import react from "react" /* 19 */;

let _window;
let map;
({ useEffect: _window, useRef: map } = react);
let closure_2 = new FrameCallbackRegistryJSDefault();
new FrameCallbackRegistryJSDefault();

export function useFrameCallback(ConjureDitherAndroidTsx1, flag) {
  let closure_0 = ConjureDitherAndroidTsx1;
  if (flag === undefined) {
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
  const items = [ConjureDitherAndroidTsx1, flag];
  closure_0(() => {
    let closure_129_0;
    let current;
    closure_1.current.callbackId = closure_2.registerFrameCallback(ConjureDitherAndroidTsx1);
    ({ current: closure_129_0, current } = closure_1);
    current.setActive(closure_1.current.isActive);
    return () => {
      const result = closure_2_2.unregisterFrameCallback(callbackId.callbackId);
      callbackId.callbackId = -1;
    };
  }, items);
  return tmp.current;
}
