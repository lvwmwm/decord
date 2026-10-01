// Module ID: 17584
// Function ID: 17585
// Name: GuildRoleSubscriptionBenefitModalHeader
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 5836, 14772, 6544, 9203, 4832, 1115, 1177, 2]
// Exports: default

// Module 17584 (GuildRoleSubscriptionBenefitModalHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerContainer: obj2, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, headerButton: obj3, disabledButton: obj4, titleContainer: { flex: 1, flexDirection: "column" }, title: obj5, subtitle: { textAlign: "center" } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj5 = { textAlign: "center" };
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  let LegacyText;
  let Text;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let listingId;
  let obj4;
  let obj9;
  let onClose;
  let onSave;
  let title;
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(listingId), 1)[0];
  const obj2 = { top: true, style: tmp.headerContainer, children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { style: items, accessibilityRole: "button", onPress: onClose, children: metroRequire(Text, obj4) };
  items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj4 = { style: tmp.headerButton, variant: "text-md/medium", color: "interactive-text-active", children: intl.string(intl3.t["ETE/oC"]) };
  const tmp7 = TouchableHitBoxDefault;
  Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [metroRequire(tmp7, obj3), , ];
  const obj5 = { style: tmp.titleContainer, children: items2 };
  items2 = [, ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: title };
  items2[0] = metroRequire(native.LegacyText, obj6);
  const obj7 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: first };
  items2[1] = metroRequire(Text_Text.Text, obj7);
  items1[1] = metroImportDefault(View, obj5);
  const obj8 = { style: items3, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: metroRequire(LegacyText, obj9) };
  items3 = [, ];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  const items4 = [tmp.headerButton, ];
  let disabledButton = !canSave;
  const tmp8 = TouchableHitBoxDefault;
  LegacyText = native.LegacyText;
  const tmp4 = metroImportDefault;
  if (!canSave) {
    disabledButton = tmp.disabledButton;
  }
  items4[1] = disabledButton;
  obj9 = { style: items4, children: intl2.string(intl3.t["R3BPH+"]) };
  intl2 = tmp5(1115).intl;
  items1[2] = metroRequire(tmp8, obj8);
  return tmp4(SafeAreaPaddingView, obj2);
};
