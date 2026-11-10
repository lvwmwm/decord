// Module ID: 15064
// Function ID: 15065
// Name: useEntranceAnimation
// Dependencies: [32, 19, 1187, 560, 1259, 5372, 1705, 2]
// Exports: useEntranceAnimation

// Module 15064 (useEntranceAnimation)
import native from "native" /* 1187 */;
import react_native from "react-native" /* 1259 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function setUseEntranceAnimationState(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(() => obj2.setState(closure_0));
}
let obj = { duration: 300, easing: native.STANDARD_EASING };
const obj2 = module_560.create(() => ({ isComplete: false }));
let closure_7 = { code: "(function useEntranceAnimationTsx1(){let[scheduleOnRN,setUseEntranceAnimationState]=this.__closure;scheduleOnRN(setUseEntranceAnimationState,{isComplete:true});})" };
let closure_8 = { code: "(function useEntranceAnimationTsx2(){let[scheduleOnRN,setUseEntranceAnimationState,incrementLoads]=this.__closure;scheduleOnRN(setUseEntranceAnimationState,{isComplete:true});scheduleOnRN(incrementLoads);})" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj2;
export function useEntranceAnimation(entranceAnimationDriver) {
  let callback;
  let tmp2;
  let tmp = callback(react.useState(0), 2);
  [tmp2, dependencyMap] = tmp;
  callback = react.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  let items = [entranceAnimationDriver];
  let items1 = [callback, entranceAnimationDriver];
  const handleLoadStart = react.useCallback(() => {
    let state;
    let tmp5;
    let tmp6;
    let tmp7;
    obj = react_native;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const items = [closure_7, , ];
    set = entranceAnimationDriver.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    items[1] = _mod1705.scheduleOnRN;
    items[2] = setUseEntranceAnimationState;
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items;
    function useEntranceAnimationTsx1() {
      _undefined(c1, { isComplete: true });
    }
    const items1 = [tmp6, tmp7];
    useEntranceAnimationTsx1.__closure = items1;
    useEntranceAnimationTsx1.__workletHash = 16107047177659;
    useEntranceAnimationTsx1.__initData = tmp5;
    const result = set(withTiming(1, obj, "respect-motion-settings", useEntranceAnimationTsx1));
  }, items);
  const handleError = react.useCallback(() => {
    let state;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    const tmp = entranceAnimationDriver;
    if (1 !== entranceAnimationDriver.get()) {
      obj = react_native;
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      set = tmp.set;
      const items = [closure_8, , , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = setUseEntranceAnimationState;
      items[3] = callback;
      let c0;
      let c1;
      let c2;
      [tmp13, tmp14, tmp15, tmp16] = items;
      function useEntranceAnimationTsx2() {
        _undefined(c1, { isComplete: true });
        _undefined(c2);
      }
      const items1 = [tmp14, tmp15, tmp16];
      useEntranceAnimationTsx2.__closure = items1;
      useEntranceAnimationTsx2.__workletHash = 8615314949238;
      useEntranceAnimationTsx2.__initData = tmp13;
      const result = set(withTiming(1, tmp8, "respect-motion-settings", useEntranceAnimationTsx2));
    } else {
      callback();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
}
