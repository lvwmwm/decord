// Module ID: 18572
// Function ID: 18573
// Name: GuildRoleSubscriptionPurchaseCard
// Dependencies: [32, 19, 17, 21, 5009, 575, 7142, 1626, 17147, 18567, 5267, 5619, 1188, 18573, 5270, 1114, 17157, 2]
// Exports: default

// Module 18572 (GuildRoleSubscriptionPurchaseCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import BottomSheetModal from "BottomSheetModal" /* 5270 */;
import Text_Text from "Text/Text" /* 5619 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7142 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17147 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 17157 */;
import Elements from "Elements" /* 18567 */;
import SubscribeButtonDefault from "SubscribeButton" /* 18573 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

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
  let items4;
  let obj12;
  let obj6;
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("PurchaseCard");
  const tmp2 = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useDescription(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useName(listingId), 1)[0];
  const obj4 = Elements;
  const formattedSubscriptionPlan = obj4.useFormattedSubscriptionPlan(listingId);
  const obj5 = { scrollable: true, startExpanded: true, children: metroImportDefault(View, obj6) };
  obj6 = { style: tmp2.container, children: items2 };
  const obj7 = { style: tmp2.header, children: items1 };
  const obj8 = { style: tmp2.headerText, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first1 }), , ];
  const obj9 = { style: tmp2.headerDot };
  items[1] = metroRequire(View, obj9);
  items[2] = metroRequire(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan });
  items1 = [metroImportDefault(View, obj8), metroRequire(native.Spacer, { size: 16 }), metroRequire(Elements.TruncatedText, { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: first }), metroRequire(native.Spacer, { size: 24 }), metroRequire(SubscribeButtonDefault, { listingId })];
  items2 = [metroImportDefault(View, obj7), , ];
  const obj10 = { style: tmp2.seperator };
  items2[1] = metroRequire(View, obj10);
  const obj11 = { scrollsToTop: false, style: tmp2.content, contentContainerStyle: obj12, children: items4 };
  obj12 = { paddingBottom: 16 + bottom };
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj13 = { variant: "text-sm/bold", color: "text-default", style: items3, children: intl.string(intl2.t.UdEvUi) };
  items3 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items4 = [metroRequire(Text, obj13), metroRequire(native.Spacer, { size: 24 }), metroRequire(GuildRoleSubscriptionCard.Content, { listingId, guildId })];
  items2[2] = metroImportDefault(BottomSheetScrollView, obj11);
  return metroRequire(BottomSheet, obj5);
};
