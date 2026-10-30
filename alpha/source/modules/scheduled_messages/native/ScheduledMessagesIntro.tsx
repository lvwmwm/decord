// Module ID: 14543
// Function ID: 14544
// Name: ScheduledMessagesIntro
// Dependencies: [17, 21, 5009, 575, 13952, 5619, 1114, 10515, 12382, 10808, 2]
// Exports: default

// Module 14543 (ScheduledMessagesIntro)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import AttachmentIcon from "AttachmentIcon" /* 10515 */;
import PlusLargeIcon2 from "PlusLargeIcon" /* 10808 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12382 */;
import ScheduleMessageSpotIllustration from "ScheduleMessageSpotIllustration" /* 13952 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
function MenuRow(arg0) {
  let highlighted;
  let icon;
  let items1;
  let label;
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_7();
  const items = [tmp.menuRow, ];
  let menuRowHighlighted = null;
  const tmp2 = metroRequire;
  const tmp3 = React3;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = menuRowHighlighted;
  items1 = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
  items1[0] = hasOwnProperty(icon, obj2);
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label });
  return tmp2(tmp3, obj);
}
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: obj3, textContainer: obj4, text: { textAlign: "center" }, demo: obj5, menu: obj6, menuRow: obj7, menuRowHighlighted: obj8, menuDivider: obj9, chatInput: obj10, plusButton: size };
obj2 = { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj6 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj7 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj10 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
size = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND, borderRadius: nativeDefault.radii.round, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, justifyContent: "center", width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default function ScheduledMessagesIntro() {
  let PlusLargeIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let obj2;
  const tmp = closure_7();
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroRequire(React3, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { style: tmp.upsellImage, children: hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false }) };
  items[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(intl6.t["C/j9NE"]) };
  const Heading = Text_Text.Heading;
  intl = intl6.intl;
  items1 = [hasOwnProperty(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: intl2.format(intl6.t.PqmI8J, {}) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items1[1] = hasOwnProperty(Text, obj6);
  items[1] = metroRequire(React3, obj4);
  const obj7 = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  const obj8 = { style: tmp.menu, children: items2 };
  const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: intl3.string(intl6.t["8Hvr3+"]), highlighted: false };
  intl3 = intl6.intl;
  items2 = [hasOwnProperty(MenuRow, obj9), , ];
  const obj10 = { style: tmp.menuDivider };
  items2[1] = hasOwnProperty(React3, obj10);
  const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: intl4.string(intl6.t["3+ii4F"]), highlighted: true };
  intl4 = intl6.intl;
  items2[2] = hasOwnProperty(MenuRow, obj11);
  items3 = [metroRequire(React3, obj8), ];
  const obj12 = { style: tmp.chatInput, children: items4 };
  const obj13 = { style: tmp.plusButton, children: hasOwnProperty(PlusLargeIcon, obj14) };
  obj14 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
  PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
  items4 = [hasOwnProperty(React3, obj13), ];
  const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
  const Text2 = Text_Text.Text;
  intl5 = intl6.intl;
  items4[1] = hasOwnProperty(Text2, obj15);
  items3[1] = metroRequire(React3, obj12);
  items[2] = metroRequire(React3, obj7);
  return hasOwnProperty(_false, obj);
};
