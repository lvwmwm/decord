// Module ID: 15136
// Function ID: 114210
// Name: Separator
// Dependencies: []
// Exports: default

// Module 15136 (Separator)
function Separator() {
  return callback(closure_6, { style: callback2().separator });
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
  const tmp = callback2();
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
importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, TouchableOpacity: closure_5, View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const tmp3 = arg1(dependencyMap[1]);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: closure_13 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
obj.heroImage = { padding: null, Math: null };
const tmp5 = arg1(dependencyMap[6]);
obj.guildIconContainer = { borderRadius: importDefault(dependencyMap[8]).radii.md, borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.md, borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.guildIcon = { borderRadius: importDefault(dependencyMap[8]).radii.sm };
const obj2 = { borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.contentCard = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.md, borderTopRightRadius: importDefault(dependencyMap[8]).radii.md };
obj.loadingContainer = {};
obj.socialContainer = { flexDirection: "row" };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[8]).radii.xl, accessibilityRole: null, y: null, y: null, bottom: null };
obj.socialBadge = obj4;
obj.socialBadgeIcon = { PREMIUM_TENURE_72_MONTH: 4, FILES_OR_LINKS_NUM_COLUMNS: -1472642815 };
const obj5 = { merged_presences: 4, readStateType: -1472642815, tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.socialBadgeArrow = obj5;
const obj6 = { 0: "Array", 9223372036854775807: "isArray", 9223372036854775807: "constructor", -9223372036854775808: "Boolean", backgroundColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.separator = obj6;
obj.moneyBirbPlaceholder = { handleDisabled: false, scrollable: false, startExpanded: false };
obj.gatedChannel = {};
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.md, borderTopRightRadius: importDefault(dependencyMap[8]).radii.md };
obj.gatedChannelIcon = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
let closure_17 = obj.createStyles(obj);
const obj7 = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const gatedChannelId = guildId.gatedChannelId;
  const importDefault = gatedChannelId;
  let dependencyMap;
  let closure_4;
  let store_page_trailer_url;
  const tmp = callback2();
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
            obj7 = {};
            const intl3 = arg1(dependencyMap[10]).intl;
            const obj8 = { serverName: stateFromStores.name };
            obj7.children = intl3.format(arg1(dependencyMap[10]).t.mqCkpl, obj8);
            items5[1] = callback(arg1(dependencyMap[12]).Text, obj7);
            const obj9 = { size: 8 };
            items5[2] = callback(arg1(dependencyMap[11]).Spacer, obj9);
            const obj10 = { -9223372036854775808: "<string:261029890>", 0: "<string:3578855426>", 0: "<string:3728806327>", children: subscriptionsSettings.description };
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
            const obj18 = {};
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
