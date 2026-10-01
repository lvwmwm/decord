// Module ID: 16083
// Function ID: 16084
// Name: ForYouUnreadClearedState
// Dependencies: [19, 17, 21, 4836, 576, 1177, 10115, 4832, 1115, 2]
// Exports: ForYouUnreadClearedState

// Module 16083 (ForYouUnreadClearedState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 10115 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: size, icon: obj2, headerText: { marginBottom: 2 } };
size = { width: 48, height: 48, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: nativeDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  let intl;
  let intl2;
  let items;
  let items1;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const obj2 = { style: tmp.imageContainer };
  items[0] = React3(View, obj2);
  const obj3 = { source: AssetRegistryDefault, style: tmp.icon, color: tmp.icon.color };
  const Icon = native.Icon;
  items[1] = React3(Icon, obj3);
  const obj4 = { children: items1 };
  const obj5 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: intl.string(intl3.t.DonStq) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj5), ];
  const obj6 = { color: "text-default", variant: "text-md/medium", children: intl2.string(intl3.t.jXFsai) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj6);
  items[2] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj);
};
