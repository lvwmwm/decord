// Module ID: 12281
// Function ID: 95920
// Name: setUseEntranceAnimationState
// Dependencies: [57, 31, 1273, 621, 682, 4131, 3991, 2]
// Exports: useEntranceAnimation

// Module 12281 (setUseEntranceAnimationState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import keys from "keys";

const require = arg1;
function setUseEntranceAnimationState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_5.setState(closure_0));
}
let obj = { duration: 300, easing: require("Button").STANDARD_EASING };
obj = keys.create(() => ({ isComplete: false }));
let closure_6 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_7 = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
let result = require("Button").fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj;
export const useEntranceAnimation = function useEntranceAnimation(entranceAnimationDriver) {
  let dependencyMap;
  let tmp2;
  let closure_0 = entranceAnimationDriver;
  [tmp2, dependencyMap] = callback(React.useState(0), 2);
  callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
  }, []);
  const items = [entranceAnimationDriver];
  const items1 = [callback, entranceAnimationDriver];
  const handleLoadStart = React.useCallback(() => {
    let obj = entranceAnimationDriver(outer1_1[4]);
    obj.batchUpdates(() => outer2_5.setState({ isComplete: false }));
    const fn = function t() {
      callback(outer2_1[6]).runOnJS(outer2_8)({ isComplete: true });
    };
    obj = { runOnJS: entranceAnimationDriver(outer1_1[6]).runOnJS, setUseEntranceAnimationState: outer1_8 };
    fn.__closure = obj;
    fn.__workletHash = 7427534745615;
    fn.__initData = outer1_6;
    const result = entranceAnimationDriver.set(entranceAnimationDriver(outer1_1[5]).withTiming(1, outer1_4, "respect-motion-settings", fn));
  }, items);
  const handleError = React.useCallback(() => {
    if (1 !== entranceAnimationDriver.get()) {
      let obj = entranceAnimationDriver(outer1_1[4]);
      obj.batchUpdates(() => outer2_5.setState({ isComplete: false }));
      const obj2 = entranceAnimationDriver(outer1_1[5]);
      const fn = function t() {
        callback(outer2_1[6]).runOnJS(outer2_8)({ isComplete: true });
        const obj = callback(outer2_1[6]);
        callback(outer2_1[6]).runOnJS(outer1_2)();
      };
      obj = { runOnJS: entranceAnimationDriver(outer1_1[6]).runOnJS, setUseEntranceAnimationState: outer1_8, incrementLoads: callback };
      fn.__closure = obj;
      fn.__workletHash = 9904090637386;
      fn.__initData = outer1_7;
      const result = entranceAnimationDriver.set(obj2.withTiming(1, outer1_4, "respect-motion-settings", fn));
    } else {
      callback();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};
