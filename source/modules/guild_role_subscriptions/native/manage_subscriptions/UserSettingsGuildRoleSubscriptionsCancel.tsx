// Module ID: 14115
// Function ID: 108556
// Name: WhatYouLose
// Dependencies: [5, 57, 31, 27, 3782, 33, 4130, 689, 14116, 3712, 1212, 5515, 1273, 4126, 14106, 5085, 14124, 5464, 5484, 8002, 4471, 4451, 3830, 3798, 4543, 14112, 14101, 14125, 14126, 566, 2]
// Exports: default

// Module 14115 (WhatYouLose)
import closure_4 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "FastAssetImage";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
const require = arg1;
function WhatYouLose(subscription) {
  let guild;
  let listingId;
  ({ listingId, guild } = subscription);
  const tmp = callback4();
  let obj = importAll(14116);
  let obj1 = importAll(14116);
  let obj2 = importAll(14116);
  let obj3 = importAll(14116);
  let obj4 = importDefault(3712)(subscription.subscription.currentPeriodEnd);
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatResult = obj4.format(c12);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { numEmojis: callback(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: callback(obj1.useChannelBenefits(listingId), 1)[0].length, numIntangibles: callback(obj2.useIntangibleBenefits(listingId), 1)[0].length };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  const formatResult1 = intl.format(require(1212) /* getSystemLocale */.t.EtAXzC, { subscriptionEndDate: obj4.format(c12) });
  const items = [callback2(importDefault(5515), { guild }), callback2(require(1273) /* Button */.Spacer, { size: 16 }), ];
  obj2 = {};
  obj3 = { variant: "text-md/semibold", color: "interactive-text-active" };
  obj3.children = callback(obj3.useName(listingId), 1)[0];
  const items1 = [callback2(require(4126) /* Text */.Text, obj3), callback2(require(1273) /* Button */.Spacer, { size: 2 }), ];
  obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = callback2(require(4126) /* Text */.Text, obj4);
  obj2.children = items1;
  items[2] = callback3(closure_7, obj2);
  obj1.children = items;
  const items2 = [callback3(closure_7, obj1), callback2(importDefault(14106), { style: { marginVertical: 16 } }), , , , , ];
  const obj5 = { variant: "text-md/semibold", color: "interactive-text-active" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl3.string(require(1212) /* getSystemLocale */.t["9SgXmT"]);
  items2[2] = callback2(require(4126) /* Text */.Text, obj5);
  items2[3] = callback2(require(1273) /* Button */.Spacer, { size: 12 });
  const obj6 = { variant: "text-sm/normal", color: "text-default" };
  const items3 = [formatResult1, "\n"];
  obj6.children = items3;
  items2[4] = callback3(require(4126) /* Text */.Text, obj6);
  const obj7 = { variant: "text-sm/medium", color: "text-default", children: intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.OVlNGT, obj) };
  items2[5] = callback2(require(4126) /* Text */.Text, obj7);
  const obj8 = {};
  const formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.OVlNGT, obj);
  obj8.source = importDefault(14124);
  obj8.style = tmp.cactus;
  items2[6] = callback2(importDefault(5085), obj8);
  obj.children = items2;
  return callback3(closure_7, obj);
}
function CancelSubscriptionButtonFooter(guild) {
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  const tmp3 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  let first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp2 = _createForOfIteratorHelperLoose();
  const analyticsLocations = subscription(5464)(subscription(5484).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(8002);
  cancelSubscription = obj.useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  obj = { style: tmp2.footer };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(tmp), items);
  obj = { variant: "destructive" };
  if (!first) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !cancelSubscription.nativePaymentsConnected;
    }
    first = isPurchasedViaAppleGeneric;
  }
  obj.loading = first;
  const intl = guild(1212).intl;
  obj.text = intl.string(guild(1212).t.cM1H0K);
  obj.onPress = callback;
  obj.children = closure_10(guild(4543).Button, obj);
  return closure_10(closure_7, obj);
}
function Content(subscription) {
  let guild;
  let listing;
  subscription = subscription.subscription;
  const tmp = _createForOfIteratorHelperLoose();
  ({ listing, guild } = importDefault(14112)(subscription));
  let obj = require(14101) /* _createForOfIteratorHelperLoose */;
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
      const items = [callback2(importDefault(14125), obj1), ];
      const obj2 = { style: tmp.body };
      const obj3 = { guild, listingId: listing.id, subscription };
      const items1 = [callback2(WhatYouLose, obj3), , , , ];
      const obj4 = { size: 24 };
      items1[1] = callback2(require(1273) /* Button */.Spacer, obj4);
      const obj5 = { variant: "text-sm/bold", color: "text-default" };
      const obj6 = { textTransform: "uppercase" };
      obj5.style = obj6;
      const intl = require(1212) /* getSystemLocale */.intl;
      obj5.children = intl.string(require(1212) /* getSystemLocale */.t.xyvN8p);
      items1[2] = callback2(require(4126) /* Text */.Text, obj5);
      const obj7 = { size: 16 };
      items1[3] = callback2(require(1273) /* Button */.Spacer, obj7);
      const obj8 = { listingId: listing.id, guildId: guild.id };
      items1[4] = callback2(importAll(14126).Content, obj8);
      obj2.children = items1;
      items[1] = callback3(closure_7, obj2);
      obj.children = items;
      const items2 = [callback3(closure_8, obj), ];
      const obj9 = { guild, subscription, onClose: subscription.onClose };
      items2[1] = callback2(CancelSubscriptionButtonFooter, obj9);
      obj.children = items2;
      tmp7 = callback3(closure_7, obj);
    }
  }
  return tmp7;
}
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let c12 = "M/DD/YY";
_createForOfIteratorHelperLoose = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { width: "100%", height: undefined, aspectRatio: 2.5684931506849313 };
let obj1 = { borderTopColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
_createForOfIteratorHelperLoose.footer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { container: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: 12, paddingHorizontal: 16 }, header: { flex: 1, flexDirection: "row" }, cactus: { width: 99, position: "absolute", right: 16, bottom: 12 } };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj2);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: 12, paddingHorizontal: 16 };
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  let obj = subscriptionId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { subscription: stateFromStores, onClose: subscriptionId.onClose };
    tmp2 = callback2(Content, obj);
  }
  return tmp2;
};
