// Module ID: 15149
// Function ID: 114286
// Name: ContentHeader
// Dependencies: []
// Exports: default

// Module 15149 (ContentHeader)
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.contentHeader };
  obj = { hasMaxConnections: true, isBoostOnlySubscription: true, style: tmp.contentHeader, children: count };
  const items = [callback2(arg1(dependencyMap[7]).Text, obj), " ", title];
  obj.children = items;
  return callback3(arg1(dependencyMap[7]).Text, obj);
}
function Separator() {
  return callback2(closure_6, { style: callback4().separator });
}
function EmojiGallery(arg0) {
  let emojiIds;
  let maxEmojis;
  ({ emojiIds, maxEmojis, guildId: closure_0 } = arg0);
  const tmp = callback4();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  let obj = { style: tmp.emojiGallery };
  obj = { gap: 18 };
  const items = [...substr.map((id) => callback2(callback(closure_3[12]), { guildId: closure_0, id }, id))];
  let tmp7 = diff > 0;
  if (tmp7) {
    obj = { style: tmp.emojiTruncatedContainer };
    const obj1 = { hasMaxConnections: null, isBoostOnlySubscription: null };
    const items1 = [null, diff];
    obj1.children = items1;
    obj.children = callback3(arg1(dependencyMap[7]).Text, obj1);
    tmp7 = callback2(closure_6, obj, "andMore");
  }
  items[tmp6] = tmp7;
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[11]).GappedList, obj);
  return callback2(closure_6, obj);
}
function BenefitShowCase(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  let obj = {};
  let tmp3 = title;
  if ("string" === typeof title) {
    obj = { hasMaxConnections: false, isBoostOnlySubscription: false, children: title };
    tmp3 = callback2(arg1(dependencyMap[7]).Text, obj);
  }
  const items = [tmp3, ];
  let tmp7 = null != description;
  if (tmp7) {
    obj = {};
    const obj1 = { size: 2 };
    const items1 = [callback2(arg1(dependencyMap[13]).Spacer, obj1), ];
    const obj2 = { children: description };
    items1[1] = callback2(arg1(dependencyMap[7]).Text, obj2);
    obj.children = items1;
    tmp7 = callback3(closure_10, obj);
  }
  items[1] = tmp7;
  obj.children = items;
  return callback3(closure_6, obj);
}
function ChannelBenefitShowCase(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const intl = arg1(dependencyMap[16]).intl;
  let stringResult = intl.string(arg1(dependencyMap[16]).t.bz1PZX);
  if (null != stateFromStores) {
    obj = { style: { "Null": 7, "Null": 370 } };
    obj = { size: arg1(dependencyMap[13]).Icon.Sizes.REFRESH_SMALL_16, source: arg1(dependencyMap[17]).getChannelIcon(stateFromStores) };
    const items2 = [callback2(arg1(dependencyMap[13]).Icon, obj), , ];
    const obj1 = { size: 4 };
    items2[1] = callback2(arg1(dependencyMap[13]).Spacer, obj1);
    const obj2 = { hasMaxConnections: false, isBoostOnlySubscription: false, children: tmp2 };
    items2[2] = callback2(arg1(dependencyMap[7]).Text, obj2);
    obj.children = items2;
    stringResult = callback3(closure_6, obj);
    const obj5 = arg1(dependencyMap[17]);
  }
  const obj3 = { title: stringResult, description: channelId.description };
  return callback2(BenefitShowCase, obj3);
}
function ShowAllButton(onPress) {
  const tmp = callback4();
  let obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5 };
  obj = {};
  obj = { style: { marginTop: -1 } };
  const intl = arg1(dependencyMap[16]).intl;
  obj.children = intl.string(arg1(dependencyMap[16]).t.hub6t/);
  const items = [callback2(arg1(dependencyMap[7]).Text, obj), callback2(arg1(dependencyMap[13]).Spacer, { size: 3 }), callback2(closure_6, { style: tmp.showAllButtonUnderline })];
  obj.children = items;
  obj.children = callback3(closure_6, obj);
  return callback2(closure_5, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ TouchableOpacity: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: 16, borderRadius: importDefault(dependencyMap[6]).radii.md, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
obj.container = obj;
obj.header = { flexDirection: "row" };
const obj1 = { "Null": "row", "Null": "center", borderRadius: importDefault(dependencyMap[6]).radii.xl };
obj.image = obj1;
const obj2 = { bounces: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004204895948425893, originWhitelist: 0.00000000000000000000000000000000000000000000000000000000000004667261426580222, allowsInlineMediaPlayback: -1623348473290814200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: null, backgroundColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.separator = obj2;
const tmp4 = arg1(dependencyMap[4]);
obj.contentContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[6]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.sm, padding: 16 };
obj.contentHeader = { textTransform: "uppercase" };
obj.emojiGallery = { flexDirection: "row" };
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[6]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.sm, padding: 16 };
obj.emojiTruncatedContainer = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
const obj4 = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.showAllButton = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm };
const obj6 = { paddingBottom: null, borderTopWidth: null, borderColor: null, marginTop: null, display: null, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.showAllButtonUnderline = obj6;
let closure_11 = obj.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx");

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  listingId = listingId.listingId;
  const arg1 = listingId;
  const guildId = listingId.guildId;
  const importDefault = guildId;
  const tmp = callback4();
  let obj = importAll(dependencyMap[18]);
  const first = callback(obj.useImage(listingId), 1)[0];
  let obj1 = importAll(dependencyMap[18]);
  let obj2 = importAll(dependencyMap[18]);
  const first1 = callback(obj2.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj3 = importAll(dependencyMap[18]);
  const first2 = callback(obj3.useChannelBenefits(listingId), 1)[0];
  let obj4 = importAll(dependencyMap[18]);
  const first3 = callback(obj4.useIntangibleBenefits(listingId), 1)[0];
  let obj5 = arg1(dependencyMap[19]);
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
  const items = [callback2(importDefault(dependencyMap[20]), obj1), callback2(arg1(dependencyMap[13]).Spacer, { size: 16 }), ];
  obj3 = {};
  obj4 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000, children: callback(obj1.useName(listingId), 1)[0] };
  const items1 = [callback2(arg1(dependencyMap[7]).Text, obj4), callback2(arg1(dependencyMap[13]).Spacer, { size: 4 }), ];
  obj5 = { hasMaxConnections: true, isBoostOnlySubscription: "/assets/images/native/icons/voice_calls/dark_theme", children: formattedSubscriptionPlan };
  items1[2] = callback2(arg1(dependencyMap[7]).Text, obj5);
  obj3.children = items1;
  items[2] = callback3(closure_6, obj3);
  obj.children = items;
  const items2 = [callback3(closure_6, obj), callback2(arg1(dependencyMap[13]).Spacer, { size: 16 }), callback2(importDefault(dependencyMap[21]), { listingId }), ];
  let tmp14Result = length > 0 || size > 0 || length2 > 0;
  if (tmp14Result) {
    const obj6 = {};
    const obj7 = { size: 24 };
    const items3 = [callback2(arg1(dependencyMap[13]).Spacer, obj7), , ];
    const obj8 = { style: tmp.contentContainer };
    const obj9 = {
      renderGap() {
          return callback(closure_13, {});
        }
    };
    let tmp22 = null;
    if (size > 0) {
      const obj10 = {};
      const obj11 = {};
      const intl = arg1(dependencyMap[16]).intl;
      obj11.title = intl.string(arg1(dependencyMap[16]).t.ebOU2b);
      obj11.count = size;
      const items4 = [callback2(ContentHeader, obj11), , , ];
      const obj12 = { size: 8 };
      items4[1] = callback2(arg1(dependencyMap[13]).Spacer, obj12);
      const obj13 = {};
      const items5 = [];
      HermesBuiltin.arraySpread(first1, 0);
      obj13.emojiIds = items5;
      obj13.guildId = guildId;
      obj13.maxEmojis = 5;
      items4[2] = callback2(EmojiGallery, obj13);
      const obj14 = { size: 4 };
      items4[3] = callback2(arg1(dependencyMap[13]).Spacer, obj14);
      obj10.children = items4;
      tmp22 = callback3(closure_6, obj10);
    }
    const items6 = [tmp22, , ];
    let tmp36 = null;
    if (null != first4) {
      const obj15 = {};
      const obj16 = {};
      const intl2 = arg1(dependencyMap[16]).intl;
      const obj17 = { numChannels: length };
      obj16.title = intl2.formatToPlainString(arg1(dependencyMap[16]).t.y7dUrm, obj17);
      obj16.count = length;
      const items7 = [callback2(ContentHeader, obj16), , , ];
      const obj18 = { size: 12 };
      items7[1] = callback2(arg1(dependencyMap[13]).Spacer, obj18);
      ({ ref_id: obj27.channelId, description: obj27.description } = first4);
      items7[2] = callback2(ChannelBenefitShowCase, {});
      const obj20 = { size: 6 };
      items7[3] = callback2(arg1(dependencyMap[13]).Spacer, obj20);
      obj15.children = items7;
      tmp36 = callback3(closure_6, obj15);
      const obj19 = {};
    }
    items6[1] = tmp36;
    let tmp47 = null;
    if (null != first5) {
      const obj21 = {};
      const obj22 = {};
      const intl3 = arg1(dependencyMap[16]).intl;
      const obj23 = { numBenefits: length2 };
      obj22.title = intl3.formatToPlainString(arg1(dependencyMap[16]).t.MR7oOF, obj23);
      obj22.count = length2;
      const items8 = [callback2(ContentHeader, obj22), , , ];
      const obj24 = { size: 12 };
      items8[1] = callback2(arg1(dependencyMap[13]).Spacer, obj24);
      ({ name: obj33.title, description: obj33.description } = first5);
      items8[2] = callback2(BenefitShowCase, {});
      const obj26 = { size: 6 };
      items8[3] = callback2(arg1(dependencyMap[13]).Spacer, obj26);
      obj21.children = items8;
      tmp47 = callback3(closure_6, obj21);
      const obj25 = {};
    }
    items6[2] = tmp47;
    obj9.children = items6;
    obj8.children = callback3(arg1(dependencyMap[11]).GappedList, obj9);
    items3[1] = callback2(closure_6, obj8);
    const obj27 = {
      onPress() {
          let obj = guildId(paths[8]);
          obj = { listingId, guildId };
          obj.openLazy(listingId(paths[10])(paths[9], paths.paths), "PurchaseCard:" + listingId, obj);
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
