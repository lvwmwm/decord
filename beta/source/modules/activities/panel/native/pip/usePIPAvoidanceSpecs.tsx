// Module ID: 17478
// Function ID: 17479
// Name: pip/usePIPAvoidanceSpecs
// Dependencies: [4524, 17168, 17479, 9696, 17383, 17480, 11646, 2]
// Exports: default

// Module 17478 (pip/usePIPAvoidanceSpecs)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11646 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 17383 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 17480 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let __initData = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  _require = safeArea;
  const sharedValue = require("ReanimatedRexport").useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(17168)();
  dependencyMap = tmp2;
  const tmp3 = sharedValue(17479)();
  __initData = tmp3;
  const obj = require("ReanimatedRexport");
  const fn = function n() {
    return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = __initData;
  const fn2 = function f(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      const obj2 = { screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj2).bottomOffset };
      updateSharedValueIfChangedDefault(sharedValue, rect);
      const tmp4 = getPIPBottomOffsetForPIPModeDefault(screenName);
    }
  };
  let obj2 = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(17383), getAdjustedBottomOffsets: sharedValue(17480), updateSharedValueIfChanged: sharedValue(11646), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 643938425459;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return sharedValue;
};
