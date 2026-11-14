// Module ID: 19911
// Function ID: 19912
// Name: usePIPAvoidanceSpecs
// Dependencies: [1655, 13129, 19912, 11333, 19783, 19913, 11989, 2]
// Exports: default

// Module 19911 (usePIPAvoidanceSpecs)
import _mod1655 from "module_1655" /* 1655 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11989 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 13129 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 19783 */;
import useScreenNameSharedValueDefault from "useScreenNameSharedValue" /* 19912 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 19913 */;
import size from "module_2" /* 2 */;

let tmp;
const cheapWorkletShallowEqual = tmp(11333);
let closure_3 = { code: "(function usePIPAvoidanceSpecsTsx1(){let[keyboardHeight,safeArea,screenName]=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};})" };
let closure_4 = { code: "(function usePIPAvoidanceSpecsTsx2(props,previous){let[cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});})" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(arg0) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp8;
  let tmp9;
  let tmp2 = dependencyMap;
  let tmp = require;
  let obj = _mod1655;
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp5 = useAnimatedKeyboardHeightDefault();
  const tmp6 = useScreenNameSharedValueDefault();
  const items = [closure_3, tmp5, arg0, tmp6];
  [tmp8, tmp9, tmp10, tmp11] = items;
  function usePIPAvoidanceSpecsTsx1() {
    const obj = { keyboardHeight: _undefined.get(), safeAreaBottom: _undefined2.bottom, screenName: _undefined3.get() };
    return obj;
  }
  const items1 = [tmp9, tmp10, tmp11];
  usePIPAvoidanceSpecsTsx1.__closure = items1;
  usePIPAvoidanceSpecsTsx1.__workletHash = 2538865691381;
  usePIPAvoidanceSpecsTsx1.__initData = tmp8;
  const items2 = [closure_4, , , , , ];
  const useAnimatedReaction = _mod1655.useAnimatedReaction;
  items2[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items2[2] = getPIPBottomOffsetForPIPModeDefault;
  items2[3] = getAdjustedBottomOffsetsDefault;
  items2[4] = updateSharedValueIfChangedDefault;
  items2[5] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  function usePIPAvoidanceSpecsTsx2(screenName, arg1) {
    let keyboardHeight;
    let safeAreaBottom;
    const tmp = arg1;
    const tmp2 = c0;
    if (!tmp2(screenName, tmp)) {
      ({ keyboardHeight, safeAreaBottom } = screenName);
      const obj = { screenBottomOffset: _undefined(screenName.screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: _undefined2(obj).bottomOffset };
      _undefined3(c4, rect);
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  usePIPAvoidanceSpecsTsx2.__closure = items3;
  usePIPAvoidanceSpecsTsx2.__workletHash = 12351742460170;
  usePIPAvoidanceSpecsTsx2.__initData = tmp12;
  const animatedReaction = useAnimatedReaction(usePIPAvoidanceSpecsTsx1, usePIPAvoidanceSpecsTsx2);
  return sharedValue;
};
