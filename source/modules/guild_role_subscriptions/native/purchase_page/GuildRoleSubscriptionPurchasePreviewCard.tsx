// Module ID: 15146
// Function ID: 114252
// Name: ContentHeader
// Dependencies: []
// Exports: default

// Module 15146 (ContentHeader)
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.contentHeader };
  obj = { style: tmp.contentHeader, children: count };
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
  const items = [
    ...substr.map((id) => {
      const obj = { borderBottomColor: "trackAverageRenderTimeForOffsetProjection", borderBottomWidth: "isArrayBuffer", guildId: closure_0, id };
      return callback2(callback(closure_3[12]), obj, id);
    })
  ];
  let tmp7 = diff > 0;
  if (tmp7) {
    obj = { style: tmp.emojiTruncatedContainer };
    const obj1 = {};
    const items1 = ["fill", diff];
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
    obj = { children: title };
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
    obj = { style: {} };
    obj = { size: arg1(dependencyMap[13]).Icon.Sizes.REFRESH_SMALL_16, source: arg1(dependencyMap[17]).getChannelIcon(stateFromStores) };
    const items2 = [callback2(arg1(dependencyMap[13]).Icon, obj), , ];
    const obj1 = { size: 4 };
    items2[1] = callback2(arg1(dependencyMap[13]).Spacer, obj1);
    const obj2 = { children: tmp2 };
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
const obj1 = { bhk: null, bic: null, borderRadius: importDefault(dependencyMap[6]).radii.xl };
obj.image = obj1;
const obj2 = { 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004074371678144605, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000004667261426580222, 9223372036854775807: -1645684642245205400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -9223372036854775808: null, backgroundColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.separator = obj2;
const tmp4 = arg1(dependencyMap[4]);
obj.contentContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[6]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.sm, padding: 16 };
obj.contentHeader = { textTransform: "uppercase" };
obj.emojiGallery = { flexDirection: "row" };
const obj4 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.emojiTruncatedContainer = obj4;
const obj5 = { gap: 16, flex: true, paddingRight: "/assets/images/native/icons", flexDirection: 24, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm };
obj.showAllButton = obj5;
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[6]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.sm, padding: 16 };
obj.showAllButtonUnderline = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
let closure_11 = obj.createStyles(obj);
const obj6 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
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
  const items1 = [callback2(arg1(dependencyMap[7]).Text, { children: callback(obj1.useName(listingId), 1)[0] }), callback2(arg1(dependencyMap[13]).Spacer, { size: 4 }), callback2(arg1(dependencyMap[7]).Text, { children: formattedSubscriptionPlan })];
  obj3.children = items1;
  items[2] = callback3(closure_6, obj3);
  obj.children = items;
  const items2 = [callback3(closure_6, obj), callback2(arg1(dependencyMap[13]).Spacer, { size: 16 }), callback2(importDefault(dependencyMap[21]), { listingId }), ];
  let tmp14Result = length > 0 || size > 0 || length2 > 0;
  if (tmp14Result) {
    obj4 = {};
    obj5 = { size: 24 };
    const items3 = [callback2(arg1(dependencyMap[13]).Spacer, obj5), , ];
    const obj6 = { style: tmp.contentContainer };
    const obj7 = {
      renderGap() {
          return callback(closure_13, {});
        }
    };
    let tmp22 = null;
    if (size > 0) {
      const obj8 = {};
      const obj9 = {};
      const intl = arg1(dependencyMap[16]).intl;
      obj9.title = intl.string(arg1(dependencyMap[16]).t.ebOU2b);
      obj9.count = size;
      const items4 = [callback2(ContentHeader, obj9), , , ];
      const obj10 = { size: 8 };
      items4[1] = callback2(arg1(dependencyMap[13]).Spacer, obj10);
      const obj11 = {};
      const items5 = [];
      HermesBuiltin.arraySpread(first1, 0);
      obj11.emojiIds = items5;
      obj11.guildId = guildId;
      obj11.maxEmojis = 5;
      items4[2] = callback2(EmojiGallery, obj11);
      const obj12 = { size: 4 };
      items4[3] = callback2(arg1(dependencyMap[13]).Spacer, obj12);
      obj8.children = items4;
      tmp22 = callback3(closure_6, obj8);
    }
    const items6 = [tmp22, , ];
    let tmp36 = null;
    if (null != first4) {
      const obj13 = {};
      const obj14 = {};
      const intl2 = arg1(dependencyMap[16]).intl;
      const obj15 = { numChannels: length };
      obj14.title = intl2.formatToPlainString(arg1(dependencyMap[16]).t.y7dUrm, obj15);
      obj14.count = length;
      const items7 = [callback2(ContentHeader, obj14), , , ];
      const obj16 = { size: 12 };
      items7[1] = callback2(arg1(dependencyMap[13]).Spacer, obj16);
      ({ ref_id: obj25.channelId, description: obj25.description } = first4);
      items7[2] = callback2(ChannelBenefitShowCase, {});
      const obj18 = { size: 6 };
      items7[3] = callback2(arg1(dependencyMap[13]).Spacer, obj18);
      obj13.children = items7;
      tmp36 = callback3(closure_6, obj13);
      const obj17 = {};
    }
    items6[1] = tmp36;
    let tmp47 = null;
    if (null != first5) {
      const obj19 = {};
      const obj20 = {};
      const intl3 = arg1(dependencyMap[16]).intl;
      const obj21 = { numBenefits: length2 };
      obj20.title = intl3.formatToPlainString(arg1(dependencyMap[16]).t.MR7oOF, obj21);
      obj20.count = length2;
      const items8 = [callback2(ContentHeader, obj20), , , ];
      const obj22 = { size: 12 };
      items8[1] = callback2(arg1(dependencyMap[13]).Spacer, obj22);
      ({ name: obj31.title, description: obj31.description } = first5);
      items8[2] = callback2(BenefitShowCase, {});
      const obj24 = { size: 6 };
      items8[3] = callback2(arg1(dependencyMap[13]).Spacer, obj24);
      obj19.children = items8;
      tmp47 = callback3(closure_6, obj19);
      const obj23 = {};
    }
    items6[2] = tmp47;
    obj7.children = items6;
    obj6.children = callback3(arg1(dependencyMap[11]).GappedList, obj7);
    items3[1] = callback2(closure_6, obj6);
    const obj25 = {
      onPress() {
          let obj = guildId(paths[8]);
          obj = { listingId, guildId };
          obj.openLazy(listingId(paths[10])(paths[9], paths.paths), "PurchaseCard:" + listingId, obj);
        }
    };
    items3[2] = callback2(ShowAllButton, obj25);
    obj4.children = items3;
    tmp14Result = callback3(closure_10, obj4);
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
