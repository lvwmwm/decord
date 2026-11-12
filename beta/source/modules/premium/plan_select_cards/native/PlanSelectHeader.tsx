// Module ID: 15669
// Function ID: 15670
// Name: PlanSelectHeader
// Dependencies: [19, 17, 21, 5170, 575, 8131, 7101, 1113, 5783, 2]
// Exports: default

// Module 15669 (PlanSelectHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5783 */;
import ArrowLargeLeftIcon2 from "ArrowLargeLeftIcon" /* 7101 */;
import IconButton2 from "IconButton" /* 8131 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let rect;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, backButton: rect, title: { alignItems: "center" } };
obj2 = { width: "100%", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/plan_select_cards/native/PlanSelectHeader.tsx");

export default function PlanSelectHeader(arg0) {
  let ArrowLargeLeftIcon;
  let IconButton;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj4;
  let onBack;
  let style;
  ({ style, onBack } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { style: tmp.backButton, children: React3(IconButton, obj3) };
  obj3 = { variant: "icon-only", size: "sm", icon: React3(ArrowLargeLeftIcon, obj4), accessibilityLabel: intl.string(intl4.t["13/7kX"]), onPress: onBack };
  IconButton = IconButton2.IconButton;
  obj4 = { size: "md", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
  ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
  intl = intl4.intl;
  items1 = [React3(View, obj2), ];
  const obj5 = { style: tmp.title, children: items2 };
  const obj6 = { variant: "nitro-xs", color: "text-strong", children: intl2.string(intl4.t.lG6a5x) };
  const Heading = Text_Text.Heading;
  intl2 = intl4.intl;
  items2 = [React3(Heading, obj6), ];
  const obj7 = { variant: "body-xs/medium", color: "text-default", children: intl3.string(intl4.t.SD5MJW) };
  const Text = Text_Text.Text;
  intl3 = intl4.intl;
  items2[1] = React3(Text, obj7);
  items1[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj);
};
