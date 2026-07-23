// Module ID: 5292
// Function ID: 45682
// Name: Pressable
// Dependencies: [57, 29, 31, 27, 33, 5221, 5293, 5294, 5295, 5268, 5296, 5253, 5280]
// Exports: default

// Module 5292 (Pressable)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import hasProperty from "hasProperty";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
let closure_3 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
({ useCallback: closure_6, useEffect: closure_7, useMemo: closure_8, useRef: closure_9, useState: closure_10 } = result);
({ Platform: closure_11, processColor: closure_12 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
hasProperty = hasProperty.isTestEnv();
let c16 = null;
let closure_17 = { code: "function pnpm_PressableTsx1(event){const{hoverInTimeout,clearTimeout,delayHoverOut,hoverOutTimeout,setTimeout,onHoverOut,gestureToPressableEvent}=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));}" };
let closure_18 = { code: "function pnpm_PressableTsx2(event){const{hoverOutTimeout,clearTimeout,delayHoverIn,hoverInTimeout,setTimeout,onHoverIn,gestureToPressableEvent}=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));}" };
let closure_19 = { code: "function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}" };
let closure_20 = { code: "function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}" };
let closure_21 = { code: "function pnpm_PressableTsx5(){const{Platform,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'){stateMachine.reset();handleFinalize();}}" };
let closure_22 = { code: "function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}" };
let closure_23 = { code: "function pnpm_PressableTsx7(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}}" };
let closure_24 = { code: "function pnpm_PressableTsx8(){const{Platform,stateMachine,StateMachineEvent}=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}}" };
let closure_25 = { code: "function pnpm_PressableTsx9(){const{stateMachine,StateMachineEvent}=this.__closure;stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);}" };
let closure_26 = { code: "function pnpm_PressableTsx10(event){const{Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}}" };

export default function Pressable(pressRetentionOffset) {
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blocksExternalGesture;
  let children;
  let disabled;
  let hitSlop;
  let requireExternalGestureToFail;
  let simultaneousWithExternalGesture;
  let style;
  let testOnly_pressed;
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  const delayHoverIn = pressRetentionOffset.delayHoverIn;
  const delayHoverOut = pressRetentionOffset.delayHoverOut;
  const delayLongPress = pressRetentionOffset.delayLongPress;
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  const onHoverIn = pressRetentionOffset.onHoverIn;
  const onHoverOut = pressRetentionOffset.onHoverOut;
  const onPress = pressRetentionOffset.onPress;
  const onPressIn = pressRetentionOffset.onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  const onLayout = pressRetentionOffset.onLayout;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ disabled, accessible, simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture } = pressRetentionOffset);
  let closure_14 = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  let tmp3 = null != testOnly_pressed;
  if (tmp3) {
    tmp3 = testOnly_pressed;
  }
  const tmp4 = delayLongPress(onPressOut(tmp3), 2);
  const first = tmp4[0];
  let closure_15 = tmp4[1];
  let closure_16 = onPressIn(null);
  let closure_17 = onPressIn(null);
  let closure_18 = onPressIn(true);
  let closure_19 = onPressIn(false);
  let closure_20 = onPressIn({ width: 0, height: 0 });
  const items = [hitSlop];
  const tmp6 = onPress(() => {
    if ("number" === typeof hitSlop) {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(hitSlop);
      const obj = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = null != hitSlop ? hitSlop : {};
    }
    return numberAsInsetResult;
  }, items);
  let closure_21 = tmp6;
  const items1 = [pressRetentionOffset];
  let tmp = unstable_pressDelay(pressRetentionOffset, delayHoverOut);
  let tmp2 = onPressOut;
  let obj = hitSlop(delayHoverIn[6]);
  const addInsetsResult = obj.addInsets(tmp6, onPress(() => {
    if ("number" === typeof pressRetentionOffset) {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(pressRetentionOffset);
      const obj = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = null != pressRetentionOffset ? pressRetentionOffset : {};
    }
    return numberAsInsetResult;
  }, items1));
  const tmp9 = onHoverIn(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      closure_18.current = true;
    }
  }, []);
  let closure_23 = tmp9;
  const tmp10 = onHoverIn(() => {
    if (closure_17.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_17.current);
      closure_17.current = null;
    }
  }, []);
  let closure_24 = tmp10;
  const items2 = [onLongPress, tmp9, delayLongPress];
  const tmp11 = onHoverIn((arg0) => {
    let closure_0 = arg0;
    if (onLongPress) {
      tmp9();
      let num = 500;
      if (null != delayLongPress) {
        num = delayLongPress;
      }
      closure_16.current = setTimeout(() => {
        outer1_18.current = false;
        outer1_11(closure_0);
      }, num);
      const tmp3 = closure_16;
    }
  }, items2);
  let closure_25 = tmp11;
  const items3 = [onPressIn, tmp11];
  const tmp12 = onHoverIn((arg0) => {
    if (null != onPressIn) {
      onPressIn(arg0);
    }
    tmp11(arg0);
    callback(true);
    if (closure_17.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_17.current);
      closure_17.current = null;
    }
  }, items3);
  let closure_26 = tmp12;
  const items4 = [tmp10, tmp9];
  const tmp13 = onHoverIn(() => {
    closure_19.current = false;
    tmp9();
    tmp10();
    callback(false);
  }, items4);
  let closure_27 = tmp13;
  const items5 = [tmp12, tmp6, unstable_pressDelay];
  const tmp14 = onHoverIn((nativeEvent) => {
    let closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    if (obj.isTouchWithinInset(ref4.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          outer1_26(closure_0);
        }, unstable_pressDelay);
      } else {
        tmp12(nativeEvent);
      }
    }
  }, items5);
  let closure_28 = tmp14;
  const items6 = [tmp13, tmp12, onPress, onPressOut];
  const tmp15 = onHoverIn((arg0) => {
    const tmp = arguments.length > 1 && undefined !== arguments[1];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = arguments[1];
    }
    if (ref3.current) {
      ref3.current = false;
      if (closure_17.current) {
        tmp12(arg0);
      }
      if (null != onPressOut) {
        onPressOut(arg0);
      }
      if (ref2.current && tmp2) {
        if (null != onPress) {
          onPress(arg0);
        }
      }
      tmp13();
    }
  }, items6);
  let closure_29 = tmp15;
  const tmp16 = onPress(() => {
    const pressableStateMachine = new hitSlop(delayHoverIn[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  let closure_30 = tmp16;
  const items7 = [tmp14, tmp15, tmp16];
  onHoverOut(() => {
    tmp16.setStates(hitSlop(delayHoverIn[8]).getStatesConfig(closure_28, closure_29));
  }, items7);
  let closure_31 = onPressIn(null);
  let closure_32 = onPressIn(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp16, tmp13, tmp15];
  const tmp7 = onPress(() => {
    if ("number" === typeof pressRetentionOffset) {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(pressRetentionOffset);
      const obj = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = null != pressRetentionOffset ? pressRetentionOffset : {};
    }
    return numberAsInsetResult;
  }, items1);
  const items10 = [tmp16, tmp15, tmp13];
  const tmp18 = onPress(() => {
    const GestureObjects = hitSlop(delayHoverIn[9]).GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = GestureObjects.Hover().manualActivation(true);
    /* worklet (recovered source) */ function pnpm_PressableTsx2(event){const{hoverOutTimeout,clearTimeout,delayHoverIn,hoverInTimeout,setTimeout,onHoverIn,gestureToPressableEvent}=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));}
    let obj = { hoverOutTimeout: closure_32, clearTimeout: clearTimeout, delayHoverIn, hoverInTimeout: closure_31, setTimeout: setTimeout, onHoverIn, gestureToPressableEvent: hitSlop(delayHoverIn[6]).gestureToPressableEvent };
    pnpm_PressableTsx2.__closure = obj;
    pnpm_PressableTsx2.__workletHash = 145410820733;
    pnpm_PressableTsx2.__initData = closure_18;
    const cancelsTouchesInViewResult = GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false);
    /* worklet (recovered source) */ function pnpm_PressableTsx1(event){const{hoverInTimeout,clearTimeout,delayHoverOut,hoverOutTimeout,setTimeout,onHoverOut,gestureToPressableEvent}=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));}
    obj = { hoverInTimeout: closure_31, clearTimeout: clearTimeout, delayHoverOut, hoverOutTimeout: closure_32, setTimeout: setTimeout, onHoverOut, gestureToPressableEvent: hitSlop(delayHoverIn[6]).gestureToPressableEvent };
    pnpm_PressableTsx1.__closure = obj;
    pnpm_PressableTsx1.__workletHash = 117886059607;
    pnpm_PressableTsx1.__initData = closure_17;
    return GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false).onBegin(pnpm_PressableTsx2).onFinalize(pnpm_PressableTsx1);
  }, items8);
  let closure_33 = tmp20;
  const items11 = [
    onPress(() => {
      const GestureObjects = hitSlop(delayHoverIn[9]).GestureObjects;
      /* worklet (recovered source) */ function pnpm_PressableTsx10(event){const{Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}}
      let obj = { Platform: onLongPress, gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      pnpm_PressableTsx10.__closure = obj;
      pnpm_PressableTsx10.__workletHash = 9061249296673;
      pnpm_PressableTsx10.__initData = closure_26;
      const NativeResult = GestureObjects.Native();
      /* worklet (recovered source) */ function pnpm_PressableTsx9(){const{stateMachine,StateMachineEvent}=this.__closure;stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);}
      obj = { stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent };
      pnpm_PressableTsx9.__closure = obj;
      pnpm_PressableTsx9.__workletHash = 11605577071200;
      pnpm_PressableTsx9.__initData = closure_25;
      const onTouchesCancelledResult = GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx10);
      /* worklet (recovered source) */ function pnpm_PressableTsx8(){const{Platform,stateMachine,StateMachineEvent}=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}}
      const onBeginResult = GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx10).onBegin(pnpm_PressableTsx9);
      pnpm_PressableTsx8.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent };
      pnpm_PressableTsx8.__workletHash = 1583717288778;
      pnpm_PressableTsx8.__initData = closure_24;
      const obj1 = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent };
      /* worklet (recovered source) */ function pnpm_PressableTsx7(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}}
      const onStartResult = onBeginResult.onStart(pnpm_PressableTsx8);
      pnpm_PressableTsx7.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent, handleFinalize: closure_27 };
      pnpm_PressableTsx7.__workletHash = 13697558324309;
      pnpm_PressableTsx7.__initData = closure_23;
      return onStartResult.onFinalize(pnpm_PressableTsx7);
    }, items10),
    onPress(() => {
      const GestureObjects = hitSlop(delayHoverIn[9]).GestureObjects;
      const LongPressResult = GestureObjects.LongPress();
      const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX);
      const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX);
      /* worklet (recovered source) */ function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}
      let obj = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent };
      pnpm_PressableTsx6.__closure = obj;
      pnpm_PressableTsx6.__workletHash = 5538605329543;
      pnpm_PressableTsx6.__initData = addInsetsResult;
      const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false);
      /* worklet (recovered source) */ function pnpm_PressableTsx5(){const{Platform,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'){stateMachine.reset();handleFinalize();}}
      obj = { Platform: onLongPress, stateMachine: closure_30, handleFinalize: closure_27 };
      pnpm_PressableTsx5.__closure = obj;
      pnpm_PressableTsx5.__workletHash = 9871785058594;
      pnpm_PressableTsx5.__initData = closure_21;
      const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx6);
      /* worklet (recovered source) */ function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}
      const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx6).onTouchesUp(pnpm_PressableTsx5);
      pnpm_PressableTsx4.__closure = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      pnpm_PressableTsx4.__workletHash = 8223505277740;
      pnpm_PressableTsx4.__initData = closure_20;
      const obj1 = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      /* worklet (recovered source) */ function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}
      const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(pnpm_PressableTsx4);
      pnpm_PressableTsx3.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent, handleFinalize: closure_27 };
      pnpm_PressableTsx3.__workletHash = 946627735228;
      pnpm_PressableTsx3.__initData = closure_19;
      return onTouchesCancelledResult.onFinalize(pnpm_PressableTsx3);
    }, items9),
    tmp18
  ];
  function _loop(item10109) {
    let closure_0 = item10109;
    item10109.enabled(closure_33);
    item10109.runOnJS(true);
    item10109.hitSlop(closure_22);
    const entries = Object.entries(closure_14);
    const item = entries.forEach((arg0) => {
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = delayLongPress(arg0, 2);
      const tmp = delayLongPress(arg0, 2);
      hitSlop(delayHoverIn[10]).applyRelationProp(closure_0, tmp2, tmp3);
    });
  }
  for (const item10109 of items11) {
    let tmp21 = _loop;
    let _loopResult = _loop(item10109);
    continue;
  }
  const Simultaneous = hitSlop(delayHoverIn[9]).GestureObjects.Simultaneous;
  const tmp19 = onPress(() => {
    const GestureObjects = hitSlop(delayHoverIn[9]).GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX);
    const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX);
    /* worklet (recovered source) */ function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}
    let obj = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent };
    pnpm_PressableTsx6.__closure = obj;
    pnpm_PressableTsx6.__workletHash = 5538605329543;
    pnpm_PressableTsx6.__initData = addInsetsResult;
    const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false);
    /* worklet (recovered source) */ function pnpm_PressableTsx5(){const{Platform,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'){stateMachine.reset();handleFinalize();}}
    obj = { Platform: onLongPress, stateMachine: closure_30, handleFinalize: closure_27 };
    pnpm_PressableTsx5.__closure = obj;
    pnpm_PressableTsx5.__workletHash = 9871785058594;
    pnpm_PressableTsx5.__initData = closure_21;
    const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx6);
    /* worklet (recovered source) */ function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}
    const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx6).onTouchesUp(pnpm_PressableTsx5);
    pnpm_PressableTsx4.__closure = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    pnpm_PressableTsx4.__workletHash = 8223505277740;
    pnpm_PressableTsx4.__initData = closure_20;
    const obj1 = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    /* worklet (recovered source) */ function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}
    const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(pnpm_PressableTsx4);
    pnpm_PressableTsx3.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[8]).StateMachineEvent, handleFinalize: closure_27 };
    pnpm_PressableTsx3.__workletHash = 946627735228;
    pnpm_PressableTsx3.__initData = closure_19;
    return onTouchesCancelledResult.onFinalize(pnpm_PressableTsx3);
  }, items9);
  if ("function" === typeof style) {
    obj = { pressed: first };
    style = style(obj);
  }
  let childrenResult = children;
  if ("function" === typeof children) {
    obj = { pressed: first };
    childrenResult = children(obj);
  }
  const items12 = [android_ripple];
  const items13 = [onLayout];
  const applyResult = Simultaneous.apply(hitSlop(delayHoverIn[9]).GestureObjects, items11);
  const tmp26 = onPress(() => {
    if (null === closure_16) {
      closure_16 = hitSlop(delayHoverIn[5]).isFabric();
      const obj = hitSlop(delayHoverIn[5]);
    }
    let str = "transparent";
    let color;
    if (null != android_ripple) {
      color = android_ripple.color;
    }
    if (null != color) {
      str = color;
    }
    let tmp5 = str;
    if (!closure_16) {
      tmp5 = onLayout(str);
    }
    return tmp5;
  }, items12);
  let obj1 = { gesture: applyResult };
  const obj2 = {
    onLayout: onHoverIn((nativeEvent) => {
      if (null != onLayout) {
        onLayout(nativeEvent);
      }
      closure_20.current = nativeEvent.nativeEvent.layout;
    }, items13),
    accessible: false !== accessible,
    hitSlop: addInsetsResult,
    enabled: true !== disabled
  };
  let tmp31;
  const tmp27 = onHoverIn((nativeEvent) => {
    if (null != onLayout) {
      onLayout(nativeEvent);
    }
    closure_20.current = nativeEvent.nativeEvent.layout;
  }, items13);
  const tmp28 = android_ripple;
  const tmp29 = closure_14;
  if (null != android_disableSound) {
    tmp31 = android_disableSound;
  }
  obj2.touchSoundDisabled = tmp31;
  obj2.rippleColor = tmp26;
  let radius;
  if (null != android_ripple) {
    radius = android_ripple.radius;
  }
  let tmp33;
  if (null != radius) {
    tmp33 = radius;
  }
  obj2.rippleRadius = tmp33;
  const items14 = [{}, style];
  obj2.style = items14;
  let tmp34;
  if (closure_15) {
    tmp34 = onPress;
  }
  obj2.testOnly_onPress = tmp34;
  let tmp35;
  if (closure_15) {
    tmp35 = onPressIn;
  }
  obj2.testOnly_onPressIn = tmp35;
  let tmp36;
  if (closure_15) {
    tmp36 = onPressOut;
  }
  obj2.testOnly_onPressOut = tmp36;
  let tmp37;
  if (closure_15) {
    tmp37 = onLongPress;
  }
  obj2.testOnly_onLongPress = tmp37;
  const items15 = [childrenResult, null];
  obj2.children = items15;
  obj1.children = tmp29(pressRetentionOffset(delayHoverIn[12]), Object.assign({}, tmp, obj2));
  return tmp28(hitSlop(delayHoverIn[11]).GestureDetector, obj1);
};
