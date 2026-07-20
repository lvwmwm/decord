// Module ID: 13984
// Function ID: 106305
// Name: WhatYouLose
// Dependencies: []
// Exports: default

// Module 13984 (WhatYouLose)
function WhatYouLose(subscription) {
  let guild;
  let listingId;
  ({ listingId, guild } = subscription);
  const tmp = callback6();
  let obj = importAll(dependencyMap[8]);
  let obj1 = importAll(dependencyMap[8]);
  let obj2 = importAll(dependencyMap[8]);
  let obj3 = importAll(dependencyMap[8]);
  let obj4 = importDefault(dependencyMap[9])(subscription.subscription.currentPeriodEnd);
  const intl = arg1(dependencyMap[10]).intl;
  const formatResult = obj4.format(closure_12);
  const intl2 = arg1(dependencyMap[10]).intl;
  obj = { numEmojis: callback2(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: callback2(obj1.useChannelBenefits(listingId), 1)[0].length, numIntangibles: callback2(obj2.useIntangibleBenefits(listingId), 1)[0].length };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  const formatResult1 = intl.format(arg1(dependencyMap[10]).t.EtAXzC, { subscriptionEndDate: obj4.format(closure_12) });
  const items = [callback3(importDefault(dependencyMap[11]), { guild }), callback3(arg1(dependencyMap[12]).Spacer, { size: 16 }), ];
  obj2 = {};
  const items1 = [callback3(arg1(dependencyMap[13]).Text, { children: callback2(obj3.useName(listingId), 1)[0] }), callback3(arg1(dependencyMap[12]).Spacer, { size: 2 }), ];
  obj3 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: guild.name };
  items1[2] = callback3(arg1(dependencyMap[13]).Text, obj3);
  obj2.children = items1;
  items[2] = callback4(closure_7, obj2);
  obj1.children = items;
  const items2 = [callback4(closure_7, obj1), callback3(importDefault(dependencyMap[14]), { style: { marginVertical: 16 } }), , , , , ];
  obj4 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[10]).t.9SgXmT);
  items2[2] = callback3(arg1(dependencyMap[13]).Text, obj4);
  items2[3] = callback3(arg1(dependencyMap[12]).Spacer, { size: 12 });
  const obj5 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
  const items3 = [formatResult1, "\n"];
  obj5.children = items3;
  items2[4] = callback4(arg1(dependencyMap[13]).Text, obj5);
  items2[5] = callback3(arg1(dependencyMap[13]).Text, { children: intl2.formatToPlainString(arg1(dependencyMap[10]).t.OVlNGT, obj) });
  const obj6 = {};
  const formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[10]).t.OVlNGT, obj);
  obj6.source = importDefault(dependencyMap[16]);
  obj6.style = tmp.cactus;
  items2[6] = callback3(importDefault(dependencyMap[15]), obj6);
  obj.children = items2;
  return callback4(closure_7, obj);
}
function CancelSubscriptionButtonFooter(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const subscription = guild.subscription;
  const importDefault = subscription;
  const onClose = guild.onClose;
  const importAll = onClose;
  const tmp3 = callback2(React.useState(false), 2);
  let first = tmp3[0];
  let closure_3 = tmp3[1];
  const tmp2 = callback5();
  const analyticsLocations = importDefault(closure_3[17])(importDefault(closure_3[18]).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let callback = analyticsLocations;
  let obj = importDefault(closure_3[19]);
  let cancelSubscription = obj.useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription.cancelSubscription;
  const callback2 = cancelSubscription;
  let isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  const React = isPurchasedViaAppleGeneric;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  obj = { style: tmp2.footer };
  callback = React.useCallback(callback(tmp), items);
  obj = { variant: "destructive" };
  if (!first) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !cancelSubscription.nativePaymentsConnected;
    }
    first = isPurchasedViaAppleGeneric;
  }
  obj.loading = first;
  const intl = arg1(closure_3[10]).intl;
  obj.text = intl.string(arg1(closure_3[10]).t.cM1H0K);
  obj.onPress = callback;
  obj.children = closure_10(arg1(closure_3[24]).Button, obj);
  return closure_10(closure_7, obj);
}
function Content(subscription) {
  let guild;
  let listing;
  subscription = subscription.subscription;
  const tmp = callback5();
  ({ listing, guild } = importDefault(dependencyMap[25])(subscription));
  let obj = arg1(dependencyMap[26]);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const subscriptionsSettings = obj.useSubscriptionsSettings(id);
  let cover_image_asset;
  if (null != subscriptionsSettings) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  if (null != cover_image_asset) {
    const tmp6 = cover_image_asset;
  }
  let tmp7 = null;
  if (null != listing) {
    tmp7 = null;
    if (null != guild) {
      obj = { style: tmp.container };
      obj = {};
      const obj1 = { style: tmp.heroImage, asset: tmp6 };
      const items = [callback3(importDefault(dependencyMap[27]), obj1), ];
      const obj2 = { style: tmp.body };
      const obj3 = { guild, listingId: listing.id, subscription };
      const items1 = [callback3(WhatYouLose, obj3), , , , ];
      const obj4 = { size: 24 };
      items1[1] = callback3(arg1(dependencyMap[12]).Spacer, obj4);
      const obj5 = {};
      const obj6 = { textTransform: "uppercase" };
      obj5.style = obj6;
      const intl = arg1(dependencyMap[10]).intl;
      obj5.children = intl.string(arg1(dependencyMap[10]).t.xyvN8p);
      items1[2] = callback3(arg1(dependencyMap[13]).Text, obj5);
      const obj7 = { size: 16 };
      items1[3] = callback3(arg1(dependencyMap[12]).Spacer, obj7);
      const obj8 = { listingId: listing.id, guildId: guild.id };
      items1[4] = callback3(importAll(dependencyMap[28]).Content, obj8);
      obj2.children = items1;
      items[1] = callback4(closure_7, obj2);
      obj.children = items;
      const items2 = [callback4(closure_8, obj), ];
      const obj9 = { guild, subscription, onClose: subscription.onClose };
      items2[1] = callback3(CancelSubscriptionButtonFooter, obj9);
      obj.children = items2;
      tmp7 = callback4(closure_7, obj);
    }
  }
  return tmp7;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = "M/DD/YY";
let obj = arg1(dependencyMap[6]);
obj = { container: { flex: 1 }, body: {}, heroImage: obj };
obj = { backgroundColor: "hidden", width: 8, "Bool(false)": 100, height: undefined };
const obj1 = { -1438951836: "isArray", -1464970518: "constructor", -45007765: "warn", borderTopColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.footer = obj1;
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const obj2 = {};
const obj5 = arg1(dependencyMap[6]);
obj2.container = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md, paddingVertical: 12, paddingHorizontal: 16 };
obj2.header = { "Bool(false)": "<string:1783693314>", "Bool(false)": "<string:618889>" };
obj2.cactus = { "Null": "ReferenceError", "Null": "FAMILY_CENTER_LINK_CODE", "Null": "_key", 1368053539: "FAMILY_CENTER_LINK_CODE" };
let closure_14 = obj5.createStyles(obj2);
const obj3 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md, paddingVertical: 12, paddingHorizontal: 16 };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  const arg1 = subscriptionId.subscriptionId;
  let obj = arg1(dependencyMap[29]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionById.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { subscription: stateFromStores, onClose: subscriptionId.onClose };
    tmp2 = callback3(Content, obj);
  }
  return tmp2;
};
