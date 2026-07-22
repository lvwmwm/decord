// Module ID: 5783
// Function ID: 49472
// Name: HeaderActionButton
// Dependencies: []

// Module 5783 (HeaderActionButton)
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[1]).ANDROID_FOREGROUND_RIPPLE;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = { button: {} };
obj = { color: importDefault(dependencyMap[4]).colors.TEXT_BRAND, textTransform: "capitalize" };
obj.text = obj;
obj.buttonFont = { "Bool(true)": true, "Bool(true)": true };
obj.buttonDisabled = { opacity: 0.6 };
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
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
    let obj = {};
    const items = [, , ];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    obj.style = items;
    obj.maxFontSizeMultiplier = ref(dependencyMap[6]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    obj.children = text;
    let tmp2 = callback(ref(dependencyMap[5]).Text, obj);
  } else if (null != IconComponent) {
    obj = { size: IconComponentSize };
    tmp2 = callback(IconComponent, obj);
  } else if (null != source) {
    obj = { source, style: imageStyle, size: iconSize };
    tmp2 = callback(importDefault(dependencyMap[7]), obj);
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
  return closure_5(ref(dependencyMap[8]).PressableOpacity, obj1);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = forwardRefResult;
