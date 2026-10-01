// Module ID: 11701
// Function ID: 11702
// Name: ScheduledMessagesIntro
// Dependencies: [17, 21, 4836, 576, 11702, 4832, 1115, 9571, 11691, 10413, 2]
// Exports: default

// Module 11701 (ScheduledMessagesIntro)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AttachmentIcon from "AttachmentIcon" /* 9571 */;
import PlusLargeIcon2 from "PlusLargeIcon" /* 10413 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11691 */;
import AssetRegistryDefault from "AssetRegistry" /* 11702 */;
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
function MenuRow(arg0) {
  let highlighted;
  let icon;
  let items1;
  let label;
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_8();
  const items = [tmp.menuRow, ];
  let menuRowHighlighted = null;
  const tmp2 = metroImportDefault;
  const tmp3 = hasOwnProperty;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = menuRowHighlighted;
  items1 = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
  items1[0] = metroRequire(icon, obj2);
  items1[1] = metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label });
  return tmp2(tmp3, obj);
}
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: size, textContainer: obj3, text: { textAlign: "center" }, demo: obj4, menu: obj5, menuRow: obj6, menuRowHighlighted: obj7, menuDivider: obj8, chatInput: obj9, plusButton: size1 };
obj2 = { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
size = { height: 144, marginBottom: nativeDefault.space.PX_16, width: 180 };
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj5 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj6 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj9 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
size1 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND, borderRadius: nativeDefault.radii.round, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, justifyContent: "center", width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE };
let closure_8 = createStyles(obj);
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
  const tmp = closure_8();
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroImportDefault(hasOwnProperty, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { source: AssetRegistryDefault, style: tmp.upsellImage };
  items[0] = metroRequire(_false, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(intl6.t["C/j9NE"]) };
  const Heading = Text_Text.Heading;
  intl = intl6.intl;
  items1 = [metroRequire(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: intl2.format(intl6.t.PqmI8J, {}) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items1[1] = metroRequire(Text, obj6);
  items[1] = metroImportDefault(hasOwnProperty, obj4);
  const obj7 = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  const obj8 = { style: tmp.menu, children: items2 };
  const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: intl3.string(intl6.t["8Hvr3+"]), highlighted: false };
  intl3 = intl6.intl;
  items2 = [metroRequire(MenuRow, obj9), , ];
  const obj10 = { style: tmp.menuDivider };
  items2[1] = metroRequire(hasOwnProperty, obj10);
  const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: intl4.string(intl6.t["3+ii4F"]), highlighted: true };
  intl4 = intl6.intl;
  items2[2] = metroRequire(MenuRow, obj11);
  items3 = [metroImportDefault(hasOwnProperty, obj8), ];
  const obj12 = { style: tmp.chatInput, children: items4 };
  const obj13 = { style: tmp.plusButton, children: metroRequire(PlusLargeIcon, obj14) };
  obj14 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
  PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
  items4 = [metroRequire(hasOwnProperty, obj13), ];
  const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
  const Text2 = Text_Text.Text;
  intl5 = intl6.intl;
  items4[1] = metroRequire(Text2, obj15);
  items3[1] = metroImportDefault(hasOwnProperty, obj12);
  items[2] = metroImportDefault(hasOwnProperty, obj7);
  return metroRequire(React3, obj);
};
