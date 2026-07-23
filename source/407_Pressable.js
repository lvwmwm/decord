// Module ID: 407
// Function ID: 5800
// Name: Pressable
// Dependencies: [57, 29, 31, 33, 325, 408, 292, 112]

// Module 407 (Pressable)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import result from "result";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
let jsx;
let closure_2 = ["ref"];
let closure_3 = ["accessible", "accessibilityState", "aria-live", "android_disableSound", "android_ripple", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "cancelable", "children", "delayHoverIn", "delayHoverOut", "delayLongPress", "disabled", "focusable", "hitSlop", "onBlur", "onFocus", "onHoverIn", "onHoverOut", "onLongPress", "onPress", "onPressIn", "onPressMove", "onPressOut", "pressRetentionOffset", "style", "testOnly_pressed", "unstable_pressDelay"];
({ useMemo: closure_6, useRef: closure_7, useState: closure_8 } = result);
({ jsx, jsxs: closure_9 } = jsxProd);
const memoResult = result.memo(function Pressable(ref) {
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
  const tmp = disabled(ref, delayHoverIn);
  ({ accessibilityState, aria-live: accessibilityLiveRegion, android_disableSound } = tmp);
  ({ aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: accessibilityLabel, aria-selected: tmp6, cancelable } = tmp);
  ({ children, delayHoverIn } = tmp);
  const delayHoverOut = tmp.delayHoverOut;
  const delayLongPress = tmp.delayLongPress;
  disabled = tmp.disabled;
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
  const tmp7 = disabled(tmp, delayHoverOut);
  const tmp8 = onBlur(null);
  const tmp10 = android_disableSound(cancelable[5])(android_ripple, tmp8);
  let closure_18 = tmp10;
  const tmp12 = delayLongPress(onFocus(false), 2);
  let first = tmp12[0];
  if (!first) {
    first = tmp11;
  }
  const items = [first, tmp12[1]];
  tmp11 = true === testOnly_pressed;
  const tmp9 = android_disableSound(cancelable[4])(ref.ref, tmp8);
  [tmp15, tmp16] = delayLongPress(items, 2);
  let closure_19 = tmp16;
  let tmp18 = tmp17;
  if ("function" !== typeof children) {
    tmp18 = "function" === typeof style;
  }
  let closure_20 = tmp18;
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
  aria_valuemax = tmp["aria-valuemax"];
  if (null == aria_valuemax) {
    const accessibilityValue = tmp.accessibilityValue;
    let max;
    if (null != accessibilityValue) {
      max = accessibilityValue.max;
    }
    aria_valuemax = max;
  }
  obj.max = aria_valuemax;
  aria_valuemin = tmp["aria-valuemin"];
  if (null == aria_valuemin) {
    const accessibilityValue2 = tmp.accessibilityValue;
    let min;
    if (null != accessibilityValue2) {
      min = accessibilityValue2.min;
    }
    aria_valuemin = min;
  }
  obj.min = aria_valuemin;
  aria_valuenow = tmp["aria-valuenow"];
  if (null == aria_valuenow) {
    const accessibilityValue3 = tmp.accessibilityValue;
    let now;
    if (null != accessibilityValue3) {
      now = accessibilityValue3.now;
    }
    aria_valuenow = now;
  }
  obj.now = aria_valuenow;
  aria_valuetext = tmp["aria-valuetext"];
  if (null == aria_valuetext) {
    const accessibilityValue4 = tmp.accessibilityValue;
    let text;
    if (null != accessibilityValue4) {
      text = accessibilityValue4.text;
    }
    aria_valuetext = text;
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
  let accessibilityViewIsModal = tmp7["aria-modal"];
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
  const tmp14 = delayLongPress(items, 2);
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
      if (null != outer1_18) {
        outer1_18.onPressIn(arg0);
      }
      if (outer1_20) {
        outer1_19(true);
      }
      if (null != outer1_13) {
        outer1_13(arg0);
      }
    },
    onPressMove(arg0) {
      if (null != outer1_18) {
        outer1_18.onPressMove(arg0);
      }
      if (null != outer1_14) {
        outer1_14(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != outer1_18) {
        outer1_18.onPressOut(arg0);
      }
      if (outer1_20) {
        outer1_19(false);
      }
      if (null != outer1_15) {
        outer1_15(arg0);
      }
    }
  }), items1);
  const obj2 = { ref: tmp9 };
  const tmp33 = android_disableSound(cancelable[6])(hitSlop(() => ({
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
      if (null != outer1_18) {
        outer1_18.onPressIn(arg0);
      }
      if (outer1_20) {
        outer1_19(true);
      }
      if (null != outer1_13) {
        outer1_13(arg0);
      }
    },
    onPressMove(arg0) {
      if (null != outer1_18) {
        outer1_18.onPressMove(arg0);
      }
      if (null != outer1_14) {
        outer1_14(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != outer1_18) {
        outer1_18.onPressOut(arg0);
      }
      if (outer1_20) {
        outer1_19(false);
      }
      if (null != outer1_15) {
        outer1_15(arg0);
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
  return tmp34(android_disableSound(cancelable[7]), Object.assign({}, merged1, tmp33, obj2));
});
memoResult.displayName = "Pressable";

export default memoResult;
