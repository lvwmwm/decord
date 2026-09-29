// Module ID: 7176
// Function ID: 7177
// Dependencies: [7131, 19]
// Exports: useUnmountAwareAnimationFrame, useUnmountAwareTimeout

// Module 7176
import _slicedToArray from "module_7131" /* 7131 */;

const noop = fn(19);
({ useCallback: c2, useEffect: c3, useState: closure_4 } = noop);

export const useUnmountAwareTimeout = function useUnmountAwareTimeout() {
  const first = _slicedToArray(closure_4(() => new Set()), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const item = set.forEach((item) => closure_1_0.clearTimeout(item));
    set.clear();
  }, items);
  const obj = { setTimeout: null };
  const items1 = [first];
  obj.setTimeout = closure_2((arg0, arg1) => {
    const timerId = first.setTimeout(() => {
      first.delete(timerId);
      closure_0();
    }, arg1);
    arg0.add(timerId);
  }, items1);
  return obj;
};
export const useUnmountAwareAnimationFrame = function useUnmountAwareAnimationFrame() {
  const first = _slicedToArray(closure_4(() => new Set()), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const item = set.forEach((item) => cancelAnimationFrame(item));
    set.clear();
  }, items);
  const obj = { requestAnimationFrame: null };
  const items1 = [first];
  obj.requestAnimationFrame = closure_2((arg0) => {
    const animationFrame = first.requestAnimationFrame((arg0) => {
      first.delete(animationFrame);
      closure_0(arg0);
    });
    arg0.add(animationFrame);
  }, items1);
  return obj;
};
