// Module ID: 3898
// Function ID: 32244
// Name: useRiveTrigger
// Dependencies: []
// Exports: useRiveTrigger

// Module 3898 (useRiveTrigger)
let closure_2 = importDefault(dependencyMap[0]);
({ useCallback: closure_3, useEffect: closure_4, useRef: closure_5, useState: closure_6 } = arg1(dependencyMap[1]));

export const useRiveTrigger = function useRiveTrigger(startAnimation, instance, arg2) {
  let obj = arg2;
  instance = startAnimation;
  const dependencyMap = instance;
  if (null == arg2) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  const tmp = disposableMemo(undefined);
  const callback = tmp;
  const tmp2 = disposableMemo(false);
  const tmp3 = disposableMemo(onTrigger);
  tmp3.current = onTrigger;
  const items = [instance, startAnimation];
  const disposableMemo = instance(dependencyMap[2]).useDisposableMemo(() => {
    if (arg1) {
      return arg1.triggerProperty(arg0);
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
  const tmp5 = callback(callback2(null), 2);
  const callback2 = tmp5[1];
  const items1 = [startAnimation, instance];
  tmp3(() => {
    callback(null);
  }, items1);
  const items2 = [instance, disposableMemo, startAnimation];
  tmp3(() => {
    let tmp = arg1;
    if (arg1) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + arg0 + "\" not found in the ViewModel instance");
      callback(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  tmp3(() => {
    if (disposableMemo) {
      let closure_0 = disposableMemo.addListener(() => {
        if (null != ref.current) {
          ref.current();
        }
      });
      return () => {
        callback();
      };
    }
  }, items3);
  obj = {
    trigger: tmp2(() => {
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
  const items4 = [startAnimation];
  return obj;
};
