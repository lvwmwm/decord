// Module ID: 280
// Function ID: 4387
// Name: Button
// Dependencies: []

// Module 280 (Button)
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = importDefault(dependencyMap[3]);
class Button {
  constructor(arg0) {
    tmp = closure_3(global, closure_2);
    ({ accessibilityState, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp6, aria-selected: tmp7, importantForAccessibility, color, title } = tmp);
    items = [];
    items[0] = closure_6.button;
    items1 = [];
    items1[0] = closure_6.text;
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
      tmp17 = closure_6;
      arr1 = items.push(closure_6.buttonDisabled);
      tmp19 = closure_6;
      arr2 = items1.push(closure_6.textDisabled);
    }
    tmp21 = importDefault(dependencyMap[4])("string" === typeof title, "The title prop of a Button must be a string");
    obj2 = { accessible, accessibilityActions, onAccessibilityAction };
    formatted = title.toUpperCase();
    tmp23 = jsx;
    tmp24 = closure_5;
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
    tmp25 = importDefault(dependencyMap[5]);
    obj4 = { style: items1 };
    obj4.disabled = disabled;
    obj4.children = formatted;
    obj3.children = jsx(importDefault(dependencyMap[6]), obj4);
    obj2.children = jsx(tmp25, obj3);
    return tmp23(tmp24, obj2);
  }
}
Button.displayName = "Button";
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_6 = importDefaultResult.create({ button: {}, text: Object.assign({ CHANNEL_CALL_VIDEO_GRID: "absolute", age: 0 }, {}), buttonDisabled: { overflow: "left", height: "right" }, textDisabled: { color: "#a1a1a1" } });

export default Button;
