// Module ID: 12709
// Function ID: 12710
// Name: ConjurePlanCommandMenuPreview
// Dependencies: [19, 17, 21, 5009, 575, 12710, 5619, 1114, 5712, 1410, 2]
// Exports: default

// Module 12709 (ConjurePlanCommandMenuPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ArrowAngleLeftUpIcon2 from "ArrowAngleLeftUpIcon" /* 12710 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, row: obj3, muted: { opacity: 0.5 }, highlighted: obj4, label: { flexShrink: 1 }, appIcon: size };
obj2 = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj4 = { borderColor: nativeDefault.colors.BORDER_FOCUS };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandMenuPreview.tsx");

export default function ConjurePlanCommandMenuPreview(appIconSrc) {
  let commandName;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let target;
  let tmp11Result;
  appIconSrc = appIconSrc.appIconSrc;
  ({ target, commandName } = appIconSrc);
  const tmp = closure_6();
  const obj2 = { style: items, children: items1 };
  items = [, ];
  const obj = { style: tmp.sheet, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  ({ row: arr[0], muted: arr[1] } = tmp);
  let tmp5 = null;
  if ("message" === target) {
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
    const ArrowAngleLeftUpIcon = ArrowAngleLeftUpIcon2.ArrowAngleLeftUpIcon;
    tmp5 = React3(ArrowAngleLeftUpIcon, obj3);
  }
  items1 = [tmp5, ];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  const obj4 = { variant: "text-sm/medium", color: "text-default", children: string("message" === target ? t["5IEsGx"] : t.LYju5J) };
  items1[1] = React3(Text, obj4);
  items2 = [hasOwnProperty(View, obj2), ];
  const obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ row: arr4[0], highlighted: arr4[1] } = tmp);
  let tmp10Result = null;
  if (null != appIconSrc) {
    const obj6 = { source: tmp11Result.makeSource(appIconSrc), style: tmp.appIcon };
    const tmp15 = FastImageDefault;
    tmp11Result = AvatarUtils;
    tmp10Result = tmp10(tmp15, obj6);
  }
  items4 = [tmp10Result, ];
  const obj7 = { variant: "text-sm/medium", color: "text-strong", style: tmp.label, children: commandName };
  items4[1] = React3(Text_Text.Text, obj7);
  items2[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj);
};
