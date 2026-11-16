// Module ID: 5609
// Function ID: 5610
// Name: useKeyboard
// Dependencies: [19, 17, 1652, 5425]
// Exports: useKeyboard

// Module 5609 (useKeyboard)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require, closure_0;

let Platform;
let c2;
let c3;
let closure_4;
({ useCallback: c2, useEffect: c3 } = react);
({ Keyboard: closure_4, Platform } = react_native);
const keyboardDidShow = "keyboardDidShow";
const keyboardDidHide = "keyboardDidHide";
let closure_7 = { code: "(function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){let[KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState]=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];})" };
let closure_8 = { code: "(function pnpm_useKeyboardTs2(){let[shouldHandleKeyboardEvents]=this.__closure;return shouldHandleKeyboardEvents.value;})" };
let closure_9 = { code: "(function pnpm_useKeyboardTs3(result){let[temporaryCachedKeyboardEvent,handleKeyboardEvent]=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}})" };

export const useKeyboard = (includeBottomOffset) => {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  _require = undefined;
  includeBottomOffset = includeBottomOffset.includeBottomOffset;
  let tmp = _require;
  let obj = require("module_1652");
  const shouldHandleKeyboardEvents = obj.useSharedValue(false);
  const obj2 = require("module_1652");
  const state = obj2.useSharedValue(require("GESTURE_SOURCE").KEYBOARD_STATE.UNDETERMINED);
  const obj3 = require("module_1652");
  const height = obj3.useSharedValue(0);
  const obj4 = require("module_1652");
  const animationEasing = obj4.useSharedValue("keyboard");
  const obj5 = require("module_1652");
  const animationDuration = obj5.useSharedValue(500);
  const obj6 = require("module_1652");
  const sharedValue5 = obj6.useSharedValue([]);
  let items = [closure_7, require("GESTURE_SOURCE").KEYBOARD_STATE, shouldHandleKeyboardEvents, sharedValue5, height, includeBottomOffset, animationDuration, animationEasing, state];
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  function pnpm_useKeyboardTs1(value, arg1, value2, value3, arg4) {
    value = arg1;
    const tmp = _undefined;
    if (value === _undefined.SHOWN) {
      if (!_undefined2.value) {
        const items = [value, value, value2, value3];
        c2.value = items;
      }
    }
    if (value !== tmp.SHOWN) {
      value = iter.value;
    }
    _undefined.value = value;
    const tmp4 = arg4 && c4;
    if (tmp4) {
      _undefined.value = _undefined.value + arg4;
    }
    c5.value = value2;
    c6.value = value3;
    c7.value = value;
    c2.value = [];
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  pnpm_useKeyboardTs1.__closure = items1;
  pnpm_useKeyboardTs1.__workletHash = 1523822461565;
  pnpm_useKeyboardTs1.__initData = tmp10;
  const tmp9Result = closure_2(pnpm_useKeyboardTs1, []);
  _require = tmp9Result;
  const items2 = [tmp9Result];
  closure_3(() => {
    closure_0 = closure_1_4.addListener(keyboardDidShow, (endCoordinates) => {
      let duration;
      let easing;
      ({ duration, easing } = endCoordinates);
      const obj = closure_0(dependencyMap[2]);
      const runOnUIResult = obj.runOnUI(closure_0);
      runOnUIResult(closure_0(dependencyMap[3]).KEYBOARD_STATE.SHOWN, endCoordinates.endCoordinates.height, duration, easing, closure_0(dependencyMap[3]).SCREEN_HEIGHT - endCoordinates.endCoordinates.height - endCoordinates.endCoordinates.screenY);
    });
    let closure_1 = closure_1_4.addListener(keyboardDidHide, (endCoordinates) => {
      const obj = closure_0(dependencyMap[2]);
      const runOnUIResult = obj.runOnUI(closure_0);
      runOnUIResult(closure_0(dependencyMap[3]).KEYBOARD_STATE.HIDDEN, endCoordinates.endCoordinates.height, endCoordinates.duration, endCoordinates.easing);
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, items2);
  const items3 = [closure_8, shouldHandleKeyboardEvents];
  [tmp21, tmp22] = items3;
  function pnpm_useKeyboardTs2() {
    return _undefined.value;
  }
  const items4 = [tmp22];
  pnpm_useKeyboardTs2.__closure = items4;
  pnpm_useKeyboardTs2.__workletHash = 4678267351412;
  pnpm_useKeyboardTs2.__initData = tmp21;
  const items5 = [closure_9, sharedValue5, tmp9Result];
  let c0;
  let c1;
  [tmp23, tmp24, tmp25] = items5;
  function pnpm_useKeyboardTs3(arg0) {
    let tmp = arg0;
    const value = _undefined.value;
    if (arg0) {
      tmp = value.length > 0;
    }
    if (tmp) {
      _undefined2(value[0], value[1], value[2], value[3]);
    }
  }
  const items6 = [tmp24, tmp25];
  pnpm_useKeyboardTs3.__closure = items6;
  pnpm_useKeyboardTs3.__workletHash = 12737213295497;
  pnpm_useKeyboardTs3.__initData = tmp23;
  const tmpResult = tmp(1652);
  const animatedReaction = tmpResult.useAnimatedReaction(pnpm_useKeyboardTs2, pnpm_useKeyboardTs3, []);
  return { state, height, animationEasing, animationDuration, shouldHandleKeyboardEvents };
};
