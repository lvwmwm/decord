// Module ID: 15560
// Function ID: 118743
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useLockedWebView

// Module 15560 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activities/panel/native/useActivityWebViewLockManager.tsx");

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
          let callback;
          let iter2;
          let tmp4;
          let tmp5;
          const tmp = callback(closure_2);
          let iter = tmp();
          if (!iter.done) {
            do {
              let tmp2 = closure_2;
              let tmp3 = closure_2(iter.value, 2);
              [tmp4, tmp5] = tmp3;
              callback = tmp5.callback;
              let tmp6 = closure_3;
              let tmp7 = closure_3(tmp4);
              if (tmp7 !== tmp5.canRender) {
                let tmp8 = closure_2;
                let obj = { canRender: tmp7, callback };
                let result = closure_2.set(tmp4, obj);
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
      const id = getCanRender.useId();
      const tmp2 = map(getCanRender.useState(() => callback(id)), 2);
      const items = [id];
      const insertionEffect = getCanRender.useInsertionEffect(() => {
        tmp3.add(id);
        const result = closure_2.set(id, { callback: tmp3, canRender: callback(id) });
        return () => {
          set.delete(closure_0);
          set2.delete(closure_0);
        };
      }, items);
      const items1 = [id, tmp2[1]];
      const layoutEffect = getCanRender.useLayoutEffect(() => {
        callback2();
        return () => {
          callback();
        };
      }, items1);
      return tmp2[0];
    };
  })[0];
};
export const useLockedWebView = function useLockedWebView(transitionState) {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const shown = arg1(dependencyMap[2]).useSharedValue(false);
  const dependencyMap = shown;
  const renderWebView = React.useContext(transitionState.context).useActivityWebViewLock();
  let closure_2 = renderWebView;
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
