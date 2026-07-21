// Module ID: 1741
// Function ID: 19504
// Name: useFrameCallback
// Dependencies: []
// Exports: useFrameCallback

// Module 1741 (useFrameCallback)
const _module = require(dependencyMap[0]);
({ useEffect: closure_0, useRef: closure_1 } = _module);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult();

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  const tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  const obj = {
    setActive(isActive, arg1, self) {
      const result = closure_2.manageStateFrameCallback(tmp3.current.callbackId, isActive);
      tmp3.current.isActive = isActive;
    },
    isActive: tmp2,
    callbackId: -1
  };
  const tmp3 = tmp3(obj);
  const items = [fn, tmp2];
  fn(() => {
    tmp3.current.callbackId = closure_2.registerFrameCallback(arg0);
    const arg0 = tmp3.current;
    const current = tmp3.current;
    current.setActive(tmp3.current.isActive);
    return () => {
      const result = closure_2.unregisterFrameCallback(current.callbackId);
      current.callbackId = -1;
    };
  }, items);
  return tmp3.current;
};
