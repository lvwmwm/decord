// Module ID: 11513
// Function ID: 11514
// Name: useChatInputMaxHeight
// Dependencies: [32, 19, 1481, 11444, 1879, 5891, 4703, 1611, 1479, 11514, 11515, 11516, 4837, 4840, 4566, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputHeightAnimationTimingWorklet, getChatInputMinHeight

// Module 11513 (useChatInputMaxHeight)
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1879 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useKeyboardType from "useKeyboardType" /* 4703 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5891 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import useKeyboardStateSharedValue from "useKeyboardStateSharedValue" /* 11514 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 11515 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
import size from "module_2" /* 2 */;

let tmp;
const useWindowDimensions = tmp(1479);
function getChatInputMaxHeight() {
  const obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj2.getCustomKeyboardHeight();
  const obj3 = useKeyboardType;
  const keyboardType = obj3.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const tmpResult = useWindowDimensions;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = ChatInputConstants.CHAT_INPUT_PILL_CONTENT_SIZE;
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const obj = useKeyboardStateSharedValue;
  const keyboardStateWorklet = obj.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  const tmpResult = useWindowDimensionsSharedValue;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
let obj = { getKeyboardStateWorklet: useKeyboardStateSharedValue.getKeyboardStateWorklet, KeyboardTypes: KeyboardTypes.KeyboardTypes, getWindowDimensionsWorklet: useWindowDimensionsSharedValue.getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const _Math = Math;
  if (typeof getChatInputMaxHeightWorklet === "function") {
    const obj = useKeyboardStateSharedValue;
    const keyboardStateWorklet = obj.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp2Result = useWindowDimensionsSharedValue;
    const minResult = min(tmp, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
    const obj2 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    const withTiming = timing.withTiming;
    timing;
    return withTiming(minResult, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj2 = { getChatInputMaxHeightWorklet, withTiming: timing.withTiming, timingFastDuration: timingPresets.timingFastDuration, Easing: ReanimatedRexport.Easing };
getChatInputHeightAnimationTimingWorklet.__closure = obj2;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(getChatInputMaxHeight);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function maybeUpdateMaxHeight() {
      let tmp = closure_1((arg0) => {
        const obj = closure_0(closure_2_2[4]);
        let systemKeyboardHeight = obj.getSystemKeyboardHeight();
        const obj2 = closure_0(closure_2_2[5]);
        const customKeyboardHeight = obj2.getCustomKeyboardHeight();
        const obj3 = closure_0(closure_2_2[6]);
        const keyboardType = obj3.getKeyboardType();
        const tmp = closure_0;
        const tmp2 = closure_2_2;
        if (keyboardType !== closure_0(closure_2_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const tmpResult = tmp(tmp2[8]);
        const bound = Math.min(closure_2_6, Math.max(2 * closure_2_7, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (closure_1_0 != null) {
            closure_1_0();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    closure_0 = closure_1(dependencyMap[11])(maybeUpdateMaxHeight);
    closure_1 = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
    return () => {
      closure_0();
      closure_1();
    };
  }, items);
  return first;
};
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, arg1) {
  const _Math = Math;
  const bound = Math.max(height, arg1);
  const obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj2.getCustomKeyboardHeight();
  const obj3 = useKeyboardType;
  const keyboardType = obj3.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const tmp2Result = useWindowDimensions;
  const minResult = min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  const tmp2Result2 = timing;
  const obj4 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
  return tmp2Result2.withTiming(minResult, obj4);
};
export { getChatInputHeightAnimationTimingWorklet };
