// Module ID: 5579
// Function ID: 5580
// Name: Pressable
// Dependencies: [32, 109, 19, 17, 21, 5454, 5559, 5560, 5561, 5562, 5580, 5554, 5473, 5552]
// Exports: default

// Module 5579 (Pressable)
import react_native from "react-native" /* 17 */;
import _mod5559 from "module_5559" /* 5559 */;
import react_native2 from "react-native" /* 5562 */;
import GestureObjects2 from "GestureObjects" /* 5580 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_5454 from "tagMessage" /* 5454 */;

let _undefined;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture", "ref"];
let react = react_mod;
({ useCallback: hasOwnProperty, useEffect: metroRequire, useMemo: metroImportDefault, useRef: metroImportAll, useState: c9 } = react);
react = react_mod;
const Platform = react_native.Platform;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = module_5454.isTestEnv();
let closure_14 = { code: "(function pnpm_PressableTsx1(event){let[hoverOutTimeout,delayHoverIn,hoverInTimeout,onHoverIn,gestureToPressableEvent]=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));})" };
let closure_15 = { code: "(function pnpm_PressableTsx2(event){let[hoverInTimeout,delayHoverOut,hoverOutTimeout,onHoverOut,gestureToPressableEvent]=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));})" };
let closure_16 = { code: "(function pnpm_PressableTsx3(event){let[gestureTouchToPressableEvent,stateMachine,StateMachineEvent]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);})" };
let closure_17 = { code: "(function pnpm_PressableTsx4(){let[Platform,isScreenReaderEnabled,stateMachine,handleFinalize]=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}})" };
let closure_18 = { code: "(function pnpm_PressableTsx5(event){let[gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);})" };
let closure_19 = { code: "(function pnpm_PressableTsx6(_event,success){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}})" };
let closure_20 = { code: "(function pnpm_PressableTsx7(event){let[Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}})" };
let closure_21 = { code: "(function pnpm_PressableTsx8(){let[Platform,isScreenReaderEnabled,stateMachine,StateMachineEvent,viewCenterToPressableEvent,dimensions]=this.__closure;if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);})" };
let closure_22 = { code: "(function pnpm_PressableTsx9(){let[Platform,stateMachine,StateMachineEvent]=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}})" };
let closure_23 = { code: "(function pnpm_PressableTsx10(_event,success){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}})" };

