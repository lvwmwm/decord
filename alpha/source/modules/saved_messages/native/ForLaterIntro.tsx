// Module ID: 11178
// Function ID: 11179
// Name: ForLaterIntro
// Dependencies: [17, 5273, 21, 5014, 575, 10192, 11179, 11183, 5624, 1113, 5717, 11187, 11161, 5740, 7378, 2]
// Exports: default

// Module 11178 (ForLaterIntro)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5273 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ClockIcon from "ClockIcon" /* 5740 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10192 */;
import BookmarkIcon from "BookmarkIcon" /* 11161 */;
import _modDef11187 from "module_11187" /* 11187 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let tmp8;
const ChevronSmallRightIcon2 = tmp8(7378);
function IntroDemo(isReminder) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  isReminder = isReminder.isReminder;
  const tmp = closure_7();
  const obj = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  const obj2 = { style: tmp.messages, children: items };
  const obj3 = { source: obj4, style: tmp.avatar };
  obj4 = { uri: _modDef11187 };
  const tmp2 = FastImageDefault;
  items = [hasOwnProperty(tmp2, obj3), ];
  const obj5 = { style: tmp.messageLines, children: items1 };
  const obj6 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items1 = [hasOwnProperty(Text, obj6), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items1[1] = hasOwnProperty(Text2, obj7);
  const obj8 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
  const Text3 = Text_Text.Text;
  intl3 = intl7.intl;
  items1[2] = hasOwnProperty(Text3, obj8);
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
  const Text4 = Text_Text.Text;
  intl4 = intl7.intl;
  items1[3] = hasOwnProperty(Text4, obj9);
  items[1] = metroRequire(React3, obj5);
  items2 = [metroRequire(React3, obj2), ];
  const obj10 = { style: tmp.sheet, children: items3 };
  items3 = [, , ];
  const obj11 = { style: tmp.grabber };
  items3[0] = hasOwnProperty(React3, obj11);
  const obj12 = { icon: BookmarkIcon.BookmarkIcon, label: intl5.string(intl7.t.tpxJto), highlighted: !isReminder };
  intl5 = intl7.intl;
  items3[1] = hasOwnProperty(SheetRow, obj12);
  const obj13 = { icon: ClockIcon.ClockIcon, label: intl6.string(intl7.t.mJ3P0N), highlighted: isReminder, hasArrow: true };
  intl6 = intl7.intl;
  items3[2] = hasOwnProperty(SheetRow, obj13);
  items2[1] = metroRequire(React3, obj10);
  return metroRequire(React3, obj);
}
function SheetRow(hasArrow) {
  let highlighted;
  let icon;
  let items1;
  let label;
  let flag = hasArrow.hasArrow;
  ({ icon, label, highlighted } = hasArrow);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const items = [tmp.sheetRow, ];
  let sheetRowHighlighted = null;
  const tmp2 = metroRequire;
  const tmp3 = React3;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = sheetRowHighlighted;
  items1 = [, , ];
  const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  items1[0] = hasOwnProperty(icon, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  let tmp5Result = null;
  const tmp5 = hasOwnProperty;
  if (flag) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
    tmp5Result = tmp5(ChevronSmallRightIcon, obj4);
  }
  items1[2] = tmp5Result;
  return tmp2(tmp3, obj);
}
({ ScrollView: c3, View: closure_4 } = react_native);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: obj3, textContainer: obj4, text: { textAlign: "center" }, demo: obj5, messages: obj6, avatar: size, messageLines: obj7, sheet: obj8, grabber: size1, sheetRow: obj9, sheetRowHighlighted: obj10, sheetRowLabel: { flex: 1 } };
obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, marginTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj7 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj8 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8 };
size1 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, height: 4, marginVertical: nativeDefault.space.PX_8, width: 36 };
obj9 = { alignItems: "center", borderRadius: nativeDefault.radii.sm, flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default function ForLaterIntro(type) {
  let BookmarksSpotIllustration;
  let format;
  let items;
  let items1;
  let obj2;
  let obj7;
  let string;
  let t;
  let tmp9;
  type = type.type;
  const tmp = closure_7();
  const tmp4 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  if (tmp4) {
    BookmarksSpotIllustration = tmp2(11179).ReminderWatchSpotIllustration;
  } else {
    BookmarksSpotIllustration = tmp2(11183).BookmarksSpotIllustration;
  }
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroRequire(React3, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { style: tmp.upsellImage, children: hasOwnProperty(BookmarksSpotIllustration, { width: 180, height: 120, accessible: false }) };
  items[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: string(tmp4 ? t["5Iw19e"] : t["93WOd1"]) };
  const Heading = tmp2(5624).Heading;
  const intl = tmp2(1113).intl;
  string = intl.string;
  t = tmp2(1113).t;
  items1 = [hasOwnProperty(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: format(tmp9, obj7) };
  const Text = tmp2(5624).Text;
  const intl2 = tmp2(1113).intl;
  format = intl2.format;
  const t2 = tmp2(1113).t;
  tmp9 = tmp4 ? t2.YI4UjI : t2["5TSj/g"];
  const intl3 = tmp2(1113).intl;
  const string2 = intl3.string;
  const t3 = tmp2(1113).t;
  obj7 = { itemName: string2(tmp4 ? t3.mJ3P0N : t3.tpxJto) };
  items1[1] = hasOwnProperty(Text, obj6);
  items[1] = metroRequire(React3, obj4);
  items[2] = hasOwnProperty(IntroDemo, { isReminder: tmp4 });
  return hasOwnProperty(_false, obj);
};
