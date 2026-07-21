// Module ID: 5080
// Function ID: 43388
// Name: useKeyboard
// Dependencies: []
// Exports: useKeyboard

// Module 5080 (useKeyboard)
let Platform;
const useEffect = require(dependencyMap[0]).useEffect;
const _module = require(dependencyMap[1]);
({ Keyboard: closure_3, Platform } = _module);
let closure_4 = { code: "function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}" };
let closure_5 = { code: "function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}" };
let closure_6 = { code: "function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}" };

export const useKeyboard = function useKeyboard(includeBottomOffset) {
  includeBottomOffset = includeBottomOffset.includeBottomOffset;
  const require = includeBottomOffset;
  let obj = require(dependencyMap[2]);
  const shouldHandleKeyboardEvents = obj.useSharedValue(false);
  const dependencyMap = shouldHandleKeyboardEvents;
  const state = require(dependencyMap[2]).useSharedValue(require(dependencyMap[3]).KEYBOARD_STATE.UNDETERMINED);
  const useEffect = state;
  const obj2 = require(dependencyMap[2]);
  const height = require(dependencyMap[2]).useSharedValue(0);
  const obj3 = require(dependencyMap[2]);
  const animationEasing = require(dependencyMap[2]).useSharedValue("keyboard");
  let closure_4 = animationEasing;
  const obj4 = require(dependencyMap[2]);
  const animationDuration = require(dependencyMap[2]).useSharedValue(500);
  let closure_5 = animationDuration;
  const obj5 = require(dependencyMap[2]);
  const sharedValue5 = require(dependencyMap[2]).useSharedValue([]);
  let closure_6 = sharedValue5;
  const obj6 = require(dependencyMap[2]);
  /* worklet (recovered source) */ function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}
  obj = { KEYBOARD_STATE: require(dependencyMap[3]).KEYBOARD_STATE, shouldHandleKeyboardEvents, temporaryCachedKeyboardEvent: sharedValue5, keyboardHeight: height, includeBottomOffset, keyboardAnimationDuration: animationDuration, keyboardAnimationEasing: animationEasing, keyboardState: state };
  pnpm_useKeyboardTs1.__closure = obj;
  pnpm_useKeyboardTs1.__workletHash = 7905199978020;
  pnpm_useKeyboardTs1.__initData = closure_4;
  const workletCallback = require(dependencyMap[2]).useWorkletCallback(pnpm_useKeyboardTs1, []);
  const items = [workletCallback];
  useEffect(() => {
    let closure_0 = height.addListener("keyboardDidShow", function handleOnKeyboardShow(endCoordinates) {
      let duration;
      let easing;
      const obj = lib(closure_1[2]);
      ({ duration, easing } = endCoordinates);
      lib(closure_1[2]).runOnUI(closure_7)(lib(closure_1[3]).KEYBOARD_STATE.SHOWN, endCoordinates.endCoordinates.height, duration, easing, lib(closure_1[3]).SCREEN_HEIGHT - endCoordinates.endCoordinates.height - endCoordinates.endCoordinates.screenY);
    });
    let closure_1 = height.addListener("keyboardDidHide", function handleOnKeyboardHide(endCoordinates) {
      const obj = lib(closure_1[2]);
      lib(closure_1[2]).runOnUI(closure_7)(lib(closure_1[3]).KEYBOARD_STATE.HIDDEN, endCoordinates.endCoordinates.height, endCoordinates.duration, endCoordinates.easing);
    });
    return () => {
      lib.remove();
      closure_1.remove();
    };
  }, items);
  const obj7 = require(dependencyMap[2]);
  /* worklet (recovered source) */ function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}
  pnpm_useKeyboardTs2.__closure = { shouldHandleKeyboardEvents };
  pnpm_useKeyboardTs2.__workletHash = 11615500623565;
  pnpm_useKeyboardTs2.__initData = closure_5;
  /* worklet (recovered source) */ function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}
  pnpm_useKeyboardTs3.__closure = { temporaryCachedKeyboardEvent: sharedValue5, handleKeyboardEvent: workletCallback };
  pnpm_useKeyboardTs3.__workletHash = 16636741173520;
  pnpm_useKeyboardTs3.__initData = closure_6;
  const animatedReaction = require(dependencyMap[2]).useAnimatedReaction(pnpm_useKeyboardTs2, pnpm_useKeyboardTs3, []);
  return { state, height, animationEasing, animationDuration, shouldHandleKeyboardEvents };
};
