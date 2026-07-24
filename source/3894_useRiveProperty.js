// Module ID: 3894
// Function ID: 32230
// Name: useRiveProperty
// Dependencies: [57, 31, 3895]
// Exports: useRiveProperty

// Module 3894 (useRiveProperty)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ useCallback: closure_3, useEffect: closure_4, useRef: closure_5, useState: closure_6 } = result);

export const useRiveProperty = function useRiveProperty(instance, FillColor, getBooleanProperty) {
  const _require = instance;
  const dependencyMap = FillColor;
  const callback = getBooleanProperty;
  let tmp = first(undefined);
  const callback2 = tmp;
  const items = [instance, FillColor];
  const disposableMemo = _require(3895).useDisposableMemo(() => {
    if (closure_0) {
      return getBooleanProperty(closure_0, closure_1);
    }
  }, (dispose) => {
    let disposeResult;
    if (null != dispose) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  const tmp3 = callback(callback3(undefined), 2);
  first = tmp3[0];
  callback3 = tmp3[1];
  const tmp5 = callback(callback3(null), 2);
  let closure_7 = tmp5[1];
  const items1 = [FillColor, instance];
  disposableMemo(() => {
    callback2(null);
  }, items1);
  const items2 = [instance, disposableMemo, FillColor];
  disposableMemo(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + closure_1 + "\" not found in the ViewModel instance");
      callback2(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  disposableMemo(() => {
    if (disposableMemo) {
      callback(disposableMemo.value);
      let closure_0 = disposableMemo.addListener((arg0) => {
        outer1_6(arg0);
      });
      return () => {
        callback();
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    callback2((arg0) => {
      const current = tmp.current;
      if (current) {
        tmp = arg0;
        if ("function" === typeof arg0) {
          tmp = arg0(first);
        }
        current.value = tmp;
      }
    }, items4),
    tmp5[0],
    disposableMemo
  ];
  return items5;
};
