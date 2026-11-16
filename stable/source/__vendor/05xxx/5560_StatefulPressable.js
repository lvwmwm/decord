// Module ID: 5560
// Function ID: 5561
// Name: StatefulPressable
// Dependencies: [32, 109, 19, 17, 21, 5456, 5527, 5561, 5562, 5563, 5564, 5565, 5556, 5464, 5462]
// Exports: default

// Module 5560 (StatefulPressable)
import react_native from "react-native" /* 17 */;
import JSResponderContext from "JSResponderContext" /* 5527 */;
import _mod5561 from "module_5561" /* 5561 */;
import react_native2 from "react-native" /* 5564 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_5456 from "tagMessage" /* 5456 */;

let _undefined, closure_10;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWith", "requireToFail", "block", "ref", "immediatePressOut"];
let react = react_mod;
({ use: hasOwnProperty, useCallback: metroRequire, useEffect: metroImportDefault, useMemo: metroImportAll, useRef: c9, useState: c10 } = react);
react = react_mod;
const Platform = react_native.Platform;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = module_5456.isTestEnv();
let closure_15 = { code: "(function pnpm_StatefulPressableTsx1(event){let[hoverOutTimeout,delayHoverIn,hoverInTimeout,onHoverIn,gestureToPressableEvent]=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));})" };
let closure_16 = { code: "(function pnpm_StatefulPressableTsx2(event){let[hoverInTimeout,delayHoverOut,hoverOutTimeout,onHoverOut,gestureToPressableEvent]=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));})" };
let closure_17 = { code: "(function pnpm_StatefulPressableTsx3(event){let[captureKeyboardDismiss,dropKeyboardTapRef,gestureTouchToPressableEvent,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);})" };
let closure_18 = { code: "(function pnpm_StatefulPressableTsx4(){let[Platform,isScreenReaderEnabled,stateMachine,handleFinalize]=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}})" };
let closure_19 = { code: "(function pnpm_StatefulPressableTsx5(event){let[gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);})" };
let closure_20 = { code: "(function pnpm_StatefulPressableTsx6(event){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS!=='web'){return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})" };
let closure_21 = { code: "(function pnpm_StatefulPressableTsx7(event){let[Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}})" };
let closure_22 = { code: "(function pnpm_StatefulPressableTsx8(){let[captureKeyboardDismiss,dropKeyboardTapRef,Platform,handlePressIn,viewCenterToPressableEvent,dimensions,isScreenReaderEnabled,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}if(Platform.isTV){handlePressIn(viewCenterToPressableEvent(dimensions.current),true);return;}if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);})" };
let closure_23 = { code: "(function pnpm_StatefulPressableTsx9(){let[Platform,stateMachine,StateMachineEvent]=this.__closure;if(!Platform.isTV&&Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}})" };
let closure_24 = { code: "(function pnpm_StatefulPressableTsx10(event){let[Platform,handlePressOut,viewCenterToPressableEvent,dimensions,handleFinalize,stateMachine,StateMachineEvent]=this.__closure;if(Platform.OS==='web'){return;}if(Platform.isTV){handlePressOut(viewCenterToPressableEvent(dimensions.current),!event.canceled);handleFinalize();return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})" };

