// Module ID: 5408
// Function ID: 46384
// Name: useUnmountAwareTimeout
// Dependencies: [5359, 31]
// Exports: useUnmountAwareAnimationFrame, useUnmountAwareTimeout

// Module 5408 (useUnmountAwareTimeout)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_2;
let closure_3;
let closure_4;
({ useCallback: closure_2, useEffect: closure_3, useState: closure_4 } = result);

export const useUnmountAwareTimeout = function useUnmountAwareTimeout() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const items = [first];
  callback3(() => () => {
    const item = outer1_0.forEach((arg0) => first.clearTimeout(arg0));
    outer1_0.clear();
  }, items);
  const items1 = [first];
  return {
    setTimeout: callback2((arg0, arg1) => {
      const timerId = first.setTimeout(() => {
        set.delete(timerId);
        set();
      }, arg1);
      arg0.add(timerId);
    }, items1)
  };
};
export const useUnmountAwareAnimationFrame = function useUnmountAwareAnimationFrame() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const items = [first];
  callback3(() => () => {
    const item = outer1_0.forEach((closure_0) => cancelAnimationFrame(closure_0));
    outer1_0.clear();
  }, items);
  const items1 = [first];
  return {
    requestAnimationFrame: callback2((arg0) => {
      const animationFrame = first.requestAnimationFrame((arg0) => {
        set.delete(animationFrame);
        set(arg0);
      });
      arg0.add(animationFrame);
    }, items1)
  };
};
