// Module ID: 5788
// Function ID: 49512
// Name: HeaderActionButton
// Dependencies: [31, 1277, 33, 4130, 689, 4126, 4547, 4545, 4660, 2]

// Module 5788 (HeaderActionButton)
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { button: { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, textTransform: "capitalize" };
obj.text = obj;
obj.buttonFont = { fontSize: 16, maxWidth: 80 };
obj.buttonDisabled = { opacity: 0.6 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let IconComponent;
  let IconComponentSize;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let foregroundRipple;
  let icon;
  let iconSize;
  let imageStyle;
  let onAccessibilityAction;
  let onPress;
  let source;
  let style;
  let text;
  let textStyle;
  ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
  ({ style, textStyle, imageStyle, accessibilityHint, accessibilityActions, onAccessibilityAction, icon, IconComponentSize, onPress, foregroundRipple, iconSize } = arg0);
  const tmp = callback2();
  if (null != text) {
    let obj = { style: null, variant: "text-md/semibold", lineClamp: 1 };
    const items = [, , ];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    obj.style = items;
    obj.maxFontSizeMultiplier = require(4547) /* getButtonPadding */.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    obj.children = text;
    let tmp2 = callback(require(4126) /* Text */.Text, obj);
  } else if (null != IconComponent) {
    obj = { size: IconComponentSize };
    tmp2 = callback(IconComponent, obj);
  } else if (null != source) {
    obj = { source, style: imageStyle, size: iconSize };
    tmp2 = callback(importDefault(4545), obj);
  }
  const obj1 = { ref };
  if (null != accessibilityLabel) {
    text = accessibilityLabel;
  }
  obj1.accessibilityLabel = text;
  obj1.accessibilityHint = accessibilityHint;
  obj1.accessibilityActions = accessibilityActions;
  obj1.onAccessibilityAction = onAccessibilityAction;
  obj1.accessibilityRole = "button";
  obj1.onPress = onPress;
  obj1.activeOpacity = 0.6;
  let tmp11;
  if (foregroundRipple) {
    tmp11 = ANDROID_FOREGROUND_RIPPLE;
  }
  obj1.androidRippleConfig = tmp11;
  const items1 = [tmp.button, style, ];
  let buttonDisabled = disabled;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items1[2] = buttonDisabled;
  obj1.style = items1;
  obj1.disabled = disabled;
  const items2 = [tmp2, icon];
  obj1.children = items2;
  return closure_5(require(4660) /* PressableBase */.PressableOpacity, obj1);
});
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = forwardRefResult;
