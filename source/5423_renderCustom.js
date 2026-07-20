// Module ID: 5423
// Function ID: 46452
// Name: renderCustom
// Dependencies: []

// Module 5423 (renderCustom)
let Platform;
function renderCustom(label) {
  let tmp = null;
  if (null != label) {
    let tmp3 = label;
    if (!importAllResult.isValidElement(label)) {
      tmp3 = callback(label, {});
    }
    tmp = tmp3;
  }
  return tmp;
}
const importAllResult = importAll(dependencyMap[0]);
({ Platform, View: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles(() => {
  function getPadding(arg0) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    const paddingHorizontal = 16 + num;
    return { paddingHorizontal, paddingVertical: paddingHorizontal };
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(getPadding());
  obj.container = obj;
  obj.label = { -9223372036854775808: null, 9223372036854775807: "c1eae5d24a46f9d36a9168ec38445f00", 9223372036854775807: "DragIcon" };
  obj.leading = {};
  obj.trailing = { height: "soundboard_picker_collapsed_sections", marginTop: "scalar", borderBottomLeftRadius: 2, borderBottomRightRadius: 9 };
  obj.disabled = { opacity: 0.5 };
  obj = { borderColor: importDefault(dependencyMap[4]).colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  const merged1 = Object.assign(getPadding(-2));
  obj.error = obj;
  return obj;
});
const obj = {};
const obj2 = arg1(dependencyMap[3]);
obj.Arrow = importDefault(dependencyMap[11]);
obj.Label = importDefault(dependencyMap[8]);
obj.SubLabel = importDefault(dependencyMap[9]);
obj.Radio = importDefault(dependencyMap[12]);
obj.Checkbox = importDefault(dependencyMap[13]);
obj.Checkmark = importDefault(dependencyMap[14]);
obj.Icon = importDefault(dependencyMap[15]);
const merged = Object.assign({}, importAllResult.forwardRef((label, ref) => {
  let DEPRECATED_style;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let delayLongPress;
  let numberOfLines;
  let onAccessibilityAction;
  let onAccessibilityTap;
  let onLongPress;
  let onPress;
  let start;
  let style;
  let subLabel;
  label = label.label;
  ref = label;
  const leading = label.leading;
  const importDefault = leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
  const dependencyMap = subLabel;
  const trailing = label.trailing;
  let flag = label.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = label.hasError;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = label.accessible;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
  ({ style, labelStyle: closure_5, trailingWrapperStyle: closure_6, leadingStyle: closure_7, delayLongPress, start } = label);
  if (start === undefined) {
    start = false;
  }
  let flag4 = label.end;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let renderCustom;
  function renderInnerView() {
    if ("function" !== typeof label) {
      if (!trailing.isValidElement(label)) {
        let obj = { numberOfLines, text: label, style: callback };
        let tmp9 = callback(leading(subLabel[8]), obj);
      }
      if ("function" !== typeof subLabel) {
        if (!trailing.isValidElement(subLabel)) {
          let tmp14 = null;
          if (null != subLabel) {
            obj = { text: subLabel, numberOfLines };
            tmp14 = callback(leading(subLabel[9]), obj);
          }
        }
        if ("function" !== typeof leading) {
          if (!trailing.isValidElement(leading)) {
            let tmp25 = leading;
          }
          if ("function" !== typeof trailing) {
            if (!trailing.isValidElement(trailing)) {
              let tmp31 = trailing;
            }
            obj = {};
            let tmp38 = null;
            if (null != leading) {
              const obj1 = {};
              const items = [tmp.leading, closure_7];
              obj1.style = items;
              obj1.children = tmp25;
              tmp38 = callback(numberOfLines, obj1);
            }
            const items1 = [tmp38, , ];
            const obj2 = { style: tmp.label };
            const items2 = [tmp9, tmp14];
            obj2.children = items2;
            items1[1] = callback2(numberOfLines, obj2);
            let tmp47 = null;
            if (null != trailing) {
              const obj3 = {};
              const items3 = [tmp.trailing, callback2];
              obj3.style = items3;
              obj3.children = tmp31;
              tmp47 = callback(numberOfLines, obj3);
            }
            items1[2] = tmp47;
            obj.children = items1;
            return callback2(trailing.Fragment, obj);
          }
          tmp31 = tmp(trailing);
        }
        tmp25 = tmp(leading);
      }
      tmp14 = tmp(subLabel);
    }
    tmp9 = tmp(label);
  }
  const tmp = callback2();
  renderCustom = tmp;
  if (trailing.useContext(ref(dependencyMap[6]).RedesignCompatContext)) {
    if ("function" === typeof label) {
      let tmp15 = renderCustom(label);
    } else {
      tmp15 = label;
    }
    if ("function" !== typeof subLabel) {
      if (!importAllResult.isValidElement(subLabel)) {
        let tmp18 = null;
        if (null != subLabel) {
          tmp18 = subLabel;
        }
      }
      if ("function" === typeof leading) {
        let tmp21 = renderCustom(leading);
      } else {
        tmp21 = leading;
      }
      if ("function" === typeof trailing) {
        let tmp24 = renderCustom(trailing);
      } else {
        tmp24 = trailing;
      }
      let obj = { variant: label.variant, start, end: flag4, label: tmp15, subLabel: tmp18, icon: tmp21, trailing: tmp24, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return callback(ref(dependencyMap[7]).TableRow, obj);
    }
    tmp18 = renderCustom(subLabel);
  } else {
    obj = { disabled: flag };
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj = { ref };
        const items = [tmp.container, DEPRECATED_style, style, , ];
        let error = flag2;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        obj.style = items;
        obj.accessible = flag3;
        obj.accessibilityRole = accessibilityRole;
        obj.accessibilityState = obj;
        obj.accessibilityLabel = accessibilityLabel;
        obj.accessibilityHint = accessibilityHint;
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        obj.onAccessibilityTap = onAccessibilityTap;
        obj.children = renderInnerView();
        let tmp8Result = callback(numberOfLines, obj);
        const tmp29 = callback;
        const tmp30 = numberOfLines;
      }
      return tmp8Result;
    }
    const obj1 = { ref };
    const items1 = [tmp.container, DEPRECATED_style, style, , ];
    if (flag2) {
      flag2 = tmp.error;
    }
    items1[3] = flag2;
    let disabled1 = null;
    if (flag) {
      disabled1 = tmp.disabled;
    }
    items1[4] = disabled1;
    obj1.style = items1;
    obj1.disabled = flag;
    obj1.accessible = true;
    let str = "button";
    if (null != accessibilityRole) {
      str = accessibilityRole;
    }
    obj1.accessibilityRole = str;
    obj1.accessibilityState = obj;
    obj1.accessibilityLabel = accessibilityLabel;
    obj1.accessibilityHint = accessibilityHint;
    obj1.accessibilityActions = accessibilityActions;
    obj1.onAccessibilityAction = onAccessibilityAction;
    let tmp12;
    if (!flag) {
      tmp12 = onAccessibilityTap;
    }
    obj1.onAccessibilityTap = tmp12;
    let tmp13;
    if (!flag) {
      tmp13 = onPress;
    }
    obj1.onPress = tmp13;
    obj1.onLongPress = onLongPress;
    obj1.onPressOut = label.onPressOut;
    obj1.delayLongPress = delayLongPress;
    let num2;
    if (importAllResult.useContext(ref(dependencyMap[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj1.unstable_pressDelay = num2;
    obj1.children = renderInnerView();
    tmp8Result = callback(ref(dependencyMap[10]).PressableHighlight, obj1);
    const tmp8 = callback;
  }
}), obj);
const forwardRefResult = importAllResult.forwardRef((label, ref) => {
  let DEPRECATED_style;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let delayLongPress;
  let numberOfLines;
  let onAccessibilityAction;
  let onAccessibilityTap;
  let onLongPress;
  let onPress;
  let start;
  let style;
  let subLabel;
  label = label.label;
  ref = label;
  const leading = label.leading;
  const importDefault = leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
  const dependencyMap = subLabel;
  const trailing = label.trailing;
  let flag = label.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = label.hasError;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = label.accessible;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
  ({ style, labelStyle: closure_5, trailingWrapperStyle: closure_6, leadingStyle: closure_7, delayLongPress, start } = label);
  if (start === undefined) {
    start = false;
  }
  let flag4 = label.end;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let renderCustom;
  function renderInnerView() {
    if ("function" !== typeof label) {
      if (!trailing.isValidElement(label)) {
        let obj = { numberOfLines, text: label, style: callback };
        let tmp9 = callback(leading(subLabel[8]), obj);
      }
      if ("function" !== typeof subLabel) {
        if (!trailing.isValidElement(subLabel)) {
          let tmp14 = null;
          if (null != subLabel) {
            obj = { text: subLabel, numberOfLines };
            tmp14 = callback(leading(subLabel[9]), obj);
          }
        }
        if ("function" !== typeof leading) {
          if (!trailing.isValidElement(leading)) {
            let tmp25 = leading;
          }
          if ("function" !== typeof trailing) {
            if (!trailing.isValidElement(trailing)) {
              let tmp31 = trailing;
            }
            obj = {};
            let tmp38 = null;
            if (null != leading) {
              const obj1 = {};
              const items = [tmp.leading, closure_7];
              obj1.style = items;
              obj1.children = tmp25;
              tmp38 = callback(numberOfLines, obj1);
            }
            const items1 = [tmp38, , ];
            const obj2 = { style: tmp.label };
            const items2 = [tmp9, tmp14];
            obj2.children = items2;
            items1[1] = callback2(numberOfLines, obj2);
            let tmp47 = null;
            if (null != trailing) {
              const obj3 = {};
              const items3 = [tmp.trailing, callback2];
              obj3.style = items3;
              obj3.children = tmp31;
              tmp47 = callback(numberOfLines, obj3);
            }
            items1[2] = tmp47;
            obj.children = items1;
            return callback2(trailing.Fragment, obj);
          }
          tmp31 = tmp(trailing);
        }
        tmp25 = tmp(leading);
      }
      tmp14 = tmp(subLabel);
    }
    tmp9 = tmp(label);
  }
  const tmp = callback2();
  renderCustom = tmp;
  if (trailing.useContext(ref(dependencyMap[6]).RedesignCompatContext)) {
    if ("function" === typeof label) {
      let tmp15 = renderCustom(label);
    } else {
      tmp15 = label;
    }
    if ("function" !== typeof subLabel) {
      if (!importAllResult.isValidElement(subLabel)) {
        let tmp18 = null;
        if (null != subLabel) {
          tmp18 = subLabel;
        }
      }
      if ("function" === typeof leading) {
        let tmp21 = renderCustom(leading);
      } else {
        tmp21 = leading;
      }
      if ("function" === typeof trailing) {
        let tmp24 = renderCustom(trailing);
      } else {
        tmp24 = trailing;
      }
      let obj = { variant: label.variant, start, end: flag4, label: tmp15, subLabel: tmp18, icon: tmp21, trailing: tmp24, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return callback(ref(dependencyMap[7]).TableRow, obj);
    }
    tmp18 = renderCustom(subLabel);
  } else {
    obj = { disabled: flag };
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj = { ref };
        const items = [tmp.container, DEPRECATED_style, style, , ];
        let error = flag2;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        obj.style = items;
        obj.accessible = flag3;
        obj.accessibilityRole = accessibilityRole;
        obj.accessibilityState = obj;
        obj.accessibilityLabel = accessibilityLabel;
        obj.accessibilityHint = accessibilityHint;
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        obj.onAccessibilityTap = onAccessibilityTap;
        obj.children = renderInnerView();
        let tmp8Result = callback(numberOfLines, obj);
        const tmp29 = callback;
        const tmp30 = numberOfLines;
      }
      return tmp8Result;
    }
    const obj1 = { ref };
    const items1 = [tmp.container, DEPRECATED_style, style, , ];
    if (flag2) {
      flag2 = tmp.error;
    }
    items1[3] = flag2;
    let disabled1 = null;
    if (flag) {
      disabled1 = tmp.disabled;
    }
    items1[4] = disabled1;
    obj1.style = items1;
    obj1.disabled = flag;
    obj1.accessible = true;
    let str = "button";
    if (null != accessibilityRole) {
      str = accessibilityRole;
    }
    obj1.accessibilityRole = str;
    obj1.accessibilityState = obj;
    obj1.accessibilityLabel = accessibilityLabel;
    obj1.accessibilityHint = accessibilityHint;
    obj1.accessibilityActions = accessibilityActions;
    obj1.onAccessibilityAction = onAccessibilityAction;
    let tmp12;
    if (!flag) {
      tmp12 = onAccessibilityTap;
    }
    obj1.onAccessibilityTap = tmp12;
    let tmp13;
    if (!flag) {
      tmp13 = onPress;
    }
    obj1.onPress = tmp13;
    obj1.onLongPress = onLongPress;
    obj1.onPressOut = label.onPressOut;
    obj1.delayLongPress = delayLongPress;
    let num2;
    if (importAllResult.useContext(ref(dependencyMap[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj1.unstable_pressDelay = num2;
    obj1.children = renderInnerView();
    tmp8Result = callback(ref(dependencyMap[10]).PressableHighlight, obj1);
    const tmp8 = callback;
  }
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default merged;
