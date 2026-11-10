// Module ID: 13040
// Function ID: 13041
// Name: useChatInputMaxHeight
// Dependencies: [32, 19, 1495, 13037, 2020, 5738, 5327, 1625, 1493, 13041, 13042, 13043, 5372, 5375, 1652, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputHeightAnimationTimingWorklet, getChatInputMaxHeightWorklet, getChatInputMinHeight

// Module 13040 (useChatInputMaxHeight)
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import _mod1652 from "module_1652" /* 1652 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 2020 */;
import useKeyboardType from "useKeyboardType" /* 5327 */;
import timing_timing from "timing/timing" /* 5372 */;
import timingPresets from "timingPresets" /* 5375 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5738 */;
import ChatInputConstants from "ChatInputConstants" /* 13037 */;
import useKeyboardStateSharedValue from "useKeyboardStateSharedValue" /* 13041 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 13042 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp10;
let tmp11;
let tmp12;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const useWindowDimensions = tmp(1493);
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
  return Math.min(200, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = ChatInputConstants.CHAT_INPUT_PILL_CONTENT_SIZE;
let items = [{ code: "(function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){let[getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT]=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));})" }, useKeyboardStateSharedValue.getKeyboardStateWorklet, KeyboardTypes.KeyboardTypes, useWindowDimensionsSharedValue.getWindowDimensionsWorklet, 200, CHAT_INPUT_PILL_CONTENT_SIZE];
let c4;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
function getChatInputMaxHeightWorklet() {
  const tmp = _undefined();
  let customKeyboardHeight = tmp.keyboardHeight;
  if (tmp.keyboardType !== _undefined2.SYSTEM) {
    customKeyboardHeight = tmp.customKeyboardHeight;
  }
  return Math.min(c3, Math.max(2 * c4, _undefined3({ ignoreKeyboard: true }).height - customKeyboardHeight - c3));
}
const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
getChatInputMaxHeightWorklet.__closure = items1;
getChatInputMaxHeightWorklet.__workletHash = 12937272049735;
getChatInputMaxHeightWorklet.__initData = tmp2;
const items2 = [{ code: "(function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){let[getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing]=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});})" }, getChatInputMaxHeightWorklet, timing_timing.withTiming, timingPresets.timingFastDuration, _mod1652.Easing];
let c0;
let c1;
let c2;
let c3;
[tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
function getChatInputHeightAnimationTimingWorklet(arg0, arg1) {
  const bound = Math.max(arg0, arg1);
  const obj = { duration, easing: _undefined3.linear };
  return _undefined2(min(bound, _undefined()), obj);
}
const items3 = [tmp9, tmp10, tmp11, tmp12];
getChatInputHeightAnimationTimingWorklet.__closure = items3;
getChatInputHeightAnimationTimingWorklet.__workletHash = 14680370017566;
getChatInputHeightAnimationTimingWorklet.__initData = tmp8;
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
        const bound = Math.min(200, Math.max(2 * closure_2_6, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
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
export function getChatInputHeightAnimationTiming(height, arg1) {
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
  const minResult = min(bound, Math.min(200, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200)));
  const tmp2Result2 = timing_timing;
  const obj4 = { duration: timingPresets.timingFastDuration, easing: _mod1652.Easing.linear };
  return tmp2Result2.withTiming(minResult, obj4);
}
export { getChatInputHeightAnimationTimingWorklet };
