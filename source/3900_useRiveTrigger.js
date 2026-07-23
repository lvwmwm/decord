// Module ID: 3900
// Function ID: 32256
// Name: useRiveTrigger
// Dependencies: [57, 31, 3895]
// Exports: useRiveTrigger

// Module 3900 (useRiveTrigger)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ useCallback: closure_3, useEffect: closure_4, useRef: closure_5, useState: closure_6 } = result);

export const useRiveTrigger = function useRiveTrigger(startAnimation, instance, arg2) {
  let obj = arg2;
  const _require = startAnimation;
  const dependencyMap = instance;
  if (null == arg2) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  let tmp = disposableMemo(undefined);
  const callback = tmp;
  const tmp2 = disposableMemo(false);
  const callback2 = tmp2;
  const tmp3 = disposableMemo(onTrigger);
  const callback3 = tmp3;
  tmp3.current = onTrigger;
  const items = [instance, startAnimation];
  disposableMemo = _require(3895).useDisposableMemo(() => {
    if (instance) {
      return instance.triggerProperty(closure_0);
    }
  }, (dispose) => {
    let disposeResult;
    if (null != dispose) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  if (tmp.current) {
    tmp2.current = true;
  }
  const tmp5 = callback(callback4(null), 2);
  callback4 = tmp5[1];
  const items1 = [startAnimation, instance];
  callback3(() => {
    callback(null);
  }, items1);
  const items2 = [instance, disposableMemo, startAnimation];
  callback3(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + closure_0 + "\" not found in the ViewModel instance");
      callback(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  callback3(() => {
    if (disposableMemo) {
      let closure_0 = disposableMemo.addListener(() => {
        if (null != outer1_4.current) {
          outer1_4.current();
        }
      });
      return () => {
        callback();
      };
    }
  }, items3);
  obj = {
    trigger: callback2(() => {
      if (tmp.current) {
        const current = tmp.current;
        current.trigger();
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        if (globalThis.current) {
          warn(concat(tmp3, "') called after dispose. The property has been cleaned up \u2014 this is likely a stale closure from an async callback that fired after unmount."));
        } else {
          warn(concat(tmp3, "') called but the property is not available yet. The viewModelInstance may still be loading."));
        }
      }
    }, items4),
    error: tmp5[0]
  };
  items4 = [startAnimation];
  return obj;
};