export default function _default(pressRetentionOffset) {
  let PureNativeButton;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let block;
  let borderless;
  let children;
  let delayHoverIn;
  let delayHoverOut;
  let disabled;
  let foreground;
  let hitSlop;
  let immediatePressOut;
  let items31;
  let items32;
  let obj9;
  let onHoverIn;
  let onHoverOut;
  let onPress;
  let pnpm_StatefulPressableTsx1;
  let pnpm_StatefulPressableTsx10;
  let pnpm_StatefulPressableTsx2;
  let pnpm_StatefulPressableTsx3;
  let pnpm_StatefulPressableTsx4;
  let pnpm_StatefulPressableTsx5;
  let pnpm_StatefulPressableTsx6;
  let pnpm_StatefulPressableTsx7;
  let pnpm_StatefulPressableTsx8;
  let pnpm_StatefulPressableTsx9;
  let radius;
  let ref;
  let requireToFail;
  let simultaneousWith;
  let style;
  let testOnly_pressed;
  let tmp102;
  let tmp109;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp113;
  let tmp114;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  const delayLongPress = pressRetentionOffset.delayLongPress;
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  ({ onHoverIn, onHoverOut, onPress } = pressRetentionOffset);
  const onPressIn = pressRetentionOffset.onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  const onLayout = pressRetentionOffset.onLayout;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ simultaneousWith, requireToFail, block, immediatePressOut } = pressRetentionOffset);
  ({ delayHoverIn, delayHoverOut, disabled, accessible, ref } = pressRetentionOffset);
  let tmp = onPress(pressRetentionOffset, delayLongPress);
  const tmp2 = unstable_pressDelay(closure_10(false), 2);
  closure_10 = tmp2[1];
  const first = tmp2[0];
  ref = android_ripple(null);
  const ref2 = android_ripple(null);
  const ref3 = android_ripple(true);
  let tmp4 = hitSlop;
  const tmp5 = pressRetentionOffset;
  const tmp6 = onPressIn(hitSlop(pressRetentionOffset[6]).JSResponderContext);
  closure_14 = tmp6;
  const ref4 = android_ripple(false);
  const tmp7 = android_ripple({ width: 0, height: 0 });
  const ref5 = tmp7;
  const tmp8 = android_ripple(null);
  const ref6 = tmp8;
  const items = [hitSlop];
  let tmp9 = onLayout;
  const tmp10 = onLayout(() => {
    let numberAsInsetResult;
    if (typeof hitSlop === "number") {
      const obj2 = _mod5561;
      numberAsInsetResult = obj2.numberAsInset(tmp);
    } else {
      numberAsInsetResult = tmp;
      if (hitSlop == null) {
        const obj = _mod5561;
        numberAsInsetResult = obj.numberAsInset(0);
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_18 = tmp10;
  const items1 = [pressRetentionOffset];
  const tmp11 = onLayout(() => {
    let numberAsInsetResult;
    if (typeof pressRetentionOffset === "number") {
      const obj2 = _mod5561;
      numberAsInsetResult = obj2.numberAsInset(tmp);
    } else {
      numberAsInsetResult = tmp;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  let obj = hitSlop(pressRetentionOffset[7]);
  const addInsetsResult = obj.addInsets(tmp10, tmp11);
  const tmp14 = onPressOut(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      ref3.current = true;
    }
  }, []);
  closure_19 = tmp14;
  const tmp15 = onPressOut(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  closure_20 = tmp15;
  const items2 = [onLongPress, tmp14, delayLongPress];
  const tmp16 = onPressOut((arg0) => {
    let closure_0 = arg0;
    const tmp = onLongPress;
    if (tmp) {
      closure_19();
      let num = delayLongPress;
      const _setTimeout = setTimeout;
      const tmp4 = closure_11;
      if (delayLongPress == null) {
        num = 500;
      }
      tmp4.current = _setTimeout(() => {
        ref3.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  closure_21 = tmp16;
  const items3 = [onPressIn, tmp16];
  const tmp17 = onPressOut((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_21(arg0);
    closure_10(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  closure_22 = tmp17;
  const items4 = [tmp15, tmp14];
  const tmp18 = onPressOut(() => {
    ref4.current = false;
    ref6.current = null;
    closure_19();
    closure_20();
    closure_10(false);
  }, items4);
  closure_23 = tmp18;
  const items5 = [tmp6];
  const tmp19 = onPressOut(() => {
    if (ref6.current == null) {
      const obj = JSResponderContext;
      tmp.current = obj.isKeyboardDismissingTap(closure_14);
    }
  }, items5);
  const items6 = [tmp17, tmp10, unstable_pressDelay];
  const tmp20 = onPressOut((nativeEvent) => {
    let closure_0 = nativeEvent;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (!flag) {
      const changedTouches = nativeEvent.nativeEvent.changedTouches;
      const obj = hitSlop(pressRetentionOffset[7]);
      flag = obj.isTouchWithinInset(ref5.current, closure_18, changedTouches.at(-1));
    }
    if (flag) {
      closure_15.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_12.current = setTimeout(() => {
          closure_22(nativeEvent);
        }, tmp6);
      } else {
        closure_22(nativeEvent);
      }
    }
  }, items6);
  closure_24 = tmp20;
  const items7 = [tmp18, tmp17, onPress, onPressOut];
  const tmp21 = onPressOut((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        closure_22(arg0);
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
      closure_23();
    }
  }, items7);
  let closure_25 = tmp21;
  const tmp22 = onLayout(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const states = tmp22;
  let obj2 = hitSlop(pressRetentionOffset[9]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items8 = [tmp20, tmp21, tmp22, isScreenReaderEnabled];
  onLongPress(() => {
    const obj = react_native2;
    states.setStates(obj.getStatesConfig(closure_24, closure_25, isScreenReaderEnabled));
  }, items8);
  const tmp25 = android_ripple(null);
  let closure_28 = tmp25;
  const tmp26 = android_ripple(null);
  let closure_29 = tmp26;
  onLongPress(() => () => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (ref2.current) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp4.current);
    }
    if (ref3.current) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(tmp7.current);
    }
    if (ref4.current) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(tmp10.current);
    }
  }, []);
  const items9 = [ref4, tmp26, delayHoverIn, tmp25, onHoverIn, ];
  const useHoverGesture = hitSlop(pressRetentionOffset[11]).useHoverGesture;
  hitSlop(pressRetentionOffset[11]);
  items9[5] = hitSlop(pressRetentionOffset[7]).gestureToPressableEvent;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items9;
  const obj3 = { manualActivation: true, cancelsTouchesInView: false, onBegin: pnpm_StatefulPressableTsx1, onFinalize: pnpm_StatefulPressableTsx2, enabled: true !== disabled, disableReanimated: true, simultaneousWith, block, requireToFail, hitSlop: addInsetsResult };
  pnpm_StatefulPressableTsx1 = function pnpm_StatefulPressableTsx1(arg0) {
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
  };
  const items10 = [tmp30, tmp31, tmp32, tmp33, tmp34];
  pnpm_StatefulPressableTsx1.__closure = items10;
  pnpm_StatefulPressableTsx1.__workletHash = 3655104435508;
  pnpm_StatefulPressableTsx1.__initData = tmp29;
  const items11 = [ref5, tmp25, delayHoverOut, tmp26, onHoverOut, tmp4(tmp5[7]).gestureToPressableEvent];
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items11;
  pnpm_StatefulPressableTsx2 = function pnpm_StatefulPressableTsx2(arg0) {
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
  };
  const items12 = [tmp36, tmp37, tmp38, tmp39, tmp40];
  pnpm_StatefulPressableTsx2.__closure = items12;
  pnpm_StatefulPressableTsx2.__workletHash = 1799471960094;
  pnpm_StatefulPressableTsx2.__initData = tmp35;
  const hoverGesture = useHoverGesture(obj3);
  const tmp4Result = tmp4(tmp5[11]);
  const useLongPressGesture = tmp4Result.useLongPressGesture;
  const obj4 = { minDuration: tmp4(tmp5[5]).INT32_MAX, maxDistance: tmp4(tmp5[5]).INT32_MAX, cancelsTouchesInView: false, onTouchesDown: pnpm_StatefulPressableTsx3, onTouchesUp: pnpm_StatefulPressableTsx4, onTouchesCancel: pnpm_StatefulPressableTsx5, onFinalize: pnpm_StatefulPressableTsx6, enabled: true !== disabled, disableReanimated: true, simultaneousWith, block, requireToFail, hitSlop: addInsetsResult };
  const items13 = [ref6, tmp19, tmp8, tmp4(tmp5[7]).gestureTouchToPressableEvent, tmp22, tmp4(tmp5[10]).StateMachineEvent];
  [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items13;
  pnpm_StatefulPressableTsx3 = function pnpm_StatefulPressableTsx3(arg0) {
    _undefined();
    if (!_undefined2.current) {
      _undefined4.handleEvent(_undefined5.LONG_PRESS_TOUCHES_DOWN, _undefined3(arg0));
    }
  };
  const items14 = [tmp45, tmp46, tmp47, tmp48, tmp49];
  pnpm_StatefulPressableTsx3.__closure = items14;
  pnpm_StatefulPressableTsx3.__workletHash = 7237086242263;
  pnpm_StatefulPressableTsx3.__initData = tmp44;
  const items15 = [closure_18, ref, isScreenReaderEnabled, tmp22, tmp18];
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items15;
  pnpm_StatefulPressableTsx4 = function pnpm_StatefulPressableTsx4() {
    const tmp = "android" !== _undefined.OS || c1;
    if (!tmp) {
      _undefined2.reset();
      _undefined3();
    }
  };
  const items16 = [tmp52, tmp53, tmp54, tmp55];
  pnpm_StatefulPressableTsx4.__closure = items16;
  pnpm_StatefulPressableTsx4.__workletHash = 16099665781823;
  pnpm_StatefulPressableTsx4.__initData = tmp51;
  const items17 = [closure_19, tmp4(tmp5[7]).gestureTouchToPressableEvent, tmp22, tmp21];
  [tmp56, tmp57, tmp58, tmp59] = items17;
  pnpm_StatefulPressableTsx5 = function pnpm_StatefulPressableTsx5(arg0) {
    const tmp = _undefined(arg0);
    _undefined2.reset();
    _undefined3(tmp, false);
  };
  const items18 = [tmp57, tmp58, tmp59];
  pnpm_StatefulPressableTsx5.__closure = items18;
  pnpm_StatefulPressableTsx5.__workletHash = 4719517475932;
  pnpm_StatefulPressableTsx5.__initData = tmp56;
  const items19 = [closure_20, ref, tmp22, tmp4(tmp5[10]).StateMachineEvent, tmp18];
  [tmp60, tmp61, tmp62, tmp63, tmp64] = items19;
  pnpm_StatefulPressableTsx6 = function pnpm_StatefulPressableTsx6(canceled) {
    if ("web" === _undefined.OS) {
      _undefined2.handleEvent(canceled.canceled ? _undefined.CANCEL : _undefined.FINALIZE);
      _undefined3();
    }
  };
  const items20 = [tmp61, tmp62, tmp63, tmp64];
  pnpm_StatefulPressableTsx6.__closure = items20;
  pnpm_StatefulPressableTsx6.__workletHash = 14251064846759;
  pnpm_StatefulPressableTsx6.__initData = tmp60;
  const longPressGesture = useLongPressGesture(obj4);
  const items21 = [closure_21, ref, , , ];
  const useNativeGesture = tmp4(tmp5[11]).useNativeGesture;
  tmp4(tmp5[11]);
  items21[2] = tmp4(tmp5[7]).gestureTouchToPressableEvent;
  items21[3] = tmp22;
  items21[4] = tmp21;
  [tmp67, tmp68, tmp69, tmp70, tmp71] = items21;
  const obj5 = { onTouchesCancel: pnpm_StatefulPressableTsx7, onBegin: pnpm_StatefulPressableTsx8, onActivate: pnpm_StatefulPressableTsx9, onFinalize: pnpm_StatefulPressableTsx10, enabled: true !== disabled, disableReanimated: true, simultaneousWith, block, requireToFail, hitSlop: addInsetsResult, shouldActivateOnStart: false };
  pnpm_StatefulPressableTsx7 = function pnpm_StatefulPressableTsx7(arg0) {
    if ("macos" !== _undefined.OS) {
      if ("web" !== _undefined.OS) {
        const tmp3 = _undefined2(arg0);
        _undefined3.reset();
        _undefined4(tmp3, false);
      }
    }
  };
  const items22 = [tmp68, tmp69, tmp70, tmp71];
  pnpm_StatefulPressableTsx7.__closure = items22;
  pnpm_StatefulPressableTsx7.__workletHash = 3579970117830;
  pnpm_StatefulPressableTsx7.__initData = tmp67;
  const items23 = [closure_22, tmp19, tmp8, ref, tmp20, tmp4(tmp5[7]).viewCenterToPressableEvent, tmp7, isScreenReaderEnabled, tmp22, tmp4(tmp5[10]).StateMachineEvent];
  let c7;
  let c8;
  [tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81] = items23;
  pnpm_StatefulPressableTsx8 = function pnpm_StatefulPressableTsx8() {
    _undefined();
    if (!_undefined2.current) {
      if (_undefined3.isTV) {
        _undefined4(_undefined5(_undefined6.current), true);
      } else {
        if ("android" === tmp2.OS) {
          const tmp3 = c6;
          if (tmp3) {
            _undefined7.handleEvent(_undefined8.NATIVE_BEGIN, _undefined5(_undefined6.current));
          }
        }
        _undefined7.handleEvent(_undefined8.NATIVE_BEGIN);
      }
    }
  };
  const items24 = [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81];
  pnpm_StatefulPressableTsx8.__closure = items24;
  pnpm_StatefulPressableTsx8.__workletHash = 11546367468319;
  pnpm_StatefulPressableTsx8.__initData = tmp72;
  const items25 = [closure_23, ref, tmp22, tmp4(tmp5[10]).StateMachineEvent];
  [tmp82, tmp83, tmp84, tmp85] = items25;
  pnpm_StatefulPressableTsx9 = function pnpm_StatefulPressableTsx9() {
    const isTV = _undefined.isTV || "android" === _undefined.OS;
    if (!isTV) {
      _undefined2.handleEvent(_undefined3.NATIVE_START);
    }
  };
  const items26 = [tmp83, tmp84, tmp85];
  pnpm_StatefulPressableTsx9.__closure = items26;
  pnpm_StatefulPressableTsx9.__workletHash = 4962601206002;
  pnpm_StatefulPressableTsx9.__initData = tmp82;
  const items27 = [closure_24, ref, tmp21, tmp4(tmp5[7]).viewCenterToPressableEvent, tmp7, tmp18, tmp22, tmp4(tmp5[10]).StateMachineEvent];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93] = items27;
  pnpm_StatefulPressableTsx10 = function pnpm_StatefulPressableTsx10(canceled) {
    if ("web" !== _undefined.OS) {
      if (tmp.isTV) {
        _undefined2(_undefined3(_undefined4.current), !canceled.canceled);
        _undefined5();
      } else {
        _undefined6.handleEvent(canceled.canceled ? _undefined.CANCEL : _undefined.FINALIZE);
        _undefined5();
      }
    }
  };
  const items28 = [tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93];
  pnpm_StatefulPressableTsx10.__closure = items28;
  pnpm_StatefulPressableTsx10.__workletHash = 10604054146638;
  pnpm_StatefulPressableTsx10.__initData = tmp86;
  const nativeGesture = useNativeGesture(obj5);
  const tmp4Result5 = tmp4(tmp5[11]);
  const simultaneousGestures = tmp4Result5.useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture);
  const tmp13 = onPressOut;
  if (testOnly_pressed == null) {
    testOnly_pressed = first;
  }
  let style1 = style;
  if (typeof style === "function") {
    const obj6 = { pressed: testOnly_pressed };
    style1 = style(obj6);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj7 = { pressed: testOnly_pressed };
    childrenResult = children(obj7);
  }
  const items29 = [android_ripple];
  const items30 = [onLayout];
  const tmp9Result = tmp9(() => {
    let color;
    if (android_ripple != null) {
      color = tmp.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items29);
  const tmp13Result = tmp13((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    ref5.current = nativeEvent.nativeEvent.layout;
  }, items30);
  const tmp4Result6 = tmp4(tmp5[12]);
  const tVProps = tmp4Result6.getTVProps(tmp);
  const obj8 = { gesture: simultaneousGestures, children: tmp102(PureNativeButton, obj9) };
  const GestureDetector = tmp4(tmp5[13]).GestureDetector;
  obj9 = { ref, onLayout: tmp13Result, accessible: false !== accessible, hitSlop: addInsetsResult, enabled: true !== disabled, touchSoundDisabled: android_disableSound, rippleColor: tmp9Result, rippleRadius: radius, borderless, foreground, style: items31, testOnly_onPress: tmp109, testOnly_onPressIn: tmp110, testOnly_onPressOut: tmp111, testOnly_onLongPress: tmp112, testOnly_onHoverIn: tmp113, testOnly_onHoverOut: tmp114, children: items32 };
  PureNativeButton = tmp4(tmp5[14]).PureNativeButton;
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(tVProps);
  radius = undefined;
  const tmp101 = ref2;
  tmp102 = ref3;
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
  items31 = [{}, style1];
  tmp109 = undefined;
  if (closure_14) {
    tmp109 = onPress;
  }
  tmp110 = undefined;
  if (closure_14) {
    tmp110 = onPressIn;
  }
  tmp111 = undefined;
  if (closure_14) {
    tmp111 = onPressOut;
  }
  tmp112 = undefined;
  if (closure_14) {
    tmp112 = onLongPress;
  }
  tmp113 = undefined;
  if (closure_14) {
    tmp113 = onHoverIn;
  }
  tmp114 = undefined;
  if (closure_14) {
    tmp114 = onHoverOut;
  }
  items32 = [childrenResult, null];
  return tmp101(GestureDetector, obj8);
};
