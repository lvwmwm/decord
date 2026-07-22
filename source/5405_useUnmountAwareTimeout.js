// Module ID: 5405
// Function ID: 46360
// Name: useUnmountAwareTimeout
// Dependencies: []
// Exports: useUnmountAwareAnimationFrame, useUnmountAwareTimeout

// Module 5405 (useUnmountAwareTimeout)
let closure_1 = importDefault(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));

export const useUnmountAwareTimeout = function useUnmountAwareTimeout() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const global = first;
  const items = [first];
  callback3(() => () => {
    const item = closure_0.forEach((arg0) => closure_0.clearTimeout(arg0));
    closure_0.clear();
  }, items);
  const items1 = [first];
  return {
    setTimeout: callback2((arg0, arg1) => {
      const first = arg0;
      const timerId = first.setTimeout(() => {
        arg0.delete(timerId);
        arg0();
      }, arg1);
      first.add(timerId);
    }, items1)
  };
};
export const useUnmountAwareAnimationFrame = function useUnmountAwareAnimationFrame() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const global = first;
  const items = [first];
  callback3(() => () => {
    const item = closure_0.forEach((_animationFrame) => cancelAnimationFrame(_animationFrame));
    closure_0.clear();
  }, items);
  const items1 = [first];
  return {
    requestAnimationFrame: callback2((arg0) => {
      const first = arg0;
      const animationFrame = first.requestAnimationFrame((arg0) => {
        arg0.delete(animationFrame);
        arg0(arg0);
      });
      first.add(animationFrame);
    }, items1)
  };
};
