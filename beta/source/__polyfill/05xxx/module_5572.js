// Module ID: 5572
// Function ID: 5573
// Dependencies: [32, 109, 19, 17, 21, 5474, 5527, 5556, 5554, 5532]
// Exports: Touchable

// Module 5572
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import JSResponderContext from "JSResponderContext" /* 5527 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["underlayColor", "defaultUnderlayOpacity", "activeUnderlayOpacity", "defaultOpacity", "animationDuration", "androidRipple", "delayLongPress", "onLongPress", "onPress", "onPressIn", "onPressOut", "onHoverIn", "onHoverOut", "children", "disabled", "cancelOnLeave", "immediatePressOut", "ref"];
let react = react_mod;
({ use: metroRequire, useCallback: metroImportDefault, useMemo: metroImportAll, useRef: c9, useState: c10 } = react);
react = react_mod;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_12 = { rippleColor: "transparent" };

export const Touchable = (underlayColor) => {
  let androidRipple;
  let animationDuration;
  let borderless;
  let delayLongPress;
  let foreground;
  let hitSlop;
  let num10;
  let num11;
  let num8;
  let num9;
  let obj;
  let radius;
  let tmp19Result2;
  let tmp30;
  underlayColor = underlayColor.underlayColor;
  let str = "transparent";
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const defaultUnderlayOpacity = underlayColor.defaultUnderlayOpacity;
  let num = 0;
  if (undefined !== defaultUnderlayOpacity) {
    num = defaultUnderlayOpacity;
  }
  const activeUnderlayOpacity = underlayColor.activeUnderlayOpacity;
  let num2 = 0.105;
  if (undefined !== activeUnderlayOpacity) {
    num2 = activeUnderlayOpacity;
  }
  const defaultOpacity = underlayColor.defaultOpacity;
  let num3 = 1;
  if (undefined !== defaultOpacity) {
    num3 = defaultOpacity;
  }
  ({ animationDuration, androidRipple, delayLongPress } = underlayColor);
  let num4 = 600;
  if (undefined !== delayLongPress) {
    num4 = delayLongPress;
  }
  const onLongPress = underlayColor.onLongPress;
  const onPress = underlayColor.onPress;
  const onPressIn = underlayColor.onPressIn;
  const onPressOut = underlayColor.onPressOut;
  const onHoverIn = underlayColor.onHoverIn;
  const onHoverOut = underlayColor.onHoverOut;
  let disabled = underlayColor.disabled;
  let tmp = undefined !== disabled;
  const children = underlayColor.children;
  if (tmp) {
    tmp = disabled;
  }
  disabled = tmp;
  const cancelOnLeave = underlayColor.cancelOnLeave;
  const immediatePressOut = underlayColor.immediatePressOut;
  let ref = underlayColor.ref;
  const tmp2 = undefined === cancelOnLeave || cancelOnLeave;
  const tmp3 = undefined === immediatePressOut || immediatePressOut;
  const tmp5 = onHoverOut(underlayColor, onPressOut);
  const first = onHoverIn(closure_10(() => {
    const obj = onLongPress(onPressIn[5]);
    return obj.getNextHandlerTag();
  }), 1)[0];
  if (undefined === animationDuration) {
    obj = { tapAnimationInDuration: 50, tapAnimationOutDuration: 100, longPressAnimationOutDuration: 100, hoverAnimationInDuration: 50, hoverAnimationOutDuration: 100 };
  } else if (typeof animationDuration === "number") {
    const _Number6 = Number;
    let num12 = 0;
    if (Number.isFinite(animationDuration)) {
      num12 = 0;
      if (animationDuration >= 0) {
        num12 = animationDuration;
      }
    }
    obj = { tapAnimationInDuration: num12, tapAnimationOutDuration: num12, longPressAnimationOutDuration: num12, hoverAnimationInDuration: num12, hoverAnimationOutDuration: num12 };
    const obj2 = { tapAnimationInDuration: num12, tapAnimationOutDuration: num12, longPressAnimationOutDuration: num12, hoverAnimationInDuration: num12, hoverAnimationOutDuration: num12 };
  } else {
    let num5 = 0;
    if ("in" in animationDuration) {
      num5 = animationDuration.in;
    }
    let num6 = 0;
    if ("out" in animationDuration) {
      num6 = animationDuration.out;
    }
    const tap = animationDuration.tap;
    let out;
    if (tap != null) {
      out = tap.out;
    }
    if (out == null) {
      out = num6;
    }
    const tap2 = animationDuration.tap;
    let _in;
    if (tap2 != null) {
      _in = tap2.in;
    }
    if (_in == null) {
      _in = num5;
    }
    const _Number = Number;
    let num7 = 0;
    if (Number.isFinite(_in)) {
      num7 = 0;
      if (_in >= 0) {
        num7 = _in;
      }
    }
    obj = { tapAnimationInDuration: num7, tapAnimationOutDuration: num8, longPressAnimationOutDuration: num9, hoverAnimationInDuration: num10, hoverAnimationOutDuration: num11 };
    const _Number2 = Number;
    num8 = 0;
    if (Number.isFinite(out)) {
      num8 = 0;
      if (out >= 0) {
        num8 = out;
      }
    }
    const longPress = animationDuration.longPress;
    let out1;
    if (longPress != null) {
      out1 = longPress.out;
    }
    if (out1 == null) {
      out1 = out;
    }
    const _Number3 = Number;
    num9 = 0;
    if (Number.isFinite(out1)) {
      num9 = 0;
      if (out1 >= 0) {
        num9 = out1;
      }
    }
    const hover = animationDuration.hover;
    let _in1;
    if (hover != null) {
      _in1 = hover.in;
    }
    if (_in1 == null) {
      _in1 = num5;
    }
    const _Number4 = Number;
    num10 = 0;
    if (Number.isFinite(_in1)) {
      num10 = 0;
      if (_in1 >= 0) {
        num10 = _in1;
      }
    }
    const hover2 = animationDuration.hover;
    let out2;
    if (hover2 != null) {
      out2 = hover2.out;
    }
    if (out2 == null) {
      out2 = num6;
    }
    const _Number5 = Number;
    num11 = 0;
    if (Number.isFinite(out2)) {
      num11 = 0;
      if (out2 >= 0) {
        num11 = out2;
      }
    }
  }
  let num13 = 0;
  if (Number.isFinite(num4)) {
    num13 = 0;
    if (num4 >= 0) {
      num13 = num4;
    }
  }
  const tmp21 = disabled(onLongPress(onPressIn[6]).JSResponderContext);
  let closure_7 = tmp21;
  let closure_8 = closure_9(null);
  const items = [tmp, tmp21];
  const items1 = [onPress];
  const items2 = [tmp21, onPressIn];
  const items3 = [onPressOut];
  const tmp22 = closure_7(() => {
    const tmp = disabled;
    if (!tmp) {
      const obj = JSResponderContext;
      const result = obj.updateResponderEventValue(closure_7, true);
    }
    return false;
  }, items);
  const items4 = [onLongPress];
  const tmp23 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onPress != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items1);
  const items5 = [onHoverIn];
  const tmp24 = closure_7((nativeEvent) => {
    if (closure_8.current == null) {
      const obj = JSResponderContext;
      closure_8.current = obj.isKeyboardDismissingTap(closure_7);
    }
    if (!closure_8.current) {
      if (onPressIn != null) {
        tmp5(nativeEvent.nativeEvent);
      }
    }
  }, items2);
  const items6 = [onHoverOut];
  const tmp25 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onPressOut != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items3);
  const tmp26 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onLongPress != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items4);
  const tmp27 = closure_8(() => {
    let fn;
    if (onHoverIn) {
      fn = (nativeEvent) => onHoverIn(nativeEvent.nativeEvent);
    }
    return fn;
  }, items5);
  const tmp28 = closure_8(() => {
    let fn;
    if (onHoverOut) {
      fn = (nativeEvent) => onHoverOut(nativeEvent.nativeEvent);
    }
    return fn;
  }, items6);
  const tmp29 = closure_7(() => {
    closure_8.current = null;
  }, []);
  if (undefined !== androidRipple) {
    let color;
    if (androidRipple != null) {
      color = androidRipple.color;
    }
    const obj3 = { rippleColor: color, rippleRadius: radius, borderless, foreground };
    radius = undefined;
    if (androidRipple != null) {
      radius = androidRipple.radius;
    }
    borderless = undefined;
    if (androidRipple != null) {
      borderless = androidRipple.borderless;
    }
    foreground = undefined;
    if (androidRipple != null) {
      foreground = androidRipple.foreground;
    }
    tmp30 = obj3;
  } else {
    tmp30 = closure_12;
  }
  const tmp19Result = onLongPress(onPressIn[7]);
  const tVProps = tmp19Result.getTVProps(tmp5);
  if (typeof underlayColor.hitSlop === "number") {
    const rect = { top: null, left: null, bottom: null, right: null };
    ({ hitSlop: obj5.top, hitSlop: obj5.left, hitSlop: obj5.bottom, hitSlop: obj5.right } = underlayColor);
    hitSlop = rect;
  } else {
    hitSlop = underlayColor.hitSlop;
  }
  const obj4 = { ref, enabled: !tmp, onStartShouldSetResponderCapture: tmp22, moduleId: tmp19Result2.getModuleId(), handlerTag: first, cancelOnLeave: tmp2, gestureTestID: underlayColor.testID, gestureHitSlop: hitSlop, defaultOpacity: num3, defaultUnderlayOpacity: num, activeUnderlayOpacity: num2, underlayColor: str, longPressDuration: num13, immediatePressOut: tmp3, hasLongPressHandler: undefined !== onLongPress, onButtonPress: tmp23, onButtonPressIn: tmp24, onButtonPressOut: tmp25, onButtonLongPress: tmp26, onButtonHoverIn: tmp27, onButtonHoverOut: tmp28, onButtonInteractionFinished: tmp29, children };
  const tmp37 = onPress(onPressIn[8]);
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(tVProps);
  const merged2 = Object.assign(tmp30);
  const merged3 = Object.assign(obj);
  const tmp36 = jsx;
  if (ref == null) {
    ref = null;
  }
  tmp19Result2 = onLongPress(onPressIn[9]);
  return tmp36(tmp37, obj4);
};
