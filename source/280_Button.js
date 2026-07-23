// Module ID: 280
// Function ID: 4387
// Name: Button
// Dependencies: [29, 31, 33, 281, 44, 112, 289, 253]

// Module 280 (Button)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { jsx } from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "setStyleAttributePreprocessor";

let closure_2 = ["ref"];
class Button {
  constructor(arg0) {
    tmp = _objectWithoutProperties(global, closure_2);
    ({ accessibilityState, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp6, aria-selected: tmp7, importantForAccessibility, color, title } = tmp);
    items = [];
    items[0] = c6.button;
    items1 = [];
    items1[0] = c6.text;
    ({ accessibilityLabel, onPress, touchSoundDisabled, hasTVPreferredFocus, nextFocusDown, nextFocusForward, nextFocusLeft, nextFocusRight, nextFocusUp, testID, accessible, accessibilityActions, accessibilityHint, accessibilityLanguage, onAccessibilityAction } = tmp);
    if (color) {
      obj = {};
      obj.backgroundColor = color;
      arr = items.push(obj);
    }
    obj = {};
    if (null == tmp2) {
      busy = undefined;
      if (null != accessibilityState) {
        busy = accessibilityState.busy;
      }
      tmp2 = busy;
    }
    obj.busy = tmp2;
    if (null == tmp3) {
      checked = undefined;
      if (null != accessibilityState) {
        checked = accessibilityState.checked;
      }
      tmp3 = checked;
    }
    obj.checked = tmp3;
    if (null == tmp4) {
      disabled = undefined;
      if (null != accessibilityState) {
        disabled = accessibilityState.disabled;
      }
      tmp4 = disabled;
    }
    obj.disabled = tmp4;
    if (null == tmp5) {
      expanded = undefined;
      if (null != accessibilityState) {
        expanded = accessibilityState.expanded;
      }
      tmp5 = expanded;
    }
    obj.expanded = tmp5;
    if (null == tmp7) {
      selected = undefined;
      if (null != accessibilityState) {
        selected = accessibilityState.selected;
      }
      tmp7 = selected;
    }
    obj.selected = tmp7;
    if (null != tmp.disabled) {
      disabled = tmp.disabled;
    } else if (null != obj) {
      disabled = obj.disabled;
    }
    disabled1 = undefined;
    if (null != obj) {
      disabled1 = obj.disabled;
    }
    merged = obj;
    if (disabled !== disabled1) {
      tmp16 = globalThis;
      _Object = Object;
      obj1 = {};
      obj1.disabled = disabled;
      merged = Object.assign({}, obj, obj1);
    }
    if (disabled) {
      tmp17 = c6;
      arr1 = items.push(c6.buttonDisabled);
      tmp19 = c6;
      arr2 = items1.push(c6.textDisabled);
    }
    tmp21 = require("invariant")("string" === typeof title, "The title prop of a Button must be a string");
    obj2 = { accessible, accessibilityActions, onAccessibilityAction };
    formatted = title.toUpperCase();
    tmp23 = jsx;
    tmp24 = c5;
    if (!tmp6) {
      tmp6 = accessibilityLabel;
    }
    obj2.accessibilityLabel = tmp6;
    obj2.accessibilityHint = accessibilityHint;
    obj2.accessibilityLanguage = accessibilityLanguage;
    obj2.accessibilityRole = "button";
    obj2.accessibilityState = merged;
    str = "no-hide-descendants";
    if ("no" !== importantForAccessibility) {
      str = importantForAccessibility;
    }
    obj2.importantForAccessibility = str;
    obj2.hasTVPreferredFocus = hasTVPreferredFocus;
    obj2.nextFocusDown = nextFocusDown;
    obj2.nextFocusForward = nextFocusForward;
    obj2.nextFocusLeft = nextFocusLeft;
    obj2.nextFocusRight = nextFocusRight;
    obj2.nextFocusUp = nextFocusUp;
    obj2.testID = testID;
    obj2.disabled = disabled;
    obj2.onPress = onPress;
    obj2.touchSoundDisabled = touchSoundDisabled;
    obj2.ref = global.ref;
    obj3 = { style: items };
    tmp25 = require("View");
    obj4 = { style: items1 };
    obj4.disabled = disabled;
    obj4.children = formatted;
    obj3.children = jsx(require("useTextPressability"), obj4);
    obj2.children = jsx(tmp25, obj3);
    return tmp23(tmp24, obj2);
  }
}
Button.displayName = "Button";
let closure_6 = importDefaultResult.create({ button: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 }, text: Object.assign({ textAlign: "center", margin: 8 }, { color: "white", fontWeight: "500" }), buttonDisabled: { elevation: 0, backgroundColor: "#dfdfdf" }, textDisabled: { color: "#a1a1a1" } });

export default Button;
