// Module ID: 12540
// Function ID: 12541
// Name: useEntranceAnimation
// Dependencies: [32, 19, 1177, 560, 1248, 4837, 4566, 2]
// Exports: useEntranceAnimation

// Module 12540 (useEntranceAnimation)
import native from "native" /* 1177 */;
import react_native from "react-native" /* 1248 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
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
let obj2 = module_560.create(() => ({ isComplete: false }));
let closure_7 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_8 = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj2;
export const useEntranceAnimation = function useEntranceAnimation(entranceAnimationDriver) {
  let incrementLoads;
  let tmp2;
  let tmp = incrementLoads(react.useState(0), 2);
  [tmp2, dependencyMap] = tmp;
  incrementLoads = react.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  const items = [entranceAnimationDriver];
  const items1 = [incrementLoads, entranceAnimationDriver];
  const handleLoadStart = react.useCallback(() => {
    let state;
    obj = react_native;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      obj = entranceAnimationDriver(closure_1_1[6]);
      obj.runOnJS(closure_1_6)({ isComplete: true });
    };
    set = entranceAnimationDriver.set;
    obj2 = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
    fn.__workletHash = 7427534745615;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState });
    const result = set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
  }, items);
  const handleError = react.useCallback(() => {
    let state;
    const tmp = entranceAnimationDriver;
    if (1 !== entranceAnimationDriver.get()) {
      obj = react_native;
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      set = tmp.set;
      const fn = function t() {
        obj = entranceAnimationDriver(dependencyMap[6]);
        obj.runOnJS(setUseEntranceAnimationState)({ isComplete: true });
        obj2 = entranceAnimationDriver(dependencyMap[6]);
        obj2.runOnJS(incrementLoads)();
      };
      const tmp7 = timing;
      obj2 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
      const withTiming = tmp7.withTiming;
      fn.__closure = obj2;
      fn.__workletHash = 9904090637386;
      fn.__initData = __initData2;
      const result = set(withTiming(1, obj, "respect-motion-settings", fn));
    } else {
      incrementLoads();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};
