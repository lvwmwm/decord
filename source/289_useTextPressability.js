// Module ID: 289
// Function ID: 4471
// Name: useTextPressability
// Dependencies: []

// Module 289 (useTextPressability)
function useTextPressability(textPressabilityProps) {
  const onLongPress = textPressabilityProps.onLongPress;
  const arg1 = onLongPress;
  const onPress = textPressabilityProps.onPress;
  const importDefault = onPress;
  const onPressIn = textPressabilityProps.onPressIn;
  const dependencyMap = onPressIn;
  const onPressOut = textPressabilityProps.onPressOut;
  let closure_3 = onPressOut;
  const onResponderGrant = textPressabilityProps.onResponderGrant;
  const callback = onResponderGrant;
  const onResponderMove = textPressabilityProps.onResponderMove;
  let closure_5 = onResponderMove;
  const onResponderRelease = textPressabilityProps.onResponderRelease;
  const onResponderTerminate = textPressabilityProps.onResponderTerminate;
  const onResponderTerminationRequest = textPressabilityProps.onResponderTerminationRequest;
  const onStartShouldSetResponder = textPressabilityProps.onStartShouldSetResponder;
  const jsx = onStartShouldSetResponder;
  const pressRetentionOffset = textPressabilityProps.pressRetentionOffset;
  const NativePressableVirtualText = pressRetentionOffset;
  const first = callback(onResponderTerminationRequest(false), 2)[0];
  const NativePressableText = first;
  const items = [pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut, textPressabilityProps.suppressHighlighting];
  const tmp = callback(onResponderTerminationRequest(false), 2);
  const tmp4 = importDefault(dependencyMap[8])(onResponderTerminate(() => ({ disabled: false, pressRectOffset: pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut }), items));
  let closure_12 = tmp4;
  const items1 = [tmp4, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder];
  const tmp5 = onResponderTerminate(() => {
    if (null == tmp4) {
      return null;
    } else {
      const obj = {
        onResponderGrant(arg0) {
            closure_12.onResponderGrant(arg0);
            if (null != callback) {
              callback(arg0);
            }
          },
        onResponderMove(arg0) {
            closure_12.onResponderMove(arg0);
            if (null != callback2) {
              callback2(arg0);
            }
          },
        onResponderRelease(arg0) {
            closure_12.onResponderRelease(arg0);
            if (null != callback3) {
              callback3(arg0);
            }
          },
        onResponderTerminate(arg0) {
            closure_12.onResponderTerminate(arg0);
            if (null != callback4) {
              callback4(arg0);
            }
          },
        onClick: tmp4.onClick
      };
      if (null == onResponderTerminationRequest) {
        const onResponderTerminationRequest = tmp4.onResponderTerminationRequest;
      }
      obj.onResponderTerminationRequest = onResponderTerminationRequest;
      if (null == onStartShouldSetResponder) {
        const onStartShouldSetResponder = tmp4.onStartShouldSetResponder;
      }
      obj.onStartShouldSetResponder = onStartShouldSetResponder;
    }
  }, items1);
  let closure_13 = tmp5;
  const items2 = [first, tmp5];
  return onResponderTerminate(() => {
    const items = [first, tmp5];
    return items;
  }, items2);
}
let closure_3 = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
({ useContext: closure_6, useMemo: closure_7, useState: closure_8 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
class TextImpl {
  constructor(arg0) {
    ({ ref, accessible, accessibilityLabel, accessibilityState, allowFontScaling, aria-busy: busy, aria-checked: checked, aria-disabled: disabled, aria-expanded: expanded, aria-label: tmp, aria-selected: selected, children, ellipsizeMode, disabled: disabled2, id, nativeID, numberOfLines, onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, selectable, selectionColor, suppressHighlighting, style } = global);
    tmp2 = closure_5(global, useTextPressability);
    if (null != tmp) {
      accessibilityLabel = tmp;
    }
    tmp3 = null == busy && null == checked && null == disabled && null == expanded && null == selected;
    if (tmp3) {
      disabled = undefined;
      if (null != accessibilityState) {
        disabled = accessibilityState.disabled;
      }
      tmp6 = disabled;
      if (null != disabled2) {
        tmp6 = disabled2;
      }
      tmp7 = null != onPress || null != onLongPress || null != onStartShouldSetResponder;
      if (tmp7) {
        flag = true;
        tmp7 = true !== tmp6;
      }
      if (null != selectionColor) {
        tmp9 = importDefault;
        tmp10 = dependencyMap;
        num = 4;
        tmp8 = importDefault(dependencyMap[4])(selectionColor);
      }
      tmp11 = null == numberOfLines;
      if (!tmp11) {
        num2 = 0;
        tmp11 = numberOfLines >= 0;
      }
      if (!tmp11) {
        numberOfLines = 0;
      }
      tmp12 = importDefault;
      tmp13 = dependencyMap;
      num3 = 5;
      tmp14 = importDefault(dependencyMap[5])(style);
      tmp15 = style;
      tmp16 = selectable;
      if (null != tmp14) {
        str6 = "number";
        tmp17 = null;
        if ("number" === typeof tmp14.fontWeight) {
          obj = {};
          str = tmp14.fontWeight;
          obj.fontWeight = str.toString();
          tmp17 = obj;
        }
        tmp18 = tmp17;
        if (null != tmp14.userSelect) {
          tmp19 = NativePressableText;
          obj1 = tmp17;
          if (!tmp17) {
            obj1 = {};
          }
          obj1.userSelect = undefined;
          tmp18 = obj1;
          selectable = NativePressableText[tmp14.userSelect];
        }
        tmp20 = tmp18;
        if (null != tmp14.verticalAlign) {
          obj2 = tmp18;
          if (!tmp18) {
            obj2 = {};
          }
          tmp21 = NativePressableText;
          obj2.textAlignVertical = NativePressableText[tmp14.verticalAlign];
          obj2.verticalAlign = undefined;
          tmp20 = obj2;
        }
        tmp15 = style;
        tmp16 = selectable;
        if (null != tmp20) {
          items = [, ];
          items[0] = style;
          items[1] = tmp20;
          tmp15 = items;
          tmp16 = selectable;
        }
      }
      if (null != id) {
        nativeID = id;
      }
      tmp22 = useContext;
      tmp23 = importDefault;
      tmp24 = dependencyMap;
      num4 = 6;
      if (useContext(importDefault(dependencyMap[6]))) {
        tmp46 = jsx;
        if (tmp7) {
          tmp51 = NativePressableVirtualText;
          obj3 = {};
          obj3.ref = ref;
          tmp52 = globalThis;
          _Object3 = Object;
          obj4 = {};
          obj4.accessibilityLabel = accessibilityLabel;
          obj4.accessibilityState = accessibilityState;
          obj4.nativeID = nativeID;
          obj4.numberOfLines = numberOfLines;
          obj4.selectable = tmp16;
          obj4.selectionColor = tmp8;
          obj4.style = tmp15;
          obj4.disabled = disabled2;
          obj4.children = children;
          obj3.textProps = Object.assign({}, tmp2, obj4);
          obj5 = {};
          obj5.onLongPress = onLongPress;
          obj5.onPress = onPress;
          obj5.onPressIn = onPressIn;
          obj5.onPressOut = onPressOut;
          obj5.onResponderGrant = onResponderGrant;
          obj5.onResponderMove = onResponderMove;
          obj5.onResponderRelease = onResponderRelease;
          obj5.onResponderTerminate = onResponderTerminate;
          obj5.onResponderTerminationRequest = onResponderTerminationRequest;
          obj5.onStartShouldSetResponder = onStartShouldSetResponder;
          obj5.pressRetentionOffset = pressRetentionOffset;
          obj5.suppressHighlighting = suppressHighlighting;
          obj3.textPressabilityProps = obj5;
          tmp46Result = tmp46(NativePressableVirtualText, obj3);
        } else {
          tmp47 = arg1;
          tmp48 = dependencyMap;
          num7 = 7;
          tmp49 = globalThis;
          _Object2 = Object;
          obj6 = {};
          obj6.accessibilityLabel = accessibilityLabel;
          obj6.accessibilityState = accessibilityState;
          obj6.nativeID = nativeID;
          obj6.numberOfLines = numberOfLines;
          obj6.ref = ref;
          obj6.selectable = tmp16;
          obj6.selectionColor = tmp8;
          obj6.style = tmp15;
          obj6.disabled = disabled2;
          obj6.children = children;
          tmp46Result = tmp46(arg1(dependencyMap[7]).NativeVirtualText, Object.assign({}, tmp2, obj6));
        }
        return tmp46Result;
      } else {
        tmp25 = tmp6 !== disabled;
        if (tmp25) {
          tmp26 = null != tmp6;
          if (tmp26) {
            flag2 = false;
            tmp26 = false !== tmp6;
          }
          if (!tmp26) {
            tmp27 = null != disabled;
            if (tmp27) {
              flag3 = false;
              tmp27 = false !== disabled;
            }
            tmp26 = tmp27;
          }
          tmp25 = tmp26;
        }
        merged = accessibilityState;
        if (tmp25) {
          tmp29 = globalThis;
          _Object = Object;
          obj7 = {};
          obj7.disabled = tmp6;
          merged = Object.assign({}, accessibilityState, obj7);
        }
        if (null == accessible) {
          tmp30 = null != onPress || null != onLongPress;
          accessible = tmp30;
        }
        tmp31 = jsx;
        if (tmp7) {
          obj8 = {};
          obj8.ref = ref;
          tmp37 = globalThis;
          obj9 = {};
          obj9.accessibilityLabel = accessibilityLabel;
          obj9.accessibilityState = merged;
          obj9.accessible = accessible;
          flag5 = false;
          obj9.allowFontScaling = false !== allowFontScaling;
          obj9.disabled = tmp6;
          str3 = "tail";
          tmp36 = NativePressableText;
          if (null != ellipsizeMode) {
            str3 = ellipsizeMode;
          }
          obj9.ellipsizeMode = str3;
          obj9.nativeID = nativeID;
          obj9.numberOfLines = numberOfLines;
          obj9.selectable = tmp16;
          obj9.selectionColor = tmp8;
          obj9.style = tmp15;
          obj9.children = children;
          obj8.textProps = Object.assign({}, tmp2, obj9);
          obj10 = {};
          obj10.onLongPress = onLongPress;
          obj10.onPress = onPress;
          obj10.onPressIn = onPressIn;
          obj10.onPressOut = onPressOut;
          obj10.onResponderGrant = onResponderGrant;
          obj10.onResponderMove = onResponderMove;
          obj10.onResponderRelease = onResponderRelease;
          obj10.onResponderTerminate = onResponderTerminate;
          obj10.onResponderTerminationRequest = onResponderTerminationRequest;
          obj10.onStartShouldSetResponder = onStartShouldSetResponder;
          obj10.pressRetentionOffset = pressRetentionOffset;
          obj10.suppressHighlighting = suppressHighlighting;
          obj8.textPressabilityProps = obj10;
          tmp31Result = tmp31(tmp36, obj8);
        } else {
          tmp32 = arg1;
          tmp33 = dependencyMap;
          num5 = 7;
          tmp34 = globalThis;
          obj11 = {};
          obj11.accessibilityLabel = accessibilityLabel;
          obj11.accessibilityState = merged;
          obj11.accessible = accessible;
          flag4 = false;
          obj11.allowFontScaling = false !== allowFontScaling;
          obj11.disabled = tmp6;
          str2 = "tail";
          if (null != ellipsizeMode) {
            str2 = ellipsizeMode;
          }
          obj11.ellipsizeMode = str2;
          obj11.nativeID = nativeID;
          obj11.numberOfLines = numberOfLines;
          obj11.ref = ref;
          obj11.selectable = tmp16;
          obj11.selectionColor = tmp8;
          obj11.style = tmp15;
          obj11.children = children;
          tmp31Result = tmp31(arg1(dependencyMap[7]).NativeText, Object.assign({}, tmp2, obj11));
        }
        if (null == children) {
          return tmp31Result;
        } else {
          tmp53 = globalThis;
          _Array = Array;
          if (Array.isArray(children)) {
            num6 = 3;
            if (children.length <= 3) {
              flag6 = false;
              tmp38 = children;
              iter = children[Symbol.iterator]();
              str5 = "object";
              nextResult = iter.next();
              tmp40 = iter;
              while (iter !== undefined) {
                if (null != nextResult) {
                  tmp42 = nextResult;
                  if ("object" === typeof tmp41) {
                    flag6 = true;
                    iter.return();
                    // break
                  }
                  if (!flag6) {
                    return tmp31Result;
                  }
                }
                // continue
              }
            }
            tmp43 = jsx;
            tmp44 = importDefault;
            tmp45 = dependencyMap;
            obj12 = {};
            flag7 = true;
            obj12.value = true;
            obj12.children = tmp31Result;
            return jsx(importDefault(dependencyMap[6]), obj12);
          }
          str4 = "object";
          if ("object" !== typeof children) {
            return tmp31Result;
          }
        }
      }
    } else {
      if (null != accessibilityState) {
        obj13 = {};
        if (null == busy) {
          busy = accessibilityState.busy;
        }
        obj13.busy = busy;
        if (null == checked) {
          checked = accessibilityState.checked;
        }
        obj13.checked = checked;
        if (null == disabled) {
          disabled = accessibilityState.disabled;
        }
        obj13.disabled = disabled;
        if (null == expanded) {
          expanded = accessibilityState.expanded;
        }
        obj13.expanded = expanded;
        if (null == selected) {
          selected = accessibilityState.selected;
        }
        obj13.selected = selected;
        obj = obj13;
      } else {
        obj = {};
        obj.busy = busy;
        obj.checked = checked;
        obj.disabled = disabled;
        obj.expanded = expanded;
        obj.selected = selected;
      }
      tmp4 = obj;
    }
    return;
  }
}
TextImpl.displayName = "Text";
function NativePressableVirtualText(ref) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(useTextPressability(ref.textPressabilityProps), 2);
  return jsx(arg1(dependencyMap[7]).NativeVirtualText, Object.assign({}, ref.textProps, tmp3, { isHighlighted: tmp2, isPressable: true, ref: ref.ref }));
}
function NativePressableText(ref) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(useTextPressability(ref.textPressabilityProps), 2);
  return jsx(arg1(dependencyMap[7]).NativeText, Object.assign({}, ref.textProps, tmp3, { isHighlighted: tmp2, isPressable: true, ref: ref.ref }));
}
let closure_12 = {};
let closure_13 = { accessibilityRole: "en-US", apply: 0, "Null": null, "Null": true };

export default TextImpl;
