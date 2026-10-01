// Module ID: 14765
// Function ID: 14766
// Name: LabeledDataBlock
// Dependencies: [19, 17, 1074, 21, 4836, 576, 5836, 4832, 5435, 1177, 2]
// Exports: default

// Module 14765 (LabeledDataBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: { marginRight: 4 }, data: obj3, titleSection: { flexDirection: "row", alignItems: "center", marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let Icon;
  let children;
  let icon;
  let items;
  let items1;
  let items2;
  let obj5;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  const obj = { style: items, children: items2 };
  items = [tmp.container, style];
  const obj2 = { style: tmp.titleSection, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(Icon, obj5) };
    const PressableOpacity = tmp5(5435).PressableOpacity;
    obj5 = { size: native.Icon.Sizes.SMALL, source: icon };
    Icon = tmp5(1177).Icon;
    tmp4Result = tmp4(PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  items2 = [React3(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj6 = { style: tmp.data, children };
    tmp4Result2 = tmp4(tmp5(1177).LegacyText, obj6);
  }
  items2[1] = tmp4Result2;
  return React3(View, obj);
};
