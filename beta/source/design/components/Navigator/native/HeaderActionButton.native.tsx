// Module ID: 6795
// Function ID: 6796
// Name: HeaderActionButton
// Dependencies: [19, 1181, 21, 4836, 576, 4832, 5286, 5283, 5435, 2]

// Module 6795 (HeaderActionButton)
import nativeDefault from "native" /* 576 */;
import FormConstants from "FormConstants" /* 1181 */;
import Text_Text from "Text/Text" /* 4832 */;
import IconDefault from "Icon" /* 5283 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { button: { alignSelf: "stretch", alignItems: "center", justifyContent: "center", flexDirection: "row" }, text: obj2, buttonFont: { fontSize: 16, maxWidth: 80 }, buttonDisabled: { opacity: 0.6 } };
obj2 = { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" };
let closure_6 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let IconComponent;
  let IconComponentSize;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let foregroundRipple;
  let hitSlop;
  let icon;
  let iconSize;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let onAccessibilityAction;
  let onPress;
  let source;
  let style;
  let text;
  let textStyle;
  let tmp11;
  let tmp2;
  ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
  ({ style, textStyle, imageStyle, accessibilityHint, accessibilityActions, onAccessibilityAction, icon, IconComponentSize, onPress, foregroundRipple, iconSize, hitSlop } = arg0);
  const tmp = closure_6();
  if (null != text) {
    const obj2 = { style: items, variant: "text-md/semibold", lineClamp: 1, maxFontSizeMultiplier: ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, children: text };
    items = [, , ];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    const Text = Text_Text.Text;
    tmp2 = React3(Text, obj2);
  } else if (null != IconComponent) {
    const obj3 = { size: IconComponentSize };
    tmp2 = React3(IconComponent, obj3);
  } else if (null != source) {
    const obj = { source, style: imageStyle, size: iconSize };
    tmp2 = React3(IconDefault, obj);
  }
  const obj4 = { ref, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityRole: "button", onPress, activeOpacity: 0.6, androidRippleConfig: tmp11, style: items1, hitSlop, disabled, children: items2 };
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp10 = hasOwnProperty;
  if (accessibilityLabel == null) {
    accessibilityLabel = text;
  }
  tmp11 = undefined;
  if (foregroundRipple) {
    tmp11 = ANDROID_FOREGROUND_RIPPLE;
  }
  items1 = [tmp.button, style, disabled && tmp.buttonDisabled];
  items2 = [tmp2, icon];
  return tmp10(PressableOpacity, obj4);
});
const result = size.fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = forwardRefResult;
