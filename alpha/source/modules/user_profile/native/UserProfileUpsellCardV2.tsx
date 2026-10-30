// Module ID: 16486
// Function ID: 16487
// Name: UserProfileUpsellCardV2
// Dependencies: [19, 17, 7610, 21, 5009, 575, 5582, 1093, 5619, 5629, 9506, 2]
// Exports: default

// Module 16486 (UserProfileUpsellCardV2)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Text_Text from "Text/Text" /* 5619 */;
import ColorConstants from "ColorConstants" /* 7610 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { outer: obj2, inner: obj3, text: obj4, textCenter: { textAlign: "center" } };
obj2 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default function UserProfileUpsellCardV2(textAlign) {
  let NitroWheelIcon;
  let buttonText;
  let buttonVariant;
  let children;
  let innerStyle;
  let items;
  let items1;
  let items3;
  let obj2;
  let obj4;
  let onButtonPress;
  let onLayout;
  let style;
  let tmp7;
  let tmp8;
  let str = textAlign.textAlign;
  const text = textAlign.text;
  if (str === undefined) {
    str = "left";
  }
  ({ buttonVariant, buttonText, onButtonPress } = textAlign);
  if (buttonVariant === undefined) {
    buttonVariant = "primary";
  }
  let flag = textAlign.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = textAlign.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ children, style, innerStyle, onLayout } = textAlign);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: items, onLayout, children: tmp7(tmp8, obj2) };
  items = [tmp.outer, style];
  obj2 = { style: items1, children: items3 };
  items1 = [tmp.inner, innerStyle];
  const items2 = [tmp.text, ];
  let textCenter = "center" === str;
  const tmp5 = LinearGradientDefault;
  const Text = Text_Text.Text;
  tmp7 = metroRequire;
  tmp8 = View;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items2[1] = textCenter;
  items3 = [hasOwnProperty(Text, { style: items2, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: text }), , ];
  const obj3 = { icon: hasOwnProperty(NitroWheelIcon, obj4), text: buttonText, onPress: onButtonPress, variant: buttonVariant, loading: flag2, disabled: flag, grow: true };
  const Button = tmp6(5629).Button;
  obj4 = { color: nativeDefault.colors.WHITE, size: "xs" };
  NitroWheelIcon = tmp6(9506).NitroWheelIcon;
  if (!flag) {
    flag = flag2;
  }
  items3[1] = hasOwnProperty(Button, obj3);
  items3[2] = children;
  return hasOwnProperty(tmp5, obj);
};
export const GRADIENT_BORDER_WIDTH = 1;
