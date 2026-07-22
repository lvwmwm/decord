// Module ID: 407
// Function ID: 5800
// Name: Pressable
// Dependencies: []

// Module 407 (Pressable)
let jsx;
let closure_2 = [];
let closure_3 = [-1768664576, 1113697248, 165542, 123657, 80500038, 30049792, 26435328, 51070208, 48285184, 55455744, -1287495424, 754975421, 1174405602, 314453, 117382, 110662, 172351, 127208, 171007, -469941663, -1991311359, 1430585345, -1979710260, 1207960371, 1174405787, 1593835952, 1627390355, 42532162, 18338816, 121131264, 80500036, 28233216];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const obj = arg1(dependencyMap[2]);
({ useMemo: closure_6, useRef: closure_7, useState: closure_8 } = obj);
({ jsx, jsxs: closure_9 } = arg1(dependencyMap[3]));
const memoResult = obj.memo(function Pressable(ref) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let accessibilityState;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let cancelable;
  let children;
  let delayHoverIn;
  let focusable;
  let style;
  let testOnly_pressed;
  let tmp15;
  let tmp16;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let unstable_pressDelay;
  const tmp = callback2(ref, closure_2);
  ({ accessibilityState, aria-live: accessibilityLiveRegion, android_disableSound } = tmp);
  const importDefault = android_disableSound;
  ({ aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: accessibilityLabel, aria-selected: tmp6, cancelable } = tmp);
  const dependencyMap = cancelable;
  ({ children, delayHoverIn } = tmp);
  closure_2 = delayHoverIn;
  const delayHoverOut = tmp.delayHoverOut;
  let closure_3 = delayHoverOut;
  const delayLongPress = tmp.delayLongPress;
  const callback = delayLongPress;
  let disabled = tmp.disabled;
  const callback2 = disabled;
  const hitSlop = tmp.hitSlop;
  const onBlur = tmp.onBlur;
  const onFocus = tmp.onFocus;
  const onHoverIn = tmp.onHoverIn;
  const onHoverOut = tmp.onHoverOut;
  const onLongPress = tmp.onLongPress;
  const onPress = tmp.onPress;
  const onPressIn = tmp.onPressIn;
  const onPressMove = tmp.onPressMove;
  const onPressOut = tmp.onPressOut;
  const pressRetentionOffset = tmp.pressRetentionOffset;
  ({ style, unstable_pressDelay } = tmp);
  ({ accessible, android_ripple, focusable, testOnly_pressed } = tmp);
  const tmp7 = callback2(tmp, closure_3);
  const tmp8 = onBlur(null);
  const tmp10 = importDefault(dependencyMap[5])(android_ripple, tmp8);
  const tmp12 = callback(onFocus(false), 2);
  let first = tmp12[0];
  if (!first) {
    first = tmp11;
  }
  const items = [first, tmp12[1]];
  const tmp11 = true === testOnly_pressed;
  const tmp9 = importDefault(dependencyMap[4])(ref.ref, tmp8);
  [tmp15, tmp16] = callback(items, 2);
  let tmp18 = tmp17;
  if ("function" !== typeof children) {
    tmp18 = "function" === typeof style;
  }
  let obj = {};
  if (null == tmp2) {
    let busy;
    if (null != accessibilityState) {
      busy = accessibilityState.busy;
    }
  }
  obj.busy = tmp2;
  if (null == tmp3) {
    let checked;
    if (null != accessibilityState) {
      checked = accessibilityState.checked;
    }
  }
  obj.checked = tmp3;
  if (null == tmp4) {
    disabled = undefined;
    if (null != accessibilityState) {
      disabled = accessibilityState.disabled;
    }
  }
  obj.disabled = tmp4;
  if (null == tmp5) {
    let expanded;
    if (null != accessibilityState) {
      expanded = accessibilityState.expanded;
    }
  }
  obj.expanded = tmp5;
  if (null == tmp6) {
    let selected;
    if (null != accessibilityState) {
      selected = accessibilityState.selected;
    }
  }
  obj.selected = tmp6;
  let merged = obj;
  if (null != disabled) {
    const _Object = Object;
    obj = { disabled };
    merged = Object.assign({}, obj, obj);
  }
  obj = {};
  aria-valuemax = tmp.aria-valuemax;
  if (null == aria_valuemax) {
    const accessibilityValue = tmp.accessibilityValue;
    let max;
    if (null != accessibilityValue) {
      max = accessibilityValue.max;
    }
    aria-valuemax = max;
  }
  obj.max = aria_valuemax;
  aria-valuemin = tmp.aria-valuemin;
  if (null == aria_valuemin) {
    const accessibilityValue2 = tmp.accessibilityValue;
    let min;
    if (null != accessibilityValue2) {
      min = accessibilityValue2.min;
    }
    aria-valuemin = min;
  }
  obj.min = aria_valuemin;
  aria-valuenow = tmp.aria-valuenow;
  if (null == aria_valuenow) {
    const accessibilityValue3 = tmp.accessibilityValue;
    let now;
    if (null != accessibilityValue3) {
      now = accessibilityValue3.now;
    }
    aria-valuenow = now;
  }
  obj.now = aria_valuenow;
  aria-valuetext = tmp.aria-valuetext;
  if (null == aria_valuetext) {
    const accessibilityValue4 = tmp.accessibilityValue;
    let text;
    if (null != accessibilityValue4) {
      text = accessibilityValue4.text;
    }
    aria-valuetext = text;
  }
  obj.text = aria_valuetext;
  let str = "none";
  if ("off" !== accessibilityLiveRegion) {
    if (null == accessibilityLiveRegion) {
      accessibilityLiveRegion = tmp.accessibilityLiveRegion;
    }
    str = accessibilityLiveRegion;
  }
  if (null == accessibilityLabel) {
    accessibilityLabel = tmp.accessibilityLabel;
  }
  let viewProps;
  if (null != tmp10) {
    viewProps = tmp10.viewProps;
  }
  const obj1 = { accessible: false !== accessible };
  let accessibilityViewIsModal = tmp7.aria-modal;
  if (null == accessibilityViewIsModal) {
    accessibilityViewIsModal = tmp7.accessibilityViewIsModal;
  }
  obj1.accessibilityViewIsModal = accessibilityViewIsModal;
  obj1.accessibilityLiveRegion = str;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.accessibilityState = merged;
  obj1.focusable = false !== focusable;
  obj1.accessibilityValue = obj;
  obj1.hitSlop = hitSlop;
  const merged1 = Object.assign({}, tmp7, viewProps, obj1);
  const items1 = [android_disableSound, tmp10, cancelable, delayHoverIn, delayHoverOut, delayLongPress, disabled, hitSlop, onBlur, onFocus, onHoverIn, onHoverOut, onLongPress, onPress, onPressIn, onPressMove, onPressOut, pressRetentionOffset, tmp16, tmp18, unstable_pressDelay];
  const tmp14 = callback(items, 2);
  const tmp32 = hitSlop(() => ({
    cancelable,
    disabled,
    hitSlop,
    pressRectOffset: pressRetentionOffset,
    android_disableSound,
    delayHoverIn,
    delayHoverOut,
    delayLongPress,
    delayPressIn: unstable_pressDelay,
    onBlur,
    onFocus,
    onHoverIn,
    onHoverOut,
    onLongPress,
    onPress,
    onPressIn(arg0) {
      if (null != closure_18) {
        closure_18.onPressIn(arg0);
      }
      if (closure_20) {
        callback4(true);
      }
      if (null != callback) {
        callback(arg0);
      }
    },
    onPressMove(arg0) {
      if (null != closure_18) {
        closure_18.onPressMove(arg0);
      }
      if (null != callback2) {
        callback2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_18) {
        closure_18.onPressOut(arg0);
      }
      if (closure_20) {
        callback4(false);
      }
      if (null != callback3) {
        callback3(arg0);
      }
    }
  }), items1);
  const obj2 = { ref: tmp9 };
  const tmp33 = importDefault(dependencyMap[6])(hitSlop(() => ({
    cancelable,
    disabled,
    hitSlop,
    pressRectOffset: pressRetentionOffset,
    android_disableSound,
    delayHoverIn,
    delayHoverOut,
    delayLongPress,
    delayPressIn: unstable_pressDelay,
    onBlur,
    onFocus,
    onHoverIn,
    onHoverOut,
    onLongPress,
    onPress,
    onPressIn(arg0) {
      if (null != closure_18) {
        closure_18.onPressIn(arg0);
      }
      if (closure_20) {
        callback4(true);
      }
      if (null != callback) {
        callback(arg0);
      }
    },
    onPressMove(arg0) {
      if (null != closure_18) {
        closure_18.onPressMove(arg0);
      }
      if (null != callback2) {
        callback2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_18) {
        closure_18.onPressOut(arg0);
      }
      if (closure_20) {
        callback4(false);
      }
      if (null != callback3) {
        callback3(arg0);
      }
    }
  }), items1));
  const tmp34 = onHoverIn;
  if ("function" === typeof style) {
    const obj3 = { pressed: tmp15 };
    style = style(obj3);
  }
  obj2.style = style;
  obj2.collapsable = false;
  let childrenResult = children;
  if ("function" === typeof children) {
    const obj4 = { pressed: tmp15 };
    childrenResult = children(obj4);
  }
  const items2 = [childrenResult, null];
  obj2.children = items2;
  return tmp34(importDefault(dependencyMap[7]), Object.assign({}, merged1, tmp33, obj2));
});
memoResult.displayName = "Pressable";

export default memoResult;
