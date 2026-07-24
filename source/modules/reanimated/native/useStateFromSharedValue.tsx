// Module ID: 8321
// Function ID: 65546
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 682, 3991, 2]
// Exports: default, useDerivedStateFromSharedValue

// Module 8321 (_createForOfIteratorHelperLoose)
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
function useListenerSubscription(activeIndex, result) {
  let closure_0 = activeIndex;
  let closure_1 = result;
  const items = [activeIndex, result];
  const layoutEffect = React.useLayoutEffect(() => {
    let value = outer1_5.get(activeIndex);
    if (null == value) {
      value = (function createListenerState(closure_0) {
        const set = new Set();
        const sum = outer2_4 + 1;
        outer2_4 = sum;
        return {
          sharedValue: closure_0,
          listeners: set,
          valueListener(arg0) {
            arg0(table[2]).batchUpdates(() => {
              let done;
              const tmp = outer4_8(closure_0);
              let iter = tmp();
              if (!iter.done) {
                do {
                  let tmp2 = closure_0;
                  let valueResult = iter.value(closure_0);
                  let iter2 = tmp();
                  iter = iter2;
                  done = iter2.done;
                } while (!done);
              }
            });
          },
          listenerId: sum
        };
      })(activeIndex);
    }
    activeIndex = value;
    let listeners = value.listeners;
    listeners.add(dependencyMap);
    if (1 === value.listeners.size) {
      const result = outer1_5.set(activeIndex, value);
      let obj = activeIndex(3991);
      let fn = function s(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => callback(table[3]).runOnJS(callback)(arg0));
      };
      obj = { runOnJS: activeIndex(3991).runOnJS };
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = outer1_6;
      obj.runOnUI(fn)(value.listenerId, value.valueListener, activeIndex);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(outer1_1);
      if (0 === value.listeners.size) {
        const fn = function r(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = outer2_7;
        value(table[3]).runOnUI(fn)(value.listenerId, value);
        outer2_5.delete(value);
        const obj = value(table[3]);
      }
    };
  }, items);
}
let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
let result = require("batchUpdates").fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(activeIndex) {
  let closure_0 = activeIndex;
  const tmp = callback(React.useState(() => activeIndex.get()), 2);
  useListenerSubscription(activeIndex, tmp[1]);
  return tmp[0];
};
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, arg1) {
  let closure_0 = activeIndex;
  let closure_1 = arg1;
  const tmp = callback(React.useState(() => callback(activeIndex.get(), undefined)), 2);
  callback = tmp[1];
  React = React.useRef(arg1);
  const layoutEffect = React.useLayoutEffect(() => {
    result.current = closure_1;
  });
  useListenerSubscription(activeIndex, React.useCallback((arg0) => {
    let closure_0 = arg0;
    return callback2((arg0) => outer1_3.current(closure_0, arg0));
  }, []));
  return tmp[0];
};
