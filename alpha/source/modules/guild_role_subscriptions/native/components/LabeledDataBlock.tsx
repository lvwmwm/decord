// Module ID: 17198
// Function ID: 17199
// Name: LabeledDataBlock
// Dependencies: [19, 17, 21, 5014, 575, 5624, 6980, 2]
// Exports: default

// Module 17198 (LabeledDataBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { marginRight: 4 }, titleSection: { flexDirection: "row", alignItems: "center", marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_MUTED_BG, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let children;
  let icon;
  let items;
  let items1;
  let items2;
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
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(icon, { size: "sm" }) };
    const PressableOpacity = tmp5(6980).PressableOpacity;
    tmp4Result = tmp4(PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  items2 = [React3(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj5 = { variant: "heading-xl/medium", color: "mobile-text-heading-primary", children };
    tmp4Result2 = tmp4(tmp5(5624).Text, obj5);
  }
  items2[1] = tmp4Result2;
  return React3(View, obj);
};
