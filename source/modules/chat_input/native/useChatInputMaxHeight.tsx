// Module ID: 11153
// Function ID: 11154
// Name: getChatInputMaxHeight
// Dependencies: [32, 19, 1496, 11149, 1895, 5444, 4239, 1627, 1494, 11154, 11155, 11156, 4664, 4667, 4115, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputHeightAnimationTimingWorklet, getChatInputMinHeight

// Module 11153 (getChatInputMaxHeight)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { CHAT_INPUT_PILL_CONTENT_SIZE } from "TextAreaCta";

const require = arg1;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = require(1895) /* useSystemKeyboardHeight */.getSystemKeyboardHeight();
  const obj = require(1895) /* useSystemKeyboardHeight */;
  const tmp = require;
  const customKeyboardHeight = require(5444) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = require(5444) /* useCustomKeyboardHeight */;
  const keyboardType = require(4239) /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== require(1627) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = require(4239) /* useKeyboardType */;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp(1494).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const keyboardStateWorklet = require(11154) /* mutable */.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== require(1627) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  const obj = require(11154) /* mutable */;
  const tmp = require;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, require(11155) /* mutable */.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
let obj = { getKeyboardStateWorklet: require("mutable").getKeyboardStateWorklet, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, getWindowDimensionsWorklet: require("mutable").getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const bound = Math.max(height, textFieldMinHeight);
  if (typeof getChatInputMaxHeightWorklet !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = require(11154) /* mutable */;
  const keyboardStateWorklet = obj.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== require(1627) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  let tmp2Result = tmp2(11155);
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
  tmp2Result = tmp2(4664);
  obj = { duration: tmp2(4667).timingFastDuration, easing: tmp2(4115).Easing.linear };
  return tmp2Result.withTiming(bound1, obj);
}
obj = { getChatInputMaxHeightWorklet, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingFastDuration: require("timingNone").timingFastDuration, Easing: require("module_4115").Easing };
getChatInputHeightAnimationTimingWorklet.__closure = obj;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  let closure_0 = arg0;
  let tmp = callback(React.useState(getChatInputMaxHeight), 2);
  let closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let systemKeyboardHeight = outer1_0(outer1_2[4]).getSystemKeyboardHeight();
        const obj = outer1_0(outer1_2[4]);
        const tmp = outer1_0;
        const tmp2 = outer1_2;
        const customKeyboardHeight = outer1_0(outer1_2[5]).getCustomKeyboardHeight();
        const obj2 = outer1_0(outer1_2[5]);
        const keyboardType = outer1_0(outer1_2[6]).getKeyboardType();
        if (keyboardType !== outer1_0(outer1_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = outer1_0(outer1_2[6]);
        const bound = Math.min(outer1_6, Math.max(2 * outer1_7, tmp(tmp2[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - outer1_6));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (callback != null) {
            callback();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    let closure_0 = callback(outer1_2[11])(maybeUpdateMaxHeight);
    callback = outer1_5(maybeUpdateMaxHeight);
    return () => {
      callback();
      callback2();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, closure_8) {
  const bound = Math.max(height, closure_8);
  let obj = require(1895) /* useSystemKeyboardHeight */;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = require(5444) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = require(5444) /* useCustomKeyboardHeight */;
  const keyboardType = require(4239) /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== require(1627) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmp2Result = tmp2(1494);
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  tmp2Result = tmp2(4664);
  obj = { duration: tmp2(4667).timingFastDuration, easing: tmp2(4115).Easing.linear };
  return tmp2Result.withTiming(bound1, obj);
};
export { getChatInputHeightAnimationTimingWorklet };
