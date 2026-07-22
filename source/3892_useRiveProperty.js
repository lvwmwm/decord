// Module ID: 3892
// Function ID: 32224
// Name: useRiveProperty
// Dependencies: []
// Exports: useRiveProperty

// Module 3892 (useRiveProperty)
let closure_2 = importDefault(dependencyMap[0]);
({ useCallback: closure_3, useEffect: closure_4, useRef: closure_5, useState: closure_6 } = arg1(dependencyMap[1]));

export const useRiveProperty = function useRiveProperty(instance, FillColor, getBooleanProperty) {
  FillColor = instance;
  const dependencyMap = FillColor;
  const callback = getBooleanProperty;
  const tmp = first(undefined);
  const items = [instance, FillColor];
  const disposableMemo = FillColor(dependencyMap[2]).useDisposableMemo(() => {
    if (arg0) {
      return arg2(arg0, arg1);
    }
  }, (dispose) => {
    let disposeResult;
    if (null != dispose) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  const tmp3 = callback(callback2(undefined), 2);
  const first = tmp3[0];
  const callback2 = tmp3[1];
  const tmp5 = callback(callback2(null), 2);
  let closure_7 = tmp5[1];
  const items1 = [FillColor, instance];
  disposableMemo(() => {
    callback2(null);
  }, items1);
  const items2 = [instance, disposableMemo, FillColor];
  disposableMemo(() => {
    let tmp = arg0;
    if (arg0) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + arg1 + "\" not found in the ViewModel instance");
      callback2(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  disposableMemo(() => {
    if (disposableMemo) {
      callback(disposableMemo.value);
      let closure_0 = disposableMemo.addListener((arg0) => {
        callback2(arg0);
      });
      return () => {
        callback();
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    tmp((arg0) => {
      const current = tmp.current;
      if (current) {
        let tmp = arg0;
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
