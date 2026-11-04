// Module ID: 18887
// Function ID: 18888
// Name: GuildRoleSubscriptionPurchaseCard
// Dependencies: [32, 19, 17, 21, 5141, 575, 1627, 17450, 18882, 5396, 5761, 1187, 18888, 5400, 1113, 17460, 2]
// Exports: default

// Module 18887 (GuildRoleSubscriptionPurchaseCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5396 */;
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import Text_Text from "Text/Text" /* 5761 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17450 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 17460 */;
import Elements from "Elements" /* 18882 */;
import SubscribeButtonDefault from "SubscribeButton" /* 18888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { padding: 16, paddingBottom: 24 }, content: obj3, headerText: { flexDirection: "row", alignItems: "center" }, headerDot: size, seperator: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
obj4 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(listingId) {
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj5;
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const tmp = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useDescription(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useName(listingId), 1)[0];
  const obj3 = Elements;
  const formattedSubscriptionPlan = obj3.useFormattedSubscriptionPlan(listingId);
  const obj4 = { scrollable: true, startExpanded: true, children: metroImportDefault(View, obj5) };
  obj5 = { style: tmp.container, children: items2 };
  const obj6 = { style: tmp.header, children: items1 };
  const obj7 = { style: tmp.headerText, children: items };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: first1 }), , ];
  const obj8 = { style: tmp.headerDot };
  items[1] = metroRequire(View, obj8);
  items[2] = metroRequire(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan });
  items1 = [metroImportDefault(View, obj7), metroRequire(native.Spacer, { size: 16 }), metroRequire(Elements.TruncatedText, { variant: "body-sm/normal", color: "text-default", lineClamp: 2, children: first }), metroRequire(native.Spacer, { size: 24 }), metroRequire(SubscribeButtonDefault, { listingId })];
  items2 = [metroImportDefault(View, obj6), , ];
  const obj9 = { style: tmp.seperator };
  items2[1] = metroRequire(View, obj9);
  const obj10 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj11, children: items3 };
  obj11 = { paddingBottom: 16 + bottom };
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj12 = { variant: "body-sm/semibold", color: "text-default", children: intl.string(intl2.t.UdEvUi) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items3 = [metroRequire(Text, obj12), metroRequire(native.Spacer, { size: 24 }), metroRequire(GuildRoleSubscriptionCard.Content, { listingId, guildId })];
  items2[2] = metroImportDefault(BottomSheetScrollView, obj10);
  return metroRequire(BottomSheet, obj4);
};