export default function _default(pressRetentionOffset) {
  let ButtonComponent;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blocksExternalGesture;
  let borderless;
  let children;
  let disabled;
  let foreground;
  let hitSlop;
  let items15;
  let items16;
  let obj6;
  let radius;
  let ref;
  let requireExternalGestureToFail;
  let simultaneousWithExternalGesture;
  let style;
  let testOnly_pressed;
  let tmp30;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
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
  ({ disabled, accessible, simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture, ref } = pressRetentionOffset);
  let tmp = delayLongPress(pressRetentionOffset, delayHoverIn);
  closure_14 = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  const tmp2 = onPressIn;
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  let tmp3 = delayHoverOut(tmp2(testOnly_pressed), 2);
  [tmp4, closure_15] = tmp3;
  ref = onPress(null);
  const ref2 = onPress(null);
  const ref3 = onPress(true);
  const ref4 = onPress(false);
  const ref5 = onPress({ width: 0, height: 0 });
  let items = [hitSlop];
  let tmp5 = onHoverOut(() => {
    let numberAsInsetResult;
    if (typeof hitSlop === "number") {
      const obj2 = _mod5559;
      numberAsInsetResult = obj2.numberAsInset(tmp);
    } else {
      numberAsInsetResult = tmp;
      if (hitSlop == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_21 = tmp5;
  let items1 = [pressRetentionOffset];
  const tmp6 = onHoverOut(() => {
    let numberAsInsetResult;
    if (typeof pressRetentionOffset === "number") {
      const obj2 = _mod5559;
      numberAsInsetResult = obj2.numberAsInset(tmp);
    } else {
      numberAsInsetResult = tmp;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  let obj = hitSlop(pressRetentionOffset[6]);
  const addInsetsResult = obj.addInsets(tmp5, tmp6);
  const tmp8 = unstable_pressDelay(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      ref3.current = true;
    }
  }, []);
  closure_23 = tmp8;
  let tmp9 = unstable_pressDelay(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  let closure_24 = tmp9;
  let items2 = [onLongPress, tmp8, delayLongPress];
  const tmp10 = unstable_pressDelay((arg0) => {
    let closure_0 = arg0;
    const tmp = onLongPress;
    if (tmp) {
      closure_23();
      let num = delayLongPress;
      const _setTimeout = setTimeout;
      const tmp4 = closure_16;
      if (delayLongPress == null) {
        num = 500;
      }
      tmp4.current = _setTimeout(() => {
        ref3.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  let closure_25 = tmp10;
  let items3 = [onPressIn, tmp10];
  const tmp11 = unstable_pressDelay((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_25(arg0);
    closure_15(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  let closure_26 = tmp11;
  let items4 = [tmp9, tmp8];
  const tmp12 = unstable_pressDelay(() => {
    ref4.current = false;
    closure_23();
    closure_24();
    closure_15(false);
  }, items4);
  let closure_27 = tmp12;
  let items5 = [tmp11, tmp5, unstable_pressDelay];
  const tmp13 = unstable_pressDelay((nativeEvent) => {
    let closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    const obj = hitSlop(pressRetentionOffset[6]);
    if (obj.isTouchWithinInset(ref5.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          closure_26(nativeEvent);
        }, tmp2);
      } else {
        closure_26(nativeEvent);
      }
    }
  }, items5);
  let closure_28 = tmp13;
  let items6 = [tmp12, tmp11, onPress, onPressOut];
  const tmp14 = unstable_pressDelay((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        closure_26(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      const tmp9 = ref3.current && flag;
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      closure_27();
    }
  }, items6);
  let closure_29 = tmp14;
  const tmp15 = onHoverOut(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const states = tmp15;
  let obj2 = hitSlop(pressRetentionOffset[8]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let items7 = [tmp13, tmp14, tmp15, isScreenReaderEnabled];
  const tmp17 = onHoverIn(() => {
    const obj = react_native2;
    states.setStates(obj.getStatesConfig(closure_28, closure_29, isScreenReaderEnabled));
  }, items7);
  let closure_32 = onPress(null);
  let closure_33 = onPress(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp15, tmp12, tmp14, isScreenReaderEnabled];
  const tmp18 = onHoverOut(() => {
    let tmp10;
    let tmp11;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const tmp = require;
    const GestureObjects = GestureObjects2.GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = HoverResult.manualActivation(true);
    const items = [closure_14, closure_33, delayHoverIn, closure_32, onHoverIn, ];
    const onBegin = manualActivationResult.cancelsTouchesInView(false).onBegin;
    const tmp4 = closure_33;
    const tmp5 = closure_32;
    manualActivationResult.cancelsTouchesInView(false);
    items[5] = _mod5559.gestureToPressableEvent;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
    function pnpm_PressableTsx1(arg0) {
      let closure_0;
      _undefined = arg0;
      if (_undefined.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (c1) {
        const _setTimeout = setTimeout;
        c2.current = setTimeout(() => {
          let tmpResult;
          if (c3 != null) {
            tmpResult = tmp(c4(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (c3 != null) {
        tmp5(_undefined2(arg0));
      }
    }
    const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
    pnpm_PressableTsx1.__closure = items1;
    pnpm_PressableTsx1.__workletHash = 2197594387164;
    pnpm_PressableTsx1.__initData = tmp6;
    const items2 = [closure_15, tmp5, delayHoverOut, tmp4, onHoverOut, ];
    const onFinalize = onBegin(pnpm_PressableTsx1).onFinalize;
    onBegin(pnpm_PressableTsx1);
    items2[5] = _mod5559.gestureToPressableEvent;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    function pnpm_PressableTsx2(arg0) {
      let closure_0;
      _undefined = arg0;
      if (_undefined.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (c1) {
        const _setTimeout = setTimeout;
        c2.current = setTimeout(() => {
          let tmpResult;
          if (c3 != null) {
            tmpResult = tmp(c4(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (c3 != null) {
        tmp5(_undefined2(arg0));
      }
    }
    const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
    pnpm_PressableTsx2.__closure = items3;
    pnpm_PressableTsx2.__workletHash = 15483873706614;
    pnpm_PressableTsx2.__initData = tmp13;
    return onFinalize(pnpm_PressableTsx2);
  }, items8);
  const items10 = [tmp15, tmp14, tmp12, isScreenReaderEnabled];
  const tmp19 = onHoverOut(() => {
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp = require;
    const GestureObjects = GestureObjects2.GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = LongPressResult.minDuration(module_5454.INT32_MAX);
    const maxDistanceResult = minDurationResult.maxDistance(module_5454.INT32_MAX);
    const items = [closure_16, , , ];
    const onTouchesDown = maxDistanceResult.cancelsTouchesInView(false).onTouchesDown;
    maxDistanceResult.cancelsTouchesInView(false);
    items[1] = _mod5559.gestureTouchToPressableEvent;
    items[2] = states;
    items[3] = react_native2.StateMachineEvent;
    [tmp5, tmp6, tmp7, tmp8] = items;
    function pnpm_PressableTsx3(arg0) {
      _undefined2.handleEvent(_undefined3.LONG_PRESS_TOUCHES_DOWN, _undefined(arg0));
    }
    const items1 = [tmp6, tmp7, tmp8];
    pnpm_PressableTsx3.__closure = items1;
    pnpm_PressableTsx3.__workletHash = 609256038395;
    pnpm_PressableTsx3.__initData = tmp5;
    const items2 = [closure_17, Platform, isScreenReaderEnabled, tmp4, closure_27];
    [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
    function pnpm_PressableTsx4() {
      const tmp = "android" !== _undefined.OS || c1;
      if (!tmp) {
        _undefined2.reset();
        _undefined3();
      }
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15];
    pnpm_PressableTsx4.__closure = items3;
    pnpm_PressableTsx4.__workletHash = 17273070663319;
    pnpm_PressableTsx4.__initData = tmp11;
    const onTouchesDownResult = onTouchesDown(pnpm_PressableTsx3);
    const items4 = [closure_18, , , ];
    const onTouchesCancelled = onTouchesDownResult.onTouchesUp(pnpm_PressableTsx4).onTouchesCancelled;
    onTouchesDownResult.onTouchesUp(pnpm_PressableTsx4);
    items4[1] = _mod5559.gestureTouchToPressableEvent;
    items4[2] = states;
    items4[3] = closure_29;
    [tmp17, tmp18, tmp19, tmp20] = items4;
    function pnpm_PressableTsx5(arg0) {
      const tmp = _undefined(arg0);
      _undefined2.reset();
      _undefined3(tmp, false);
    }
    const items5 = [tmp18, tmp19, tmp20];
    pnpm_PressableTsx5.__closure = items5;
    pnpm_PressableTsx5.__workletHash = 468722124596;
    pnpm_PressableTsx5.__initData = tmp17;
    const items6 = [closure_19, Platform, tmp4, , ];
    const onFinalize = onTouchesCancelled(pnpm_PressableTsx5).onFinalize;
    onTouchesCancelled(pnpm_PressableTsx5);
    items6[3] = react_native2.StateMachineEvent;
    items6[4] = closure_27;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
    function pnpm_PressableTsx6(arg0, arg1) {
      if ("web" === _undefined.OS) {
        const handleEvent = _undefined2.handleEvent;
        if (arg1) {
          handleEvent(_undefined.FINALIZE);
        } else {
          handleEvent(_undefined.CANCEL);
        }
        _undefined3();
      }
    }
    const items7 = [tmp23, tmp24, tmp25, tmp26];
    pnpm_PressableTsx6.__closure = items7;
    pnpm_PressableTsx6.__workletHash = 16463885478272;
    pnpm_PressableTsx6.__initData = tmp22;
    return onFinalize(pnpm_PressableTsx6);
  }, items9);
  const tmp20 = true !== disabled;
  let closure_34 = tmp20;
  const items11 = [
    onHoverOut(() => {
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp23;
      let tmp25;
      let tmp26;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmp = require;
      const GestureObjects = GestureObjects2.GestureObjects;
      const items = [closure_20, , , , ];
      items[1] = Platform;
      const onTouchesCancelled = GestureObjects.Native().onTouchesCancelled;
      GestureObjects.Native();
      items[2] = _mod5559.gestureTouchToPressableEvent;
      items[3] = states;
      items[4] = closure_29;
      [tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      function pnpm_PressableTsx7(arg0) {
        if ("macos" !== _undefined.OS) {
          if ("web" !== _undefined.OS) {
            const tmp3 = _undefined2(arg0);
            _undefined3.reset();
            _undefined4(tmp3, false);
          }
        }
      }
      const items1 = [tmp7, tmp8, tmp9, tmp10];
      pnpm_PressableTsx7.__closure = items1;
      pnpm_PressableTsx7.__workletHash = 10748986980398;
      pnpm_PressableTsx7.__initData = tmp6;
      const items2 = [closure_21, tmp4, isScreenReaderEnabled, tmp5, , , ];
      const onBegin = onTouchesCancelled(pnpm_PressableTsx7).onBegin;
      onTouchesCancelled(pnpm_PressableTsx7);
      items2[4] = react_native2.StateMachineEvent;
      items2[5] = _mod5559.viewCenterToPressableEvent;
      items2[6] = closure_20;
      let c4;
      let c5;
      [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
      function pnpm_PressableTsx8() {
        if ("android" === _undefined.OS) {
          const tmp = c1;
          if (tmp) {
            _undefined2.handleEvent(_undefined3.NATIVE_BEGIN, _undefined4(_undefined5.current));
          }
        }
        _undefined2.handleEvent(_undefined3.NATIVE_BEGIN);
      }
      const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
      pnpm_PressableTsx8.__closure = items3;
      pnpm_PressableTsx8.__workletHash = 5621213784566;
      pnpm_PressableTsx8.__initData = tmp12;
      const items4 = [closure_22, tmp4, tmp5, ];
      const onStart = onBegin(pnpm_PressableTsx8).onStart;
      onBegin(pnpm_PressableTsx8);
      items4[3] = react_native2.StateMachineEvent;
      [tmp20, tmp21, tmp22, tmp23] = items4;
      function pnpm_PressableTsx9() {
        if ("android" !== _undefined.OS) {
          _undefined2.handleEvent(_undefined3.NATIVE_START);
        }
      }
      const items5 = [tmp21, tmp22, tmp23];
      pnpm_PressableTsx9.__closure = items5;
      pnpm_PressableTsx9.__workletHash = 1749228919026;
      pnpm_PressableTsx9.__initData = tmp20;
      const items6 = [closure_23, tmp4, tmp5, , ];
      const onFinalize = onStart(pnpm_PressableTsx9).onFinalize;
      onStart(pnpm_PressableTsx9);
      items6[3] = react_native2.StateMachineEvent;
      items6[4] = closure_27;
      let c0;
      let c1;
      let c2;
      let c3;
      [tmp25, tmp26, tmp27, tmp28, tmp29] = items6;
      function pnpm_PressableTsx10(arg0, arg1) {
        if ("web" !== _undefined.OS) {
          const handleEvent = _undefined2.handleEvent;
          if (arg1) {
            handleEvent(_undefined.FINALIZE);
          } else {
            handleEvent(_undefined.CANCEL);
          }
          if ("ios" !== tmp.OS) {
            _undefined3();
          }
        }
      }
      const items7 = [tmp26, tmp27, tmp28, tmp29];
      pnpm_PressableTsx10.__closure = items7;
      pnpm_PressableTsx10.__workletHash = 15562564620826;
      pnpm_PressableTsx10.__initData = tmp25;
      const onFinalizeResult = onFinalize(pnpm_PressableTsx10);
      return onFinalizeResult.shouldActivateOnStart(false);
    }, items10),
    tmp19,
    tmp18
  ];
  function _loop(iter) {
    let closure_0 = iter;
    iter.enabled(closure_34);
    iter.runOnJS(true);
    iter.hitSlop(addInsetsResult);
    const entries = Object.entries(closure_14);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = hitSlop(pressRetentionOffset[11]);
      obj.applyRelationProp(closure_0, tmp, tmp2);
    });
  }
  const iter = items11[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  const tmp22 = hitSlop;
  const tmp23 = pressRetentionOffset;
  let GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
  const items12 = [...items11];
  let style1 = style;
  const applyResult = GestureObjects.Simultaneous.apply(items12);
  if (typeof style === "function") {
    const obj3 = { pressed: tmp4 };
    style1 = style(obj3);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { pressed: tmp4 };
    childrenResult = children(obj4);
  }
  const items13 = [android_ripple];
  const items14 = [onLayout];
  const tmp27 = onHoverOut(() => {
    let color;
    if (android_ripple != null) {
      color = tmp.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items13);
  const tmp28 = unstable_pressDelay((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    ref5.current = nativeEvent.nativeEvent.layout;
  }, items14);
  const tmp29 = onLongPress;
  const obj5 = { gesture: applyResult, children: tmp30(ButtonComponent, obj6) };
  const GestureDetector = tmp22(tmp23[12]).GestureDetector;
  obj6 = { ref, needsOffscreenAlphaCompositing: true, onLayout: tmp28, accessible: false !== accessible, hitSlop: addInsetsResult, enabled: tmp20, touchSoundDisabled: android_disableSound, rippleColor: tmp27, rippleRadius: radius, borderless, foreground, style: items15, testOnly_onPress: tmp36, testOnly_onPressIn: tmp37, testOnly_onPressOut: tmp38, testOnly_onLongPress: tmp39, testOnly_onHoverIn: tmp40, testOnly_onHoverOut: tmp41, children: items16 };
  ButtonComponent = tmp22(tmp23[13]).ButtonComponent;
  const merged = Object.assign(tmp);
  radius = undefined;
  tmp30 = onLayout;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  borderless = undefined;
  if (android_ripple != null) {
    borderless = android_ripple.borderless;
  }
  foreground = undefined;
  if (android_ripple != null) {
    foreground = android_ripple.foreground;
  }
  items15 = [{}, style1];
  tmp36 = undefined;
  if (android_ripple) {
    tmp36 = onPress;
  }
  tmp37 = undefined;
  if (android_ripple) {
    tmp37 = onPressIn;
  }
  tmp38 = undefined;
  if (android_ripple) {
    tmp38 = onPressOut;
  }
  tmp39 = undefined;
  if (android_ripple) {
    tmp39 = onLongPress;
  }
  tmp40 = undefined;
  if (android_ripple) {
    tmp40 = onHoverIn;
  }
  tmp41 = undefined;
  if (android_ripple) {
    tmp41 = onHoverOut;
  }
  items16 = [childrenResult, null];
  return tmp29(GestureDetector, obj5);
};
