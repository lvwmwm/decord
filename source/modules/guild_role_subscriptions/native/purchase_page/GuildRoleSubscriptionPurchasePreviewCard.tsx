// Module ID: 15272
// Function ID: 116498
// Name: ContentHeader
// Dependencies: [57, 31, 27, 1348, 33, 4130, 689, 4126, 4098, 15273, 1934, 9405, 14129, 1273, 566, 4320, 1212, 4593, 14116, 15268, 5085, 15274, 2]
// Exports: default

// Module 15272 (ContentHeader)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [callback2(require(4126) /* Text */.Text, obj), " ", title];
  obj.children = items;
  return callback3(require(4126) /* Text */.Text, obj);
}
function Separator() {
  return callback2(closure_6, { style: _createForOfIteratorHelperLoose().separator });
}
function EmojiGallery(arg0) {
  let emojiIds;
  let maxEmojis;
  let require;
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  let obj = { style: tmp.emojiGallery };
  obj = { gap: 18 };
  const items = [
    ...substr.map((id) => {
      const obj = { size: 30, fontSize: 20, guildId: closure_0, id };
      return outer1_8(outer1_1(outer1_3[12]), obj, id);
    })
  ];
  let tmp7 = diff > 0;
  if (tmp7) {
    obj = { style: tmp.emojiTruncatedContainer };
    const obj1 = { variant: "text-sm/bold", color: "text-default" };
    const items1 = ["+", diff];
    obj1.children = items1;
    obj.children = callback3(require(4126) /* Text */.Text, obj1);
    tmp7 = callback2(closure_6, obj, "andMore");
  }
  items[tmp6] = tmp7;
  obj.children = items;
  obj.children = callback2(require(9405) /* GappedList */.GappedList, obj);
  return callback2(closure_6, obj);
}
function BenefitShowCase(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  let obj = {};
  let tmp3 = title;
  if ("string" === typeof title) {
    obj = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = callback2(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp3, ];
  let tmp7 = null != description;
  if (tmp7) {
    obj = {};
    const obj1 = { size: 2 };
    const items1 = [callback2(require(1273) /* Button */.Spacer, obj1), ];
    const obj2 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
    items1[1] = callback2(require(4126) /* Text */.Text, obj2);
    obj.children = items1;
    tmp7 = callback3(closure_10, obj);
  }
  items[1] = tmp7;
  obj.children = items;
  return callback3(closure_6, obj);
}
function ChannelBenefitShowCase(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(channelId), items1);
  const intl = channelId(1212).intl;
  let stringResult = intl.string(channelId(1212).t.bz1PZX);
  if (null != stateFromStores) {
    obj = { style: { flexDirection: "row", alignItems: "center" } };
    obj = { size: channelId(1273).Icon.Sizes.REFRESH_SMALL_16, source: channelId(4593).getChannelIcon(stateFromStores) };
    const items2 = [callback2(channelId(1273).Icon, obj), , ];
    const obj1 = { size: 4 };
    items2[1] = callback2(channelId(1273).Spacer, obj1);
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: tmp2 };
    items2[2] = callback2(channelId(4126).Text, obj2);
    obj.children = items2;
    stringResult = callback3(closure_6, obj);
    const obj5 = channelId(4593);
  }
  const obj3 = { title: stringResult, description: channelId.description };
  return callback2(BenefitShowCase, obj3);
}
function ShowAllButton(onPress) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5 };
  obj = {};
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 } };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["hub6t/"]);
  const items = [callback2(require(4126) /* Text */.Text, obj), callback2(require(1273) /* Button */.Spacer, { size: 3 }), callback2(closure_6, { style: tmp.showAllButtonUnderline })];
  obj.children = items;
  obj.children = callback3(closure_6, obj);
  return callback2(closure_5, obj);
}
({ TouchableOpacity: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "row" };
let obj1 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.image = obj1;
let obj2 = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
_createForOfIteratorHelperLoose.separator = obj2;
_createForOfIteratorHelperLoose.contentContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16 };
_createForOfIteratorHelperLoose.contentHeader = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose.emojiGallery = { flexDirection: "row" };
let obj4 = { width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingTop: 1 };
_createForOfIteratorHelperLoose.emojiTruncatedContainer = obj4;
let obj5 = { paddingVertical: 16, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.showAllButton = obj5;
let obj6 = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.showAllButtonUnderline = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx");

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importAll(14116);
  const first = callback(obj.useImage(listingId), 1)[0];
  let obj1 = importAll(14116);
  let obj2 = importAll(14116);
  const first1 = callback(obj2.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj3 = importAll(14116);
  const first2 = callback(obj3.useChannelBenefits(listingId), 1)[0];
  let obj4 = importAll(14116);
  const first3 = callback(obj4.useIntangibleBenefits(listingId), 1)[0];
  let obj5 = listingId(15268);
  const first4 = first2[0];
  const first5 = first3[0];
  const size = first1.size;
  obj = { style: tmp.container };
  obj = { style: tmp.header };
  const formattedSubscriptionPlan = obj5.useFormattedSubscriptionPlan(listingId);
  obj1 = {};
  obj2 = {};
  let str = "";
  if (null != first) {
    str = first;
  }
  obj2.uri = str;
  obj1.source = obj2;
  obj1.style = tmp.image;
  const items = [callback2(guildId(5085), obj1), callback2(listingId(1273).Spacer, { size: 16 }), ];
  obj3 = {};
  obj4 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: callback(obj1.useName(listingId), 1)[0] };
  const items1 = [callback2(listingId(4126).Text, obj4), callback2(listingId(1273).Spacer, { size: 4 }), ];
  obj5 = { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan };
  items1[2] = callback2(listingId(4126).Text, obj5);
  obj3.children = items1;
  items[2] = callback3(closure_6, obj3);
  obj.children = items;
  const items2 = [callback3(closure_6, obj), callback2(listingId(1273).Spacer, { size: 16 }), callback2(guildId(15274), { listingId }), ];
  let tmp14Result = length > 0 || size > 0 || length2 > 0;
  if (tmp14Result) {
    const obj6 = {};
    const obj7 = { size: 24 };
    const items3 = [callback2(listingId(1273).Spacer, obj7), , ];
    const obj8 = { style: tmp.contentContainer };
    const obj9 = {
      renderGap() {
          return outer1_8(outer1_13, {});
        }
    };
    let tmp22 = null;
    if (size > 0) {
      const obj10 = {};
      const obj11 = {};
      const intl = listingId(1212).intl;
      obj11.title = intl.string(listingId(1212).t.ebOU2b);
      obj11.count = size;
      const items4 = [callback2(ContentHeader, obj11), , , ];
      const obj12 = { size: 8 };
      items4[1] = callback2(listingId(1273).Spacer, obj12);
      const obj13 = {};
      const items5 = [];
      HermesBuiltin.arraySpread(first1, 0);
      obj13.emojiIds = items5;
      obj13.guildId = guildId;
      obj13.maxEmojis = 5;
      items4[2] = callback2(EmojiGallery, obj13);
      const obj14 = { size: 4 };
      items4[3] = callback2(listingId(1273).Spacer, obj14);
      obj10.children = items4;
      tmp22 = callback3(closure_6, obj10);
    }
    const items6 = [tmp22, , ];
    let tmp36 = null;
    if (null != first4) {
      const obj15 = {};
      const obj16 = {};
      const intl2 = listingId(1212).intl;
      const obj17 = { numChannels: length };
      obj16.title = intl2.formatToPlainString(listingId(1212).t.y7dUrm, obj17);
      obj16.count = length;
      const items7 = [callback2(ContentHeader, obj16), , , ];
      const obj18 = { size: 12 };
      items7[1] = callback2(listingId(1273).Spacer, obj18);
      ({ ref_id: obj27.channelId, description: obj27.description } = first4);
      items7[2] = callback2(ChannelBenefitShowCase, {});
      const obj20 = { size: 6 };
      items7[3] = callback2(listingId(1273).Spacer, obj20);
      obj15.children = items7;
      tmp36 = callback3(closure_6, obj15);
      const obj19 = {};
    }
    items6[1] = tmp36;
    let tmp47 = null;
    if (null != first5) {
      const obj21 = {};
      const obj22 = {};
      const intl3 = listingId(1212).intl;
      const obj23 = { numBenefits: length2 };
      obj22.title = intl3.formatToPlainString(listingId(1212).t.MR7oOF, obj23);
      obj22.count = length2;
      const items8 = [callback2(ContentHeader, obj22), , , ];
      const obj24 = { size: 12 };
      items8[1] = callback2(listingId(1273).Spacer, obj24);
      ({ name: obj33.title, description: obj33.description } = first5);
      items8[2] = callback2(BenefitShowCase, {});
      const obj26 = { size: 6 };
      items8[3] = callback2(listingId(1273).Spacer, obj26);
      obj21.children = items8;
      tmp47 = callback3(closure_6, obj21);
      const obj25 = {};
    }
    items6[2] = tmp47;
    obj9.children = items6;
    obj8.children = callback3(listingId(9405).GappedList, obj9);
    items3[1] = callback2(closure_6, obj8);
    const obj27 = {
      onPress() {
          let obj = guildId(outer1_3[8]);
          obj = { listingId, guildId };
          obj.openLazy(listingId(outer1_3[10])(outer1_3[9], outer1_3.paths), "PurchaseCard:" + listingId, obj);
        }
    };
    items3[2] = callback2(ShowAllButton, obj27);
    obj6.children = items3;
    tmp14Result = callback3(closure_10, obj6);
    const tmp14 = callback3;
    const tmp15 = closure_10;
    const tmp19 = callback2;
    const tmp20 = closure_6;
    const tmp21 = callback3;
  }
  items2[3] = tmp14Result;
  obj.children = items2;
  return callback3(closure_6, obj);
};
