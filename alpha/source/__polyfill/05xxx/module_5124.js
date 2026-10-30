// Module ID: 5124
// Function ID: 5125
// Dependencies: [32, 19, 5125]
// Exports: useRiveProperty

// Module 5124
import react2 from "react" /* 5125 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = react);

export function useRiveProperty(instance, device, f34157) {
  let closure_7;
  let first;
  let first1;
  let closure_0 = instance;
  let closure_1 = device;
  let closure_2 = f34157;
  let tmp = hasOwnProperty(undefined);
  let c3 = tmp;
  const items = [instance, device];
  const obj = react2;
  const disposableMemo = obj.useDisposableMemo(() => {
    if (closure_0) {
      return closure_2(tmp, closure_1);
    }
  }, (dispose) => {
    let disposeResult;
    if (dispose != null) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  [first, metroRequire] = metroRequire(undefined);
  [first1, closure_7] = metroRequire(null);
  const items1 = [device, instance];
  React3(() => {
    closure_7(null);
  }, items1);
  const items2 = [instance, disposableMemo, device];
  React3(function() {
    const tmp = closure_0 && !disposableMemo;
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Property \"" + closure_1 + "\" not found in the ViewModel instance");
      closure_7(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  React3(() => {
    if (disposableMemo) {
      closure_6(iter.value);
      closure_0 = iter.addListener((arg0) => {
        closure_1_6(arg0);
      });
      return () => {
        try {
          closure_0();
        } catch (err) {
        }
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    _false((fn) => {
      const current = ref.current;
      if (current) {
        let tmp2 = fn;
        if (typeof fn === "function") {
          tmp2 = fn(first);
        }
        current.value = tmp2;
      }
    }, items4),
    first1,
    disposableMemo
  ];
  return items5;
}
