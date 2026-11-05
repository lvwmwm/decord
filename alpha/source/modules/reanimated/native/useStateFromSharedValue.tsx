// Module ID: 8987
// Function ID: 8988
// Name: useStateFromSharedValue
// Dependencies: [32, 19, 1259, 1705, 2]
// Exports: default, useDerivedStateFromSharedValue

// Module 8987 (useStateFromSharedValue)
import _mod1705 from "module_1705" /* 1705 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let sum;

let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "(function useStateFromSharedValueTsx1(id,listener,sharedValue){let[scheduleOnRN]=this.__closure;sharedValue.addListener(id,function(value){return scheduleOnRN(listener,value);});})" };
let closure_7 = { code: "(function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);})" };
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  const tmp = _slicedToArray(react.useState(() => closure_0.get()), 2);
  let closure_0 = arg0;
  let closure_1 = tmp3;
  const items = [arg0, tmp[1]];
  const first = tmp[0];
  const layoutEffect = react.useLayoutEffect(function() {
    let tmp10;
    let tmp9;
    let obj = map;
    let tmp = activeIndex;
    let value = map.get(activeIndex);
    if (value == null) {
      const tmp3 = globalThis;
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
      const tmp18 = activeIndex(callback[3]);
      let items = [closure_1_6, ];
      const scheduleOnUI = tmp18.scheduleOnUI;
      items[1] = activeIndex(callback[3]).scheduleOnRN;
      let c0;
      [tmp9, tmp10] = items;
      function useStateFromSharedValueTsx1(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => c0(closure_0, arg0));
      }
      const items1 = [tmp10];
      useStateFromSharedValueTsx1.__closure = items1;
      useStateFromSharedValueTsx1.__workletHash = 17232455290583;
      useStateFromSharedValueTsx1.__initData = tmp9;
      scheduleOnUI(useStateFromSharedValueTsx1, value.listenerId, value.valueListener, tmp);
    }
    return () => {
      let tmp3;
      const listeners = value.listeners;
      listeners.delete(callback);
      const tmp = value;
      if (0 === value.listeners.size) {
        const items = [closure_7];
        [tmp3] = items;
        function useStateFromSharedValueTsx2(arg0, removeListener) {
          removeListener.removeListener(arg0);
        }
        useStateFromSharedValueTsx2.__workletHash = 7876346397934;
        useStateFromSharedValueTsx2.__initData = tmp3;
        const obj = _mod1705;
        obj.scheduleOnUI(useStateFromSharedValueTsx2, tmp.listenerId, activeIndex);
        map.delete(activeIndex);
      }
    };
  }, items);
  return first;
};
export function useDerivedStateFromSharedValue(activeIndex, set) {
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
    return closure_2((items1) => ref.current(closure_0, items1));
  }, []);
  let items = [activeIndex, callback];
  const layoutEffect1 = react.useLayoutEffect(function() {
    let tmp10;
    let tmp9;
    let obj = map;
    let tmp = activeIndex;
    let value = map.get(activeIndex);
    if (value == null) {
      const tmp3 = globalThis;
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
      const tmp18 = activeIndex(callback[3]);
      let items = [closure_1_6, ];
      const scheduleOnUI = tmp18.scheduleOnUI;
      items[1] = activeIndex(callback[3]).scheduleOnRN;
      let c0;
      [tmp9, tmp10] = items;
      function useStateFromSharedValueTsx1(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => c0(closure_0, arg0));
      }
      const items1 = [tmp10];
      useStateFromSharedValueTsx1.__closure = items1;
      useStateFromSharedValueTsx1.__workletHash = 17232455290583;
      useStateFromSharedValueTsx1.__initData = tmp9;
      scheduleOnUI(useStateFromSharedValueTsx1, value.listenerId, value.valueListener, tmp);
    }
    return () => {
      let tmp3;
      const listeners = value.listeners;
      listeners.delete(callback);
      const tmp = value;
      if (0 === value.listeners.size) {
        const items = [closure_7];
        [tmp3] = items;
        function useStateFromSharedValueTsx2(arg0, removeListener) {
          removeListener.removeListener(arg0);
        }
        useStateFromSharedValueTsx2.__workletHash = 7876346397934;
        useStateFromSharedValueTsx2.__initData = tmp3;
        const obj = _mod1705;
        obj.scheduleOnUI(useStateFromSharedValueTsx2, tmp.listenerId, activeIndex);
        map.delete(activeIndex);
      }
    };
  }, items);
  return tmp2;
}
