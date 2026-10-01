// Module ID: 7715
// Function ID: 7716
// Name: useStateFromSharedValue
// Dependencies: [32, 19, 1248, 4566, 2]
// Exports: default, useDerivedStateFromSharedValue

// Module 7715 (useStateFromSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let sum;

let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  const tmp = _slicedToArray(react.useState(() => closure_0.get()), 2);
  let closure_0 = arg0;
  let closure_1 = tmp3;
  const items = [arg0, tmp[1]];
  const first = tmp[0];
  const layoutEffect = react.useLayoutEffect(function() {
    let obj = map;
    let tmp = activeIndex;
    let value = map.get(activeIndex);
    if (value == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            let closure_0 = arg0;
            const obj = set(closure_1_1[2]);
            obj.batchUpdates(() => {
              for (const item10005 of set) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: sum
      };
      sum = sum + 1;
      value = obj2;
    }
    activeIndex = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => {
          const obj = value(callback[3]);
          return obj.runOnJS(closure_0)(arg0);
        });
      };
      const obj3 = { runOnJS: activeIndex(callback[3]).runOnJS };
      const runOnUI = activeIndex(callback[3]).runOnUI;
      activeIndex(callback[3]);
      fn.__closure = obj3;
      fn.__workletHash = 568027628003;
      fn.__initData = __initData;
      runOnUI(fn)(value.listenerId, value.valueListener, tmp);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(callback);
      const tmp = value;
      if (0 === value.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = __initData;
        const obj = ReanimatedRexport;
        obj.runOnUI(fn)(tmp.listenerId, activeIndex);
        map.delete(activeIndex);
      }
    };
  }, items);
  return first;
};
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, set) {
  let closure_129_2;
  let tmp2;
  let closure_1 = set;
  let tmp = _slicedToArray(react.useState(() => current(closure_0.get(), undefined)), 2);
  [tmp2, closure_129_2] = tmp;
  let closure_3 = react.useRef(set);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_3.current = current;
  });
  const callback = react.useCallback((arg0) => {
    let ref;
    closure_0 = arg0;
    return closure_2((current) => ref.current(closure_0, current));
  }, []);
  const items = [activeIndex, callback];
  const layoutEffect1 = react.useLayoutEffect(function() {
    let obj = map;
    let tmp = activeIndex;
    let value = map.get(activeIndex);
    if (value == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            let closure_0 = arg0;
            const obj = set(closure_1_1[2]);
            obj.batchUpdates(() => {
              for (const item10005 of set) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: sum
      };
      sum = sum + 1;
      value = obj2;
    }
    activeIndex = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => {
          const obj = value(callback[3]);
          return obj.runOnJS(closure_0)(arg0);
        });
      };
      const obj3 = { runOnJS: activeIndex(callback[3]).runOnJS };
      const runOnUI = activeIndex(callback[3]).runOnUI;
      activeIndex(callback[3]);
      fn.__closure = obj3;
      fn.__workletHash = 568027628003;
      fn.__initData = __initData;
      runOnUI(fn)(value.listenerId, value.valueListener, tmp);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(callback);
      const tmp = value;
      if (0 === value.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = __initData;
        const obj = ReanimatedRexport;
        obj.runOnUI(fn)(tmp.listenerId, activeIndex);
        map.delete(activeIndex);
      }
    };
  }, items);
  return tmp2;
};
