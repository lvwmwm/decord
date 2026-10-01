// Module ID: 16196
// Function ID: 16197
// Name: GuildRoleSubscriptionPurchasePreviewCard
// Dependencies: [32, 19, 17, 2045, 21, 4836, 576, 6400, 4832, 4800, 16197, 1981, 9807, 14785, 1177, 504, 4989, 1115, 5335, 14772, 16192, 5899, 16198, 2]
// Exports: default

// Module 16196 (GuildRoleSubscriptionPurchasePreviewCard)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import LayoutUtils from "LayoutUtils" /* 9807 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import EmojiIconDefault from "EmojiIcon" /* 14785 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
let size2;
function ContentHeader(arg0) {
  let count;
  let items;
  let items1;
  let title;
  ({ count, title } = arg0);
  const tmp = closure_11();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("PurchasePreviewCard", "text-xs/bold");
  const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: items, children: items1 };
  items = [tmp.contentHeader, typeConsolidationEyebrow.style];
  const Text = Text_Text.Text;
  items1 = [, , ];
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp.contentHeader, children: count };
  items1[0] = metroImportAll(Text_Text.Text, obj3);
  items1[1] = " ";
  items1[2] = title;
  return React4(Text, obj2);
}
function Separator() {
  const obj = { style: closure_11().separator };
  return metroImportAll(metroRequire, obj);
}
function EmojiGallery(arg0) {
  let GappedList;
  let emojiIds;
  let guildId;
  let items;
  let items1;
  let maxEmojis;
  let obj3;
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = closure_11();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  let obj = { style: tmp.emojiGallery, children: closure_8(GappedList, { gap: 18, children: items }) };
  GappedList = LayoutUtils.GappedList;
  items = [
    ...substr.map((id) => {
      const obj = { size: 30, fontSize: 20, guildId: require, id };
      return metroImportAll(EmojiIconDefault, obj, id);
    })
  ];
  let tmp3Result = diff > 0;
  if (tmp3Result) {
    const obj2 = { style: tmp.emojiTruncatedContainer, children: closure_9(Text_Text.Text, obj3) };
    obj3 = { variant: "text-sm/bold", color: "text-default", children: items1 };
    items1 = ["+", diff];
    tmp3Result = tmp3(tmp4, obj2, "andMore");
  }
  items[tmp7] = tmp3Result;
  return closure_8(closure_6, obj);
}
function BenefitShowCase(arg0) {
  let description;
  let items1;
  let title;
  ({ title, description } = arg0);
  let tmp3 = title;
  const tmp2 = metroRequire;
  if (typeof title === "string") {
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = metroImportAll(Text_Text.Text, obj2);
  }
  const children = [tmp3, ];
  let tmpResult = null != description;
  if (tmpResult) {
    const obj = { children: items1 };
    items1 = [metroImportAll(native.Spacer, { size: 2 }), ];
    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
    items1[1] = metroImportAll(Text_Text.Text, obj3);
    tmpResult = tmp(authStore, obj);
  }
  children[1] = tmpResult;
  return React4(tmp2, { children });
}
function ChannelBenefitShowCase(channelId) {
  let items2;
  let tmpResult;
  channelId = channelId.channelId;
  const description = channelId.description;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp4 = useChannelNameDefault(stateFromStores);
  const intl = channelId(1115).intl;
  let title = intl.string(channelId(1115).t.bz1PZX);
  if (null != stateFromStores) {
    const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: items2 };
    const obj3 = { size: channelId(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmpResult.getChannelIcon(stateFromStores) };
    const Icon = tmp(1177).Icon;
    tmpResult = channelId(5335);
    items2 = [closure_8(Icon, obj3), closure_8(channelId(1177).Spacer, { size: 4 }), ];
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp4 };
    items2[2] = closure_8(channelId(4832).Text, obj4);
    title = closure_9(closure_6, obj2);
  }
  return closure_8(BenefitShowCase, { title, description });
}
function ShowAllButton(onPress) {
  let intl;
  let items;
  let obj2;
  onPress = onPress.onPress;
  const tmp = closure_11();
  const obj = { onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: React4(metroRequire, obj2) };
  obj2 = { children: items };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: intl.string(intl4.t["hub6t/"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [metroImportAll(Text, obj3), metroImportAll(native.Spacer, { size: 3 }), ];
  const obj4 = { style: tmp.showAllButtonUnderline };
  items[2] = metroImportAll(metroRequire, obj4);
  return metroImportAll(hasOwnProperty, obj);
}
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { flexDirection: "row" }, image: size, separator: size1, contentContainer: obj3, contentHeader: { textTransform: "uppercase" }, emojiGallery: { flexDirection: "row" }, emojiTruncatedContainer: size2, showAllButton: obj4, showAllButtonUnderline: rect };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
size2 = { width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: 1 };
obj4 = { paddingVertical: 16, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx");

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  let GappedList;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj18;
  let obj24;
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  let tmp2 = closure_11();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(obj.useImage(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useName(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useTierEmojiIds(listingId, guildId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useChannelBenefits(listingId), 1)[0];
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj5.useIntangibleBenefits(listingId), 1)[0];
  const first4 = first2[0];
  const first5 = first3[0];
  size = first1.size;
  const obj7 = { style: tmp2.container, children: items2 };
  const obj8 = { style: tmp2.header, children: items };
  const obj6 = listingId(16192);
  const formattedSubscriptionPlan = obj6.useFormattedSubscriptionPlan(listingId);
  const tmp13 = guildId;
  const tmp14 = guildId(5899);
  if (str == null) {
    str = "";
  }
  items = [, , ];
  const obj9 = { source: { uri: str }, style: tmp2.image };
  items[0] = closure_8(tmp14, obj9);
  items[1] = closure_8(listingId(1177).Spacer, { size: 16 });
  const obj10 = { children: items1 };
  items1 = [closure_8(listingId(4832).Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first }), closure_8(listingId(1177).Spacer, { size: 4 }), closure_8(listingId(4832).Text, { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan })];
  items[2] = closure_9(closure_6, obj10);
  items2 = [closure_9(closure_6, obj8), closure_8(listingId(1177).Spacer, { size: 16 }), closure_8(tmp13(16198), { listingId }), ];
  let tmp10Result6 = length > 0 || size > 0 || length2 > 0;
  if (tmp10Result6) {
    const items3 = [closure_8(listingId(1177).Spacer, { size: 24 }), , ];
    const obj11 = { style: tmp2.contentContainer, children: closure_9(GappedList, obj12) };
    let tmp10Result = null;
    obj12 = {
      renderGap() {
          return closure_1_8(Separator, {});
        },
      children: items6
    };
    GappedList = tmp6(9807).GappedList;
    const tmp16 = closure_10;
    if (size > 0) {
      const obj13 = { children: items4 };
      const obj14 = { title: intl.string(listingId(1115).t.ebOU2b), count: size };
      intl = tmp6(1115).intl;
      items4 = [closure_8(ContentHeader, obj14), closure_8(listingId(1177).Spacer, { size: 8 }), , ];
      const obj15 = { emojiIds: items5, guildId, maxEmojis: 5 };
      items5 = [];
      HermesBuiltin.arraySpread(items5, first1, 0);
      items4[2] = closure_8(EmojiGallery, obj15);
      items4[3] = closure_8(listingId(1177).Spacer, { size: 4 });
      tmp10Result = tmp10(tmp11, obj13);
    }
    items6 = [tmp10Result, , ];
    let tmp10Result4 = null;
    if (null != first4) {
      const obj16 = { children: items7 };
      const obj17 = { title: intl2.formatToPlainString(listingId(1115).t.y7dUrm, obj18), count: first2.length };
      intl2 = tmp6(1115).intl;
      obj18 = { numChannels: first2.length };
      items7 = [closure_8(ContentHeader, obj17), closure_8(listingId(1177).Spacer, { size: 12 }), , ];
      const obj20 = { channelId: null, description: null };
      ({ ref_id: obj19.channelId, description: obj19.description } = first4);
      items7[2] = closure_8(ChannelBenefitShowCase, obj20);
      items7[3] = closure_8(listingId(1177).Spacer, { size: 6 });
      tmp10Result4 = tmp10(tmp11, obj16);
    }
    items6[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (null != first5) {
      const obj21 = { children: items8 };
      const obj22 = { title: intl3.formatToPlainString(listingId(1115).t.MR7oOF, obj24), count: first3.length };
      intl3 = tmp6(1115).intl;
      obj24 = { numBenefits: first3.length };
      items8 = [closure_8(ContentHeader, obj22), closure_8(listingId(1177).Spacer, { size: 12 }), , ];
      const obj25 = { title: null, description: null };
      ({ name: obj23.title, description: obj23.description } = first5);
      items8[2] = closure_8(BenefitShowCase, obj25);
      items8[3] = closure_8(listingId(1177).Spacer, { size: 6 });
      tmp10Result5 = tmp10(tmp11, obj21);
    }
    const obj44 = { children: items3 };
    items6[2] = tmp10Result5;
    items3[1] = closure_8(closure_6, obj11);
    const obj45 = {
      onPress() {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const obj = { listingId, guildId };
          const tmp2 = asyncRequire(16197, dependencyMap.paths);
          openLazy(tmp2, "PurchaseCard:" + listingId, obj);
        }
    };
    items3[2] = closure_8(ShowAllButton, obj45);
    tmp10Result6 = tmp10(tmp16, obj44);
  }
  items2[3] = tmp10Result6;
  return closure_9(closure_6, obj7);
};
