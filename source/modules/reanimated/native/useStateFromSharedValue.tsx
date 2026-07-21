// Module ID: 8270
// Function ID: 65269
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useDerivedStateFromSharedValue

// Module 8270 (_createForOfIteratorHelperLoose)
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
function useListenerSubscription(activeIndex, closure_3) {
  closure_3 = activeIndex;
  const dependencyMap = closure_3;
  const items = [activeIndex, closure_3];
  const layoutEffect = React.useLayoutEffect(() => {
    let value = store.get(arg0);
    if (null == value) {
      value = function createListenerState(sharedValue) {
        const set = new Set();
        const value = set;
        const sum = sum + 1;
        return {
          sharedValue,
          listeners: set,
          valueListener(arg0) {
            arg0(closure_1[2]).batchUpdates(() => {
              let done;
              const tmp = callback(arg0);
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
      }(arg0);
    }
    const arg0 = value;
    const listeners = value.listeners;
    listeners.add(arg1);
    if (1 === value.listeners.size) {
      const result = store.set(arg0, value);
      let obj = arg0(arg1[3]);
      const fn = function s(arg0, arg1, addListener) {
        const value = arg1;
        addListener.addListener(arg0, (arg0) => arg1(closure_1[3]).runOnJS(arg1)(arg0));
      };
      obj = { runOnJS: arg0(arg1[3]).runOnJS };
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = closure_6;
      obj.runOnUI(fn)(value.listenerId, value.valueListener, arg0);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(closure_1);
      if (0 === value.listeners.size) {
        const fn = function r(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = closure_7;
        value(closure_1[3]).runOnUI(fn)(value.listenerId, value);
        set.delete(value);
        const obj = value(closure_1[3]);
      }
    };
  }, items);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(activeIndex) {
  const arg1 = activeIndex;
  const tmp = callback(React.useState(() => arg0.get()), 2);
  useListenerSubscription(activeIndex, tmp[1]);
  return tmp[0];
};
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, arg1) {
  arg1 = activeIndex;
  const dependencyMap = arg1;
  const tmp = callback(React.useState(() => arg1(arg0.get(), undefined)), 2);
  const callback = tmp[1];
  const React = React.useRef(arg1);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_3.current = arg1;
  });
  useListenerSubscription(activeIndex, React.useCallback((arg0) => callback((arg0) => ref.current(arg0, arg0)), []));
  return tmp[0];
};
