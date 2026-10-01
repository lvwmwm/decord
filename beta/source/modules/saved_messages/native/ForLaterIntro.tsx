// Module ID: 12868
// Function ID: 12869
// Name: ForLaterIntro
// Dependencies: [17, 6572, 21, 4836, 576, 7285, 12869, 12870, 4832, 1115, 12871, 11207, 4795, 6630, 2]
// Exports: default

// Module 12868 (ForLaterIntro)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import ClockIcon from "ClockIcon" /* 4795 */;
import Text_Text from "Text/Text" /* 4832 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import BookmarkIcon from "BookmarkIcon" /* 11207 */;
import _modDef12871 from "module_12871" /* 12871 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
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
let size2;
let tmp8;
const ChevronSmallRightIcon2 = tmp8(6630);
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
  isReminder = isReminder.isReminder;
  const tmp = closure_8();
  const obj = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  const obj2 = { style: tmp.messages, children: items };
  items = [, ];
  const obj3 = { source: { uri: _modDef12871 }, style: tmp.avatar };
  ({ uri: _modDef12871 });
  items[0] = metroRequire(_false, obj3);
  const obj5 = { style: tmp.messageLines, children: items1 };
  const obj6 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items1 = [metroRequire(Text, obj6), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items1[1] = metroRequire(Text2, obj7);
  const obj8 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
  const Text3 = Text_Text.Text;
  intl3 = intl7.intl;
  items1[2] = metroRequire(Text3, obj8);
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
  const Text4 = Text_Text.Text;
  intl4 = intl7.intl;
  items1[3] = metroRequire(Text4, obj9);
  items[1] = metroImportDefault(hasOwnProperty, obj5);
  items2 = [metroImportDefault(hasOwnProperty, obj2), ];
  const obj10 = { style: tmp.sheet, children: items3 };
  items3 = [, , ];
  const obj11 = { style: tmp.grabber };
  items3[0] = metroRequire(hasOwnProperty, obj11);
  const obj12 = { icon: BookmarkIcon.BookmarkIcon, label: intl5.string(intl7.t.tpxJto), highlighted: !isReminder };
  intl5 = intl7.intl;
  items3[1] = metroRequire(SheetRow, obj12);
  const obj13 = { icon: ClockIcon.ClockIcon, label: intl6.string(intl7.t.mJ3P0N), highlighted: isReminder, hasArrow: true };
  intl6 = intl7.intl;
  items3[2] = metroRequire(SheetRow, obj13);
  items2[1] = metroImportDefault(hasOwnProperty, obj10);
  return metroImportDefault(hasOwnProperty, obj);
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
  const tmp = closure_8();
  const items = [tmp.sheetRow, ];
  let sheetRowHighlighted = null;
  const tmp2 = metroImportDefault;
  const tmp3 = hasOwnProperty;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = sheetRowHighlighted;
  items1 = [, , ];
  const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  items1[0] = metroRequire(icon, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
  items1[1] = metroRequire(Text_Text.Text, obj3);
  let tmp5Result = null;
  const tmp5 = metroRequire;
  if (flag) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
    tmp5Result = tmp5(ChevronSmallRightIcon, obj4);
  }
  items1[2] = tmp5Result;
  return tmp2(tmp3, obj);
}
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = react_native);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: size, textContainer: obj3, text: { textAlign: "center" }, demo: obj4, messages: obj5, avatar: size1, messageLines: obj6, sheet: obj7, grabber: size2, sheetRow: obj8, sheetRowHighlighted: obj9, sheetRowLabel: { flex: 1 } };
obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
size = { width: 180, height: 144, marginBottom: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, marginTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj7 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8 };
size2 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, height: 4, marginVertical: nativeDefault.space.PX_8, width: 36 };
obj8 = { alignItems: "center", borderRadius: nativeDefault.radii.sm, flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default function ForLaterIntro(type) {
  let format;
  let items;
  let items1;
  let obj2;
  let obj7;
  let string;
  let t;
  let tmp10;
  type = type.type;
  const tmp = closure_8();
  const tmp4 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroImportDefault(hasOwnProperty, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { source: importDefault(tmp4 ? 12869 : 12870), style: tmp.upsellImage };
  items[0] = metroRequire(_false, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: string(tmp4 ? t["5Iw19e"] : t["93WOd1"]) };
  const Heading = tmp2(4832).Heading;
  const intl = tmp2(1115).intl;
  string = intl.string;
  t = tmp2(1115).t;
  items1 = [metroRequire(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: format(tmp10, obj7) };
  const Text = tmp2(4832).Text;
  const intl2 = tmp2(1115).intl;
  format = intl2.format;
  const t2 = tmp2(1115).t;
  tmp10 = tmp4 ? t2.YI4UjI : t2["5TSj/g"];
  const intl3 = tmp2(1115).intl;
  const string2 = intl3.string;
  const t3 = tmp2(1115).t;
  obj7 = { itemName: string2(tmp4 ? t3.mJ3P0N : t3.tpxJto) };
  items1[1] = metroRequire(Text, obj6);
  items[1] = metroImportDefault(hasOwnProperty, obj4);
  items[2] = metroRequire(IntroDemo, { isReminder: tmp4 });
  return metroRequire(React3, obj);
};
