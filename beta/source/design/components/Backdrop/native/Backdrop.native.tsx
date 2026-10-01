// Module ID: 5267
// Function ID: 5268
// Name: Backdrop
// Dependencies: [19, 17, 21, 4836, 576, 1115, 4540, 1613, 4566, 5268, 2]
// Exports: Backdrop

// Module 5267 (Backdrop)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import native from "native" /* 4540 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp6;
const VisualEffectViewAnimatedDefault = tmp6(5268);
({ Pressable: c3, StyleSheet } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = {};
let createStyles = createStyles_mod;
let obj = { fill: StyleSheet.absoluteFillObject, backdrop: obj2, backdropOpaque: obj3, accessibilityDismiss: { position: "absolute", top: 0, left: 0, right: 0, height: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = function Backdrop(animatedProps) {
  let accessibilityLabel;
  let accessibleDismissStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let obj8;
  let onDismiss;
  let style;
  let tmp6Result;
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_6;
  }
  let flag = animatedProps.opaque;
  if (flag === undefined) {
    flag = false;
  }
  let str = animatedProps.blur;
  if (str === undefined) {
    str = "none";
  }
  ({ onDismiss, accessibilityLabel } = animatedProps);
  if (accessibilityLabel === undefined) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.WAI6xu);
  }
  const prop = animatedProps["aria-hidden"];
  const tmp4 = closure_7();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  const obj2 = { onPress: onDismiss, "aria-hidden": true };
  const top = useSafeAreaInsetsDefault().top;
  const backgroundColor = tmp4.backdrop.backgroundColor;
  const obj3 = { style: items, pointerEvents: "box-none", animatedProps, children: items2 };
  items = [tmp4.fill, style];
  let tmp8 = null != onDismiss;
  const View = ReanimatedRexportDefault.View;
  const tmp7 = hasOwnProperty;
  if (tmp8) {
    const obj4 = { style: items1, onPress: onDismiss, accessibilityRole: "button", accessibilityLabel, "aria-hidden": prop };
    items1 = [tmp4.accessibilityDismiss, , ];
    const obj5 = { top };
    items1[1] = obj5;
    items1[2] = accessibleDismissStyle;
    tmp8 = React3(_false, obj4);
  }
  items2 = [tmp8, ];
  const tmp12 = _false;
  if ("none" !== str) {
    let num;
    const obj6 = { style: tmp4.fill, children: React3(tmp6Result, obj7) };
    const merged = Object.assign(obj2);
    tmp6Result = VisualEffectViewAnimatedDefault;
    if ("none" === str) {
      num = 0;
    } else if ("subtle" === str) {
      num = 0.05;
    } else {
      num = 0.25;
    }
    obj8 = obj6;
    obj7 = { blurAmount: num, style: tmp4.fill, blurTheme: theme, tintColor: backgroundColor, android_fallbackColor: tmp4.backdrop.backgroundColor };
  } else {
    obj8 = { style: items3 };
    const merged1 = Object.assign(obj2);
    items3 = [tmp4.fill, flag ? tmp4.backdropOpaque : tmp4.backdrop];
  }
  items2[1] = React3(tmp12, obj8);
  return tmp7(View, obj3);
};
