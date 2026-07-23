// Module ID: 15695
// Function ID: 121022
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 3991, 4476, 2]
// Exports: default, useLockedWebView

// Module 15695 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let result = require("module_3991").fileFinishedImporting("modules/activities/panel/native/useActivityWebViewLockManager.tsx");

export default function useActivityWebViewLockManager() {
  return React.useState(() => {
    function getCanRender(arg0) {
      let tmp = 0 === set.size;
      if (!tmp) {
        const iter2 = set.values().next();
        let value;
        if (null != iter2) {
          value = iter2.value;
        }
        tmp = value === arg0;
        const iter = set.values();
      }
      return tmp;
    }
    function queueRenderUpdate() {
      if (null == closure_0) {
        const resolved = Promise.resolve();
        closure_0 = resolved.then(() => {
          let iter2;
          let tmp4;
          let tmp5;
          const tmp = outer3_4(outer1_2);
          let iter = tmp();
          if (!iter.done) {
            do {
              let tmp2 = outer3_2;
              let tmp3 = outer3_2(iter.value, 2);
              [tmp4, tmp5] = tmp3;
              let callback = tmp5.callback;
              let tmp6 = outer1_3;
              let tmp7 = outer1_3(tmp4);
              if (tmp7 !== tmp5.canRender) {
                let tmp8 = outer1_2;
                let obj = { canRender: tmp7, callback };
                let result = outer1_2.set(tmp4, obj);
                let callbackResult = callback(tmp7);
              }
              iter2 = tmp();
              iter = iter2;
            } while (!iter2.done);
          }
          let closure_0;
        });
      }
    }
    const set = new Set();
    const map = new Map();
    return () => {
      const id = outer2_3.useId();
      const tmp2 = outer2_2(outer2_3.useState(() => outer1_3(id)), 2);
      const items = [id];
      const insertionEffect = outer2_3.useInsertionEffect(() => {
        tmp3.add(id);
        const result = outer1_2.set(id, { callback: tmp3, canRender: outer1_3(id) });
        return () => {
          set.delete(outer1_0);
          outer2_2.delete(outer1_0);
        };
      }, items);
      const items1 = [id, tmp2[1]];
      const layoutEffect = outer2_3.useLayoutEffect(() => {
        outer1_4();
        return () => {
          outer2_4();
        };
      }, items1);
      return tmp2[0];
    };
  })[0];
};
export const useLockedWebView = function useLockedWebView(transitionState) {
  transitionState = transitionState.transitionState;
  shown = transitionState(shown[2]).useSharedValue(false);
  const renderWebView = React.useContext(transitionState.context).useActivityWebViewLock();
  const items = [shown, transitionState, renderWebView];
  const effect = React.useEffect(() => {
    if (transitionState !== transitionState(shown[3]).TransitionStates.YEETED) {
      if (renderWebView) {
        const result = shown.set(true);
      }
    }
    const result1 = shown.set(false);
  }, items);
  return { shown, renderWebView };
};
