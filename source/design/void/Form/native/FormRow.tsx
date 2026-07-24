// Module ID: 5158
// Function ID: 44947
// Name: renderCustom
// Dependencies: [31, 27, 33, 4130, 689, 5159, 5164, 5165, 5177, 5178, 4660, 5179, 5180, 5183, 5184, 5185, 2]

// Module 5158 (renderCustom)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function renderCustom(icon) {
  let tmp = null;
  if (null != icon) {
    let tmp3 = icon;
    if (!importAllResult.isValidElement(icon)) {
      tmp3 = callback(icon, {});
    }
    tmp = tmp3;
  }
  return tmp;
}
({ Platform, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => {
  function getPadding(arg0) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    const paddingHorizontal = 16 + num;
    return { paddingHorizontal, paddingVertical: paddingHorizontal };
  }
  let obj = {};
  obj = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  const merged = Object.assign(getPadding());
  obj.container = obj;
  obj.label = { flexShrink: 1, flexGrow: 1, flexBasis: "30%" };
  obj.leading = { flexGrow: 0, marginRight: 16 };
  obj.trailing = { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 };
  obj.disabled = { opacity: 0.5 };
  obj = { borderColor: importDefault(689).colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  const merged1 = Object.assign(getPadding(-2));
  obj.error = obj;
  return obj;
});
let obj = { Arrow: require("FormArrow"), Label: require("FormLabel"), SubLabel: require("FormSubLabel"), Radio: require("FormRadio"), Checkbox: require("FormCheckbox"), Checkmark: require("RowCheckmark"), Icon: require("FormIcon") };
let merged = Object.assign({}, importAllResult.forwardRef((label, ref) => {
  let DEPRECATED_style;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let closure_5;
  let closure_6;
  let closure_7;
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
  const leading = label.leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
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
  let callback3;
  function renderInnerView() {
    if ("function" !== typeof label) {
      if (!trailing.isValidElement(label)) {
        let obj = { numberOfLines, text: label, style: closure_5 };
        let tmp9 = outer1_5(leading(subLabel[8]), obj);
      }
      if ("function" !== typeof subLabel) {
        if (!trailing.isValidElement(subLabel)) {
          let tmp14 = null;
          if (null != subLabel) {
            obj = { text: subLabel, numberOfLines };
            tmp14 = outer1_5(leading(subLabel[9]), obj);
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
              const items = [_undefined.leading, closure_7];
              obj1.style = items;
              obj1.children = tmp25;
              tmp38 = outer1_5(numberOfLines, obj1);
            }
            const items1 = [tmp38, , ];
            const obj2 = { style: _undefined.label };
            const items2 = [tmp9, tmp14];
            obj2.children = items2;
            items1[1] = outer1_6(numberOfLines, obj2);
            let tmp47 = null;
            if (null != trailing) {
              const obj3 = {};
              const items3 = [_undefined.trailing, closure_6];
              obj3.style = items3;
              obj3.children = tmp31;
              tmp47 = outer1_5(numberOfLines, obj3);
            }
            items1[2] = tmp47;
            obj.children = items1;
            return outer1_6(trailing.Fragment, obj);
          }
          tmp31 = _undefined(trailing);
        }
        tmp25 = _undefined(leading);
      }
      tmp14 = _undefined(subLabel);
    }
    tmp9 = _undefined(label);
  }
  const tmp = callback2();
  callback3 = tmp;
  if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
    if ("function" === typeof label) {
      let tmp15 = callback3(label);
    } else {
      tmp15 = label;
    }
    if ("function" !== typeof subLabel) {
      if (!trailing.isValidElement(subLabel)) {
        let tmp18 = null;
        if (null != subLabel) {
          tmp18 = subLabel;
        }
      }
      if ("function" === typeof leading) {
        let tmp21 = callback3(leading);
      } else {
        tmp21 = leading;
      }
      if ("function" === typeof trailing) {
        let tmp24 = callback3(trailing);
      } else {
        tmp24 = trailing;
      }
      let obj = { variant: label.variant, start, end: flag4, label: tmp15, subLabel: tmp18, icon: tmp21, trailing: tmp24, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return callback(label(subLabel[7]).TableRow, obj);
    }
    tmp18 = callback3(subLabel);
  } else {
    obj = { disabled: flag };
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj = { ref };
        let items = [tmp.container, DEPRECATED_style, style, , ];
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
    let obj1 = { ref };
    let items1 = [tmp.container, DEPRECATED_style, style, , ];
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
    if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj1.unstable_pressDelay = num2;
    obj1.children = renderInnerView();
    tmp8Result = callback(label(subLabel[10]).PressableHighlight, obj1);
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
  let closure_5;
  let closure_6;
  let closure_7;
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
  const leading = label.leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
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
  let callback3;
  function renderInnerView() {
    if ("function" !== typeof label) {
      if (!trailing.isValidElement(label)) {
        let obj = { numberOfLines, text: label, style: closure_5 };
        let tmp9 = outer1_5(leading(subLabel[8]), obj);
      }
      if ("function" !== typeof subLabel) {
        if (!trailing.isValidElement(subLabel)) {
          let tmp14 = null;
          if (null != subLabel) {
            obj = { text: subLabel, numberOfLines };
            tmp14 = outer1_5(leading(subLabel[9]), obj);
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
              const items = [_undefined.leading, closure_7];
              obj1.style = items;
              obj1.children = tmp25;
              tmp38 = outer1_5(numberOfLines, obj1);
            }
            const items1 = [tmp38, , ];
            const obj2 = { style: _undefined.label };
            const items2 = [tmp9, tmp14];
            obj2.children = items2;
            items1[1] = outer1_6(numberOfLines, obj2);
            let tmp47 = null;
            if (null != trailing) {
              const obj3 = {};
              const items3 = [_undefined.trailing, closure_6];
              obj3.style = items3;
              obj3.children = tmp31;
              tmp47 = outer1_5(numberOfLines, obj3);
            }
            items1[2] = tmp47;
            obj.children = items1;
            return outer1_6(trailing.Fragment, obj);
          }
          tmp31 = _undefined(trailing);
        }
        tmp25 = _undefined(leading);
      }
      tmp14 = _undefined(subLabel);
    }
    tmp9 = _undefined(label);
  }
  const tmp = callback2();
  callback3 = tmp;
  if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
    if ("function" === typeof label) {
      let tmp15 = callback3(label);
    } else {
      tmp15 = label;
    }
    if ("function" !== typeof subLabel) {
      if (!trailing.isValidElement(subLabel)) {
        let tmp18 = null;
        if (null != subLabel) {
          tmp18 = subLabel;
        }
      }
      if ("function" === typeof leading) {
        let tmp21 = callback3(leading);
      } else {
        tmp21 = leading;
      }
      if ("function" === typeof trailing) {
        let tmp24 = callback3(trailing);
      } else {
        tmp24 = trailing;
      }
      let obj = { variant: label.variant, start, end: flag4, label: tmp15, subLabel: tmp18, icon: tmp21, trailing: tmp24, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return callback(label(subLabel[7]).TableRow, obj);
    }
    tmp18 = callback3(subLabel);
  } else {
    obj = { disabled: flag };
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj = { ref };
        let items = [tmp.container, DEPRECATED_style, style, , ];
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
    let obj1 = { ref };
    let items1 = [tmp.container, DEPRECATED_style, style, , ];
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
    if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj1.unstable_pressDelay = num2;
    obj1.children = renderInnerView();
    tmp8Result = callback(label(subLabel[10]).PressableHighlight, obj1);
    const tmp8 = callback;
  }
});
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default merged;
