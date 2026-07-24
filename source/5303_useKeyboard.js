// Module ID: 5303
// Function ID: 45789
// Name: useKeyboard
// Dependencies: [31, 27, 1582, 5190]
// Exports: useKeyboard

// Module 5303 (useKeyboard)
import { useEffect } from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_3;
({ Keyboard: closure_3, Platform } = get_ActivityIndicator);
let closure_4 = { code: "function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}" };
let closure_5 = { code: "function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}" };
let closure_6 = { code: "function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}" };

export const useKeyboard = function useKeyboard(includeBottomOffset) {
  includeBottomOffset = includeBottomOffset.includeBottomOffset;
  let obj = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  shouldHandleKeyboardEvents = obj.useSharedValue(false);
  const state = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.UNDETERMINED);
  const obj2 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const height = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(0);
  const obj3 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const animationEasing = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue("keyboard");
  const obj4 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const animationDuration = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(500);
  const obj5 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const sharedValue5 = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue([]);
  const obj6 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  /* worklet (recovered source) */ function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}
  obj = { KEYBOARD_STATE: includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE, shouldHandleKeyboardEvents, temporaryCachedKeyboardEvent: sharedValue5, keyboardHeight: height, includeBottomOffset, keyboardAnimationDuration: animationDuration, keyboardAnimationEasing: animationEasing, keyboardState: state };
  pnpm_useKeyboardTs1.__closure = obj;
  pnpm_useKeyboardTs1.__workletHash = 7905199978020;
  pnpm_useKeyboardTs1.__initData = animationEasing;
  const workletCallback = includeBottomOffset(shouldHandleKeyboardEvents[2]).useWorkletCallback(pnpm_useKeyboardTs1, []);
  let items = [workletCallback];
  state(() => {
    let closure_0 = height.addListener("keyboardDidShow", function handleOnKeyboardShow(endCoordinates) {
      let duration;
      let easing;
      const obj = includeBottomOffset(shouldHandleKeyboardEvents[2]);
      ({ duration, easing } = endCoordinates);
      includeBottomOffset(shouldHandleKeyboardEvents[2]).runOnUI(outer1_7)(includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.SHOWN, endCoordinates.endCoordinates.height, duration, easing, includeBottomOffset(shouldHandleKeyboardEvents[3]).SCREEN_HEIGHT - endCoordinates.endCoordinates.height - endCoordinates.endCoordinates.screenY);
    });
    let closure_1 = height.addListener("keyboardDidHide", function handleOnKeyboardHide(endCoordinates) {
      const obj = includeBottomOffset(shouldHandleKeyboardEvents[2]);
      includeBottomOffset(shouldHandleKeyboardEvents[2]).runOnUI(outer1_7)(includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.HIDDEN, endCoordinates.endCoordinates.height, endCoordinates.duration, endCoordinates.easing);
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, items);
  const obj7 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  /* worklet (recovered source) */ function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}
  pnpm_useKeyboardTs2.__closure = { shouldHandleKeyboardEvents };
  pnpm_useKeyboardTs2.__workletHash = 11615500623565;
  pnpm_useKeyboardTs2.__initData = animationDuration;
  /* worklet (recovered source) */ function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}
  pnpm_useKeyboardTs3.__closure = { temporaryCachedKeyboardEvent: sharedValue5, handleKeyboardEvent: workletCallback };
  pnpm_useKeyboardTs3.__workletHash = 16636741173520;
  pnpm_useKeyboardTs3.__initData = sharedValue5;
  const animatedReaction = includeBottomOffset(shouldHandleKeyboardEvents[2]).useAnimatedReaction(pnpm_useKeyboardTs2, pnpm_useKeyboardTs3, []);
  return { state, height, animationEasing, animationDuration, shouldHandleKeyboardEvents };
};
