// Module ID: 15309
// Function ID: 116778
// Name: Separator
// Dependencies: [31, 27, 1278, 1348, 1838, 653, 33, 4130, 689, 4126, 1212, 1273, 10710, 14149, 14151, 14152, 624, 15310, 4320, 15312, 15313, 15314, 4593, 5085, 5513, 15315, 9441, 15317, 15318, 3827, 15319, 2]
// Exports: default

// Module 15309 (Separator)
import "set";
import get_ActivityIndicator from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function Separator() {
  return callback(closure_6, { style: _createForOfIteratorHelperLoose().separator });
}
function LegalDisclaimer() {
  let obj = { variant: "text-xs/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.FSPTDI, obj);
  return callback(require(4126) /* Text */.Text, obj);
}
function SocialBadge(onPress) {
  let iconSource;
  let text;
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null != onPress;
  let obj = { style: tmp.socialBadge };
  let num = 1;
  if (tmp2) {
    num = 0.5;
  }
  obj.activeOpacity = num;
  obj.onPress = onPress;
  obj = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
  const items = [callback(require(1273) /* Button */.Icon, obj), , ];
  obj = { variant: "text-sm/medium", color: "text-default", children: text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  if (tmp2) {
    const obj1 = { source: importDefault(10710), style: tmp.socialBadgeArrow };
    tmp2 = callback(require(1273) /* Button */.Icon, obj1);
  }
  items[2] = tmp2;
  obj.children = items;
  return closure_15(closure_5, obj);
}
({ ActivityIndicator: closure_4, TouchableOpacity: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.heroImage = { aspectRatio: 4, width: "100%" };
let obj1 = { borderWidth: 3, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute" };
_createForOfIteratorHelperLoose.guildIconContainer = obj1;
_createForOfIteratorHelperLoose.guildIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj3 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.md, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.md, marginTop: -15 };
_createForOfIteratorHelperLoose.contentCard = obj3;
_createForOfIteratorHelperLoose.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
_createForOfIteratorHelperLoose.socialContainer = { flexDirection: "row" };
let obj4 = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
_createForOfIteratorHelperLoose.socialBadge = obj4;
_createForOfIteratorHelperLoose.socialBadgeIcon = { height: 24, marginRight: 6 };
let obj5 = { height: 24, marginLeft: 6, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.socialBadgeArrow = obj5;
let obj6 = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
_createForOfIteratorHelperLoose.separator = obj6;
_createForOfIteratorHelperLoose.moneyBirbPlaceholder = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.gatedChannel = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gatedChannelIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let closure_4;
  let store_page_trailer_url;
  const tmp = _createForOfIteratorHelperLoose();
  const importAll = tmp;
  gatedChannelId(stateFromStores1[13])({ forceRestore: true });
  let obj = guildId(stateFromStores1[14]);
  const first = obj.useGroupListingsForGuild(guildId)[0];
  let obj1 = guildId(stateFromStores1[15]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = guildId(stateFromStores1[14]);
  const subscriptionsSettings = obj2.useSubscriptionsSettings(guildId);
  let obj3 = guildId(stateFromStores1[16]);
  let items = [closure_10];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_10.getGuild(guildId));
  let obj4 = guildId(stateFromStores1[14]);
  let id;
  if (null != first) {
    id = first.id;
  }
  const subscriptionListingsForGroup = obj4.useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  obj = { guildId };
  let id1;
  if (null != first) {
    id1 = first.id;
  }
  obj.groupListingId = id1;
  obj.location = ROLE_SUBSCRIPTIONS_TAB;
  obj.relevantSubscriptionListingIds = mapped;
  gatedChannelId(stateFromStores1[17])(obj);
  let obj6 = guildId(stateFromStores1[16]);
  const items1 = [closure_9];
  const items2 = [gatedChannelId];
  stateFromStores1 = obj6.useStateFromStores(items1, () => outer1_9.getChannel(gatedChannelId), items2);
  closure_4 = gatedChannelId(stateFromStores1[18])(stateFromStores1);
  let obj7 = guildId(stateFromStores1[16]);
  const items3 = [_isNativeReflectConstruct];
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const coverImageURI = importAll(stateFromStores1[21]).getCoverImageURI(subscriptionsSettings);
          const hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            if (null != stateFromStores1) {
              const intl2 = guildId(stateFromStores1[10]).intl;
              obj = {
                unlockHook() {
                              let obj = { style: tmp.gatedChannel };
                              const items = [outer1_14(guildId(stateFromStores1[11]).Spacer, { size: 3 }), , , ];
                              obj = { size: guildId(stateFromStores1[11]).Icon.Sizes.SMALL_20, style: tmp.gatedChannelIcon, source: guildId(stateFromStores1[22]).getChannelIcon(stateFromStores1) };
                              items[1] = outer1_14(guildId(stateFromStores1[11]).Icon, obj);
                              items[2] = outer1_14(guildId(stateFromStores1[11]).Spacer, { size: 3 });
                              obj = { variant: "text-xs/semibold", color: "text-default", children: closure_4 };
                              items[3] = outer1_14(guildId(stateFromStores1[9]).Text, obj);
                              obj.children = items;
                              return outer1_15(outer1_6, obj);
                            }
              };
              let formatResult = intl2.format(guildId(stateFromStores1[10]).t.A1L1hU, obj);
            }
            obj1 = { style: tmp.container };
            obj2 = { right: 1 };
            obj1.scrollIndicatorInsets = obj2;
            obj3 = { source: coverImageURI, style: tmp.heroImage };
            const items4 = [callback(gatedChannelId(stateFromStores1[23]), obj3), , ];
            obj4 = { style: tmp.contentCard };
            const obj5 = { style: tmp.guildIconContainer };
            obj6 = { size: guildId(stateFromStores1[24]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp.guildIcon };
            obj5.children = callback(gatedChannelId(stateFromStores1[24]), obj6);
            const items5 = [callback(closure_6, obj5), , , , , , , , , , ];
            obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
            const intl3 = guildId(stateFromStores1[10]).intl;
            const obj8 = { serverName: stateFromStores.name };
            obj7.children = intl3.format(guildId(stateFromStores1[10]).t.mqCkpl, obj8);
            items5[1] = callback(guildId(stateFromStores1[9]).Text, obj7);
            const obj9 = { size: 8 };
            items5[2] = callback(guildId(stateFromStores1[11]).Spacer, obj9);
            const obj10 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: subscriptionsSettings.description };
            items5[3] = callback(guildId(stateFromStores1[25]).TruncatedText, obj10);
            let tmp38Result = hasItem;
            if (!hasItem) {
              tmp38Result = null != store_page_trailer_url;
            }
            if (tmp38Result) {
              const obj11 = {};
              const obj12 = { size: 24 };
              const items6 = [callback(guildId(stateFromStores1[11]).Spacer, obj12), ];
              const obj13 = { style: tmp.socialContainer };
              const obj14 = { gap: 8 };
              let tmp46 = hasItem;
              if (hasItem) {
                const obj15 = { iconSource: gatedChannelId(stateFromStores1[27]) };
                const intl4 = guildId(stateFromStores1[10]).intl;
                obj15.text = intl4.string(guildId(stateFromStores1[10]).t["2MhjUV"]);
                tmp46 = callback(SocialBadge, obj15);
              }
              const items7 = [tmp46, ];
              let tmp52 = null != store_page_trailer_url;
              if (tmp52) {
                const obj16 = { iconSource: gatedChannelId(stateFromStores1[28]) };
                const intl5 = guildId(stateFromStores1[10]).intl;
                obj16.text = intl5.string(guildId(stateFromStores1[10]).t["4PGeGA"]);
                obj16.onPress = function onPress() {
                  return gatedChannelId(stateFromStores1[29]).openURL(store_page_trailer_url);
                };
                tmp52 = callback(SocialBadge, obj16);
              }
              items7[1] = tmp52;
              obj14.children = items7;
              obj13.children = closure_15(guildId(stateFromStores1[26]).GappedList, obj14);
              items6[1] = callback(closure_6, obj13);
              obj11.children = items6;
              tmp38Result = closure_15(closure_16, obj11);
              const tmp38 = closure_15;
              const tmp39 = closure_16;
              const tmp43 = callback;
              const tmp44 = closure_6;
              const tmp45 = closure_15;
            }
            items5[4] = tmp38Result;
            const obj17 = { size: 16 };
            items5[5] = callback(guildId(stateFromStores1[11]).Spacer, obj17);
            items5[6] = callback(LegalDisclaimer, {});
            items5[7] = callback(Separator, {});
            const obj18 = { variant: "text-xs/semibold", color: "text-muted" };
            const obj19 = { textTransform: "uppercase" };
            obj18.style = obj19;
            obj18.children = formatResult;
            items5[8] = callback(guildId(stateFromStores1[9]).Text, obj18);
            const obj20 = { size: 24 };
            items5[9] = callback(guildId(stateFromStores1[11]).Spacer, obj20);
            const obj21 = { gap: 16, children: mapped.map((listingId) => outer1_14(gatedChannelId(stateFromStores1[30]), { listingId, guildId }, listingId)) };
            items5[10] = callback(guildId(stateFromStores1[26]).GappedList, obj21);
            obj4.children = items5;
            items4[1] = closure_15(closure_6, obj4);
            const obj22 = { source: tmp16, style: tmp.moneyBirbPlaceholder };
            items4[2] = callback(gatedChannelId(stateFromStores1[23]), obj22);
            obj1.children = items4;
            return closure_15(closure_7, obj1);
          }
          const intl = guildId(stateFromStores1[10]).intl;
          formatResult = intl.string(guildId(stateFromStores1[10]).t["mPHb1/"]);
          const obj33 = importAll(stateFromStores1[21]);
        }
      }
    }
  }
  const tmp10 = gatedChannelId(stateFromStores1[17]);
  return callback(closure_6, { style: tmp.loadingContainer, children: callback(closure_4, { size: "large" }) });
};
