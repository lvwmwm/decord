// Module ID: 423
// Function ID: 5941
// Name: TouchableWithoutFeedback
// Dependencies: []
// Exports: default

// Module 423 (TouchableWithoutFeedback)
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ cloneElement: closure_5, useMemo: closure_6 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = [];

export default function TouchableWithoutFeedback(disabled) {
  let onBlur2;
  let onFocus2;
  disabled = disabled.disabled;
  const importDefault = disabled;
  const rejectResponderTermination = disabled.rejectResponderTermination;
  const dependencyMap = rejectResponderTermination;
  aria-disabled = disabled.aria-disabled;
  let closure_2 = aria_disabled;
  const accessibilityState = disabled.accessibilityState;
  const callback = accessibilityState;
  const hitSlop = disabled.hitSlop;
  const React = hitSlop;
  const delayLongPress = disabled.delayLongPress;
  const delayPressIn = disabled.delayPressIn;
  const delayPressOut = disabled.delayPressOut;
  let closure_7 = delayPressOut;
  const pressRetentionOffset = disabled.pressRetentionOffset;
  const touchSoundDisabled = disabled.touchSoundDisabled;
  const onBlur = disabled.onBlur;
  const onFocus = disabled.onFocus;
  const onLongPress = disabled.onLongPress;
  const onPress = disabled.onPress;
  const onPressIn = disabled.onPressIn;
  const onPressOut = disabled.onPressOut;
  const items = [rejectResponderTermination, disabled, aria_disabled, , , , , , , , , , , , , ];
  disabled = undefined;
  if (null != accessibilityState) {
    disabled = accessibilityState.disabled;
  }
  items[3] = disabled;
  items[4] = hitSlop;
  items[5] = delayLongPress;
  items[6] = delayPressIn;
  items[7] = delayPressOut;
  items[8] = pressRetentionOffset;
  items[9] = touchSoundDisabled;
  items[10] = onBlur;
  items[11] = onFocus;
  items[12] = onLongPress;
  items[13] = onPress;
  items[14] = onPressIn;
  items[15] = onPressOut;
  const tmp5 = importDefault(dependencyMap[3])(delayPressIn(() => {
    const obj = { cancelable: !rejectResponderTermination };
    if (null === disabled) {
      if (null != aria_disabled) {
        let disabled = aria_disabled;
      } else if (null != accessibilityState) {
        disabled = accessibilityState.disabled;
      }
    }
    obj.disabled = disabled;
    obj.hitSlop = hitSlop;
    obj.delayLongPress = delayLongPress;
    obj.delayPressIn = delayPressIn;
    obj.delayPressOut = delayPressOut;
    obj.minPressDuration = 0;
    obj.pressRectOffset = pressRetentionOffset;
    obj.android_disableSound = touchSoundDisabled;
    obj.onBlur = onBlur;
    obj.onFocus = onFocus;
    obj.onLongPress = onLongPress;
    obj.onPress = onPress;
    obj.onPressIn = onPressIn;
    obj.onPressOut = onPressOut;
    return obj;
  }, items));
  const Children = React.Children;
  const onlyResult = Children.only(disabled.children);
  const items1 = [onlyResult.props.children];
  let accessibilityLiveRegion = tmp.aria-live;
  let obj = {};
  aria-busy = tmp.aria-busy;
  if (null == aria_busy) {
    const accessibilityState2 = tmp.accessibilityState;
    let busy;
    if (null != accessibilityState2) {
      busy = accessibilityState2.busy;
    }
    aria-busy = busy;
  }
  obj.busy = aria_busy;
  aria-checked = tmp.aria-checked;
  if (null == aria_checked) {
    const accessibilityState3 = tmp.accessibilityState;
    let checked;
    if (null != accessibilityState3) {
      checked = accessibilityState3.checked;
    }
    aria-checked = checked;
  }
  obj.checked = aria_checked;
  aria-disabled2 = tmp.aria-disabled;
  if (null == aria_disabled2) {
    const accessibilityState4 = tmp.accessibilityState;
    let disabled1;
    if (null != accessibilityState4) {
      disabled1 = accessibilityState4.disabled;
    }
    aria-disabled2 = disabled1;
  }
  obj.disabled = aria_disabled2;
  aria-expanded = tmp.aria-expanded;
  if (null == aria_expanded) {
    const accessibilityState5 = tmp.accessibilityState;
    let expanded;
    if (null != accessibilityState5) {
      expanded = accessibilityState5.expanded;
    }
    aria-expanded = expanded;
  }
  obj.expanded = aria_expanded;
  aria-selected = tmp.aria-selected;
  if (null == aria_selected) {
    const accessibilityState6 = tmp.accessibilityState;
    let selected;
    if (null != accessibilityState6) {
      selected = accessibilityState6.selected;
    }
    aria-selected = selected;
  }
  obj.selected = aria_selected;
  ({ onBlur: onBlur2, onFocus: onFocus2 } = tmp5);
  obj = { accessible: false !== tmp.accessible };
  let merged = obj;
  const tmp2 = delayPressIn;
  const tmp2Result = delayPressIn(() => {
    const obj = { cancelable: !rejectResponderTermination };
    if (null === disabled) {
      if (null != aria_disabled) {
        let disabled = aria_disabled;
      } else if (null != accessibilityState) {
        disabled = accessibilityState.disabled;
      }
    }
    obj.disabled = disabled;
    obj.hitSlop = hitSlop;
    obj.delayLongPress = delayLongPress;
    obj.delayPressIn = delayPressIn;
    obj.delayPressOut = delayPressOut;
    obj.minPressDuration = 0;
    obj.pressRectOffset = pressRetentionOffset;
    obj.android_disableSound = touchSoundDisabled;
    obj.onBlur = onBlur;
    obj.onFocus = onFocus;
    obj.onLongPress = onLongPress;
    obj.onPress = onPress;
    obj.onPressIn = onPressIn;
    obj.onPressOut = onPressOut;
    return obj;
  }, items);
  if (null != disabled.disabled) {
    const _Object = Object;
    obj = { disabled: tmp.disabled };
    merged = Object.assign({}, obj, obj);
  }
  obj.accessibilityState = merged;
  let tmp20 = false !== tmp.focusable;
  if (tmp20) {
    tmp20 = undefined !== tmp.onPress;
  }
  if (tmp20) {
    tmp20 = !tmp.disabled;
  }
  obj.focusable = tmp20;
  let accessibilityElementsHidden = tmp.aria-hidden;
  if (null == accessibilityElementsHidden) {
    accessibilityElementsHidden = tmp.accessibilityElementsHidden;
  }
  obj.accessibilityElementsHidden = accessibilityElementsHidden;
  let str = "no-hide-descendants";
  if (true !== disabled.aria-hidden) {
    str = tmp.importantForAccessibility;
  }
  obj.importantForAccessibility = str;
  let str2 = "none";
  if ("off" !== accessibilityLiveRegion) {
    if (null == accessibilityLiveRegion) {
      accessibilityLiveRegion = tmp.accessibilityLiveRegion;
    }
    str2 = accessibilityLiveRegion;
  }
  obj.accessibilityLiveRegion = str2;
  let nativeID = tmp.id;
  if (null == nativeID) {
    nativeID = tmp.nativeID;
  }
  obj.nativeID = nativeID;
  const merged1 = Object.assign({}, callback(tmp5, closure_2), obj);
  for (const item10121 of closure_7) {
    let tmp28 = item10121;
    let tmp29 = arg0;
    if (undefined !== tmp[item10121]) {
      let tmp30 = merged1;
      let tmp31 = item10121;
      let tmp32 = arg0;
      merged1[tmp28] = tmp[tmp28];
    }
  }
  const items2 = [onlyResult, merged1];
  return delayLongPress.apply(undefined, items2.concat(items1));
};
