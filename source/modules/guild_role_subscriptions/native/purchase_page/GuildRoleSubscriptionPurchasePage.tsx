// Module ID: 15147
// Function ID: 114287
// Name: Separator
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15147 (Separator)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function Separator() {
  return callback(closure_6, { style: __exportStarResult1().separator });
}
function LegalDisclaimer() {
  let obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj = { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS };
  obj.children = intl.format(arg1(dependencyMap[10]).t.FSPTDI, obj);
  return callback(arg1(dependencyMap[9]).TextWithIOSLinkWorkaround, obj);
}
function SocialBadge(onPress) {
  let iconSource;
  let text;
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = __exportStarResult1();
  let tmp2 = null != onPress;
  let obj = { style: tmp.socialBadge };
  let num = 1;
  if (tmp2) {
    num = 0.5;
  }
  obj.activeOpacity = num;
  obj.onPress = onPress;
  obj = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
  const items = [callback(arg1(dependencyMap[11]).Icon, obj), callback(arg1(dependencyMap[12]).Text, { children: text }), ];
  if (tmp2) {
    obj = { source: importDefault(dependencyMap[13]), style: tmp.socialBadgeArrow };
    tmp2 = callback(arg1(dependencyMap[11]).Icon, obj);
  }
  items[2] = tmp2;
  obj.children = items;
  return closure_15(closure_5, obj);
}
({ ActivityIndicator: closure_4, TouchableOpacity: closure_5, View: closure_6, ScrollView: closure_7 } = __exportStarResult1);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: closure_13 } = __exportStarResult1);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { flex: 1, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.heroImage = { "Null": null, "Null": null };
const obj1 = { <string:542769156>: 13340560293673744000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:1562509316>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050927898995, <string:1536229380>: -0.0015869157818465542, <string:513343492>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025661846016371153, <string:1571880964>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000556268465209624, <string:490930180>: -53729471827996090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:1582366724>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017800590884751322, borderRadius: require("__exportStarResult1").radii.md, borderColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW };
__exportStarResult1.guildIconContainer = obj1;
__exportStarResult1.guildIcon = { borderRadius: require("__exportStarResult1").radii.sm };
const obj2 = { borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.contentCard = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderTopLeftRadius: require("__exportStarResult1").radii.md, borderTopRightRadius: require("__exportStarResult1").radii.md };
__exportStarResult1.loadingContainer = { "Null": null, "Null": 1, "Null": "text-sm/semibold", "Null": "interactive-text-default" };
__exportStarResult1.socialContainer = { flexDirection: "row" };
const obj4 = { <string:1383261810>: 4, <string:2575998389>: 4, <string:492007009>: 4, <string:788963846>: 2, <string:2976080991>: null, <string:1549987032>: "center", backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW, borderRadius: require("__exportStarResult1").radii.xl };
__exportStarResult1.socialBadge = obj4;
__exportStarResult1.socialBadgeIcon = {};
const obj3 = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderTopLeftRadius: require("__exportStarResult1").radii.md, borderTopRightRadius: require("__exportStarResult1").radii.md };
__exportStarResult1.socialBadgeArrow = { tintColor: require("__exportStarResult1").colors.INTERACTIVE_TEXT_DEFAULT };
const obj6 = { style: "Array", mediaPlaybackRequiresUserAction: "isArray", muteVideo: "constructor", unMuteVideo: "Boolean", backgroundColor: require("__exportStarResult1").colors.INTERACTIVE_BACKGROUND_HOVER };
__exportStarResult1.separator = obj6;
__exportStarResult1.moneyBirbPlaceholder = {};
__exportStarResult1.gatedChannel = { 0: null, 0: null, 9223372036854775807: null };
const obj5 = { tintColor: require("__exportStarResult1").colors.INTERACTIVE_TEXT_DEFAULT };
__exportStarResult1.gatedChannelIcon = { tintColor: require("__exportStarResult1").colors.TEXT_DEFAULT };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const gatedChannelId = guildId.gatedChannelId;
  const importDefault = gatedChannelId;
  let dependencyMap;
  let closure_4;
  let store_page_trailer_url;
  const tmp = __exportStarResult1();
  const importAll = tmp;
  importDefault(dependencyMap[14])({ forceRestore: true });
  let obj = arg1(dependencyMap[15]);
  const first = obj.useGroupListingsForGuild(guildId)[0];
  let obj1 = arg1(dependencyMap[16]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = arg1(dependencyMap[15]);
  const subscriptionsSettings = obj2.useSubscriptionsSettings(guildId);
  let obj3 = arg1(dependencyMap[17]);
  const items = [closure_10];
  const stateFromStores = obj3.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj4 = arg1(dependencyMap[15]);
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
  importDefault(dependencyMap[18])(obj);
  let obj6 = arg1(dependencyMap[17]);
  const items1 = [closure_9];
  const items2 = [gatedChannelId];
  const stateFromStores1 = obj6.useStateFromStores(items1, () => channel.getChannel(gatedChannelId), items2);
  dependencyMap = stateFromStores1;
  closure_4 = importDefault(dependencyMap[19])(stateFromStores1);
  let obj7 = arg1(dependencyMap[17]);
  const items3 = [closure_8];
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const coverImageURI = importAll(dependencyMap[22]).getCoverImageURI(subscriptionsSettings);
          const hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            if (null != stateFromStores1) {
              const intl2 = arg1(dependencyMap[10]).intl;
              obj = {
                unlockHook() {
                              let obj = { style: tmp.gatedChannel };
                              const items = [callback(guildId(stateFromStores1[11]).Spacer, { size: 3 }), , , ];
                              obj = { size: guildId(stateFromStores1[11]).Icon.Sizes.SMALL_20, style: tmp.gatedChannelIcon, source: guildId(stateFromStores1[23]).getChannelIcon(stateFromStores1) };
                              items[1] = callback(guildId(stateFromStores1[11]).Icon, obj);
                              items[2] = callback(guildId(stateFromStores1[11]).Spacer, { size: 3 });
                              obj = { children: closure_4 };
                              items[3] = callback(guildId(stateFromStores1[12]).Text, obj);
                              obj.children = items;
                              return callback2(closure_6, obj);
                            }
              };
              let formatResult = intl2.format(arg1(dependencyMap[10]).t.A1L1hU, obj);
            }
            obj1 = { style: tmp.container };
            obj2 = { right: 1 };
            obj1.scrollIndicatorInsets = obj2;
            obj3 = { source: coverImageURI, style: tmp.heroImage };
            const items4 = [callback(importDefault(dependencyMap[24]), obj3), , ];
            obj4 = { style: tmp.contentCard };
            const obj5 = { style: tmp.guildIconContainer };
            obj6 = { size: arg1(dependencyMap[25]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp.guildIcon };
            obj5.children = callback(importDefault(dependencyMap[25]), obj6);
            const items5 = [callback(closure_6, obj5), , , , , , , , , , ];
            obj7 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817 };
            const intl3 = arg1(dependencyMap[10]).intl;
            const obj8 = { serverName: stateFromStores.name };
            obj7.children = intl3.format(arg1(dependencyMap[10]).t.mqCkpl, obj8);
            items5[1] = callback(arg1(dependencyMap[12]).Text, obj7);
            const obj9 = { size: 8 };
            items5[2] = callback(arg1(dependencyMap[11]).Spacer, obj9);
            const obj10 = { 803799044: "<string:246415362>", 1269170180: "<string:4132503554>", 711589892: "<string:2269188589>", children: subscriptionsSettings.description };
            items5[3] = callback(arg1(dependencyMap[26]).TruncatedText, obj10);
            let tmp38Result = hasItem;
            if (!hasItem) {
              tmp38Result = null != store_page_trailer_url;
            }
            if (tmp38Result) {
              const obj11 = {};
              const obj12 = { size: 24 };
              const items6 = [callback(arg1(dependencyMap[11]).Spacer, obj12), ];
              const obj13 = { style: tmp.socialContainer };
              const obj14 = { gap: 8 };
              let tmp46 = hasItem;
              if (hasItem) {
                const obj15 = { iconSource: importDefault(dependencyMap[28]) };
                const intl4 = arg1(dependencyMap[10]).intl;
                obj15.text = intl4.string(arg1(dependencyMap[10]).t.2MhjUV);
                tmp46 = callback(SocialBadge, obj15);
              }
              const items7 = [tmp46, ];
              let tmp52 = null != store_page_trailer_url;
              if (tmp52) {
                const obj16 = { iconSource: importDefault(dependencyMap[29]) };
                const intl5 = arg1(dependencyMap[10]).intl;
                obj16.text = intl5.string(arg1(dependencyMap[10]).t.4PGeGA);
                obj16.onPress = function onPress() {
                  return gatedChannelId(stateFromStores1[30]).openURL(store_page_trailer_url);
                };
                tmp52 = callback(SocialBadge, obj16);
              }
              items7[1] = tmp52;
              obj14.children = items7;
              obj13.children = closure_15(arg1(dependencyMap[27]).GappedList, obj14);
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
            items5[5] = callback(arg1(dependencyMap[11]).Spacer, obj17);
            items5[6] = callback(LegalDisclaimer, {});
            items5[7] = callback(Separator, {});
            const obj18 = { cachedAt: 15, edpbxy: "center" };
            const obj19 = { textTransform: "uppercase" };
            obj18.style = obj19;
            obj18.children = formatResult;
            items5[8] = callback(arg1(dependencyMap[12]).Text, obj18);
            const obj20 = { size: 24 };
            items5[9] = callback(arg1(dependencyMap[11]).Spacer, obj20);
            const obj21 = { gap: 16, children: mapped.map((listingId) => callback(gatedChannelId(stateFromStores1[31]), { listingId, guildId }, listingId)) };
            items5[10] = callback(arg1(dependencyMap[27]).GappedList, obj21);
            obj4.children = items5;
            items4[1] = closure_15(closure_6, obj4);
            const obj22 = { source: tmp16, style: tmp.moneyBirbPlaceholder };
            items4[2] = callback(importDefault(dependencyMap[24]), obj22);
            obj1.children = items4;
            return closure_15(closure_7, obj1);
          }
          const intl = arg1(dependencyMap[10]).intl;
          formatResult = intl.string(arg1(dependencyMap[10]).t.mPHb1/);
          const obj33 = importAll(dependencyMap[22]);
        }
      }
    }
  }
  const tmp10 = importDefault(dependencyMap[18]);
  return callback(closure_6, { style: tmp.loadingContainer, children: callback(closure_4, { size: "large" }) });
};
