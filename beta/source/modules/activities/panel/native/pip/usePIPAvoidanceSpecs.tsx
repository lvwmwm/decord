// Module ID: 16834
// Function ID: 16835
// Name: usePIPAvoidanceSpecs
// Dependencies: [4566, 16269, 16835, 8853, 16733, 16836, 10896, 2]
// Exports: default

// Module 16834 (usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 16733 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 16836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  let closure_2;
  let closure_3;
  _require = safeArea;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(16269)();
  dependencyMap = tmp2;
  const tmp3 = sharedValue(16835)();
  __initData = tmp3;
  const fn = function n() {
    const obj = { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
    return obj;
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = __initData;
  const fn2 = function f(safeAreaState, current) {
    let keyboardHeight;
    let safeAreaBottom;
    let screenName;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = current;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      const obj = { screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj).bottomOffset };
      getPIPBottomOffsetForPIPModeDefault(screenName);
      updateSharedValueIfChangedDefault(sharedValue, rect);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(16733), getAdjustedBottomOffsets: sharedValue(16836), updateSharedValueIfChanged: sharedValue(10896), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 643938425459;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(16733), getAdjustedBottomOffsets: sharedValue(16836), updateSharedValueIfChanged: sharedValue(10896), pipAvoidanceSpecs: sharedValue });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return sharedValue;
};
