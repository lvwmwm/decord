// Module ID: 18876
// Function ID: 18877
// Name: GuildRoleSubscriptionPurchasePage
// Dependencies: [19, 17, 1192, 4990, 5012, 1072, 21, 5141, 575, 5761, 1113, 1187, 12107, 17435, 17437, 17438, 563, 18877, 5786, 18879, 18880, 18881, 8744, 5851, 7098, 18882, 6162, 18884, 18885, 5843, 18886, 2]
// Exports: default

// Module 18876 (GuildRoleSubscriptionPurchasePage)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5761 */;
import LinkingDefault from "Linking" /* 5843 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8744 */;
import AssetRegistryDefault from "AssetRegistry" /* 12107 */;
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard" /* 18886 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildStore from "GuildStore" /* 5012 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importAll;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let size;
let unpackModuleId;
function Separator() {
  const obj = { style: closure_17().separator };
  return authStore3(metroRequire, obj);
}
function LegalDisclaimer() {
  let intl;
  let obj2;
  const obj = { variant: "body-xs/normal", color: "text-muted", children: intl.format(intl6.t.FSPTDI, obj2) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  obj2 = { termsURL: map1.TERMS, paidURL: map1.PAID_TERMS };
  return authStore3(Text, obj);
}
function SocialBadge(onPress) {
  let iconSource;
  let items;
  let num;
  let text;
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = closure_17();
  let tmp5Result = null != onPress;
  const obj = { style: tmp.socialBadge, activeOpacity: num, onPress, children: items };
  num = 1;
  const tmp3 = closure_15;
  const tmp4 = hasOwnProperty;
  if (tmp5Result) {
    num = 0.5;
  }
  items = [, , ];
  const obj2 = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
  items[0] = authStore3(native.Icon, obj2);
  items[1] = authStore3(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: text });
  const tmp5 = authStore3;
  if (tmp5Result) {
    const obj3 = { source: AssetRegistryDefault, style: tmp.socialBadgeArrow };
    const Icon = native.Icon;
    tmp5Result = tmp5(Icon, obj3);
  }
  items[2] = tmp5Result;
  return tmp3(tmp4, obj);
}
({ ActivityIndicator: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ AnalyticsLocations: unpackModuleId, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, heroImage: { aspectRatio: 4, width: "100%" }, guildIconContainer: rect, guildIcon: obj3, contentCard: obj4, loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 }, socialBadge: obj5, socialBadgeIcon: { height: 24, marginRight: 6 }, socialBadgeArrow: obj6, separator: size, moneyBirbPlaceholder: { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" }, gatedChannel: { flexDirection: "row", alignItems: "center", marginBottom: -4 }, gatedChannelIcon: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
rect = { borderWidth: 3, borderRadius: nativeDefault.radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute" };
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj5 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj6 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
obj7 = { tintColor: nativeDefault.colors.TEXT_DEFAULT, marginHorizontal: 3 };
let closure_17 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  let ROLE_SUBSCRIPTIONS_TAB;
  let closure_2;
  let id1;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let theme;
  let tmp2Result2;
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  const tmp = closure_17();
  importAll = tmp;
  gatedChannelId(stateFromStores1[13])({ forceRestore: true });
  let obj = guildId(stateFromStores1[14]);
  const first = obj.useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(stateFromStores1[15]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  let obj3 = guildId(stateFromStores1[14]);
  const subscriptionsSettings = obj3.useSubscriptionsSettings(guildId);
  let obj4 = guildId(stateFromStores1[16]);
  let items = [GuildStore];
  const stateFromStores = obj4.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let id;
  const useSubscriptionListingsForGroup = guildId(stateFromStores1[14]).useSubscriptionListingsForGroup;
  guildId(stateFromStores1[14]);
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  const obj5 = { guildId, groupListingId: id1, location: ROLE_SUBSCRIPTIONS_TAB, relevantSubscriptionListingIds: mapped };
  id1 = undefined;
  const tmp2Result = gatedChannelId(stateFromStores1[17]);
  if (first != null) {
    id1 = first.id;
  }
  tmp2Result(obj5);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  const tmp5Result = guildId(stateFromStores1[16]);
  stateFromStores1 = tmp5Result.useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
  children = tmp2(tmp3[18])(stateFromStores1);
  guildId(stateFromStores1[16]);
  [][0] = ThemeStore;
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const obj24 = require("GuildRoleSubscriptionSettingsUtils");
          const coverImageURI = obj24.getCoverImageURI(subscriptionsSettings);
          const description = subscriptionsSettings.description;
          let hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            let formatResult;
            if (null != stateFromStores1) {
              const intl2 = tmp5(tmp3[10]).intl;
              const obj6 = {
                unlockHook() {
                              let items;
                              let obj3;
                              const obj = { style: closure_2.gatedChannel, children: items };
                              const obj2 = { size: native.Icon.Sizes.SMALL_20, style: closure_2.gatedChannelIcon, source: obj3.getChannelIcon(stateFromStores1) };
                              const Icon = native.Icon;
                              obj3 = utils_ChannelUtils;
                              items = [authStore3(Icon, obj2), ];
                              const obj4 = { variant: "body-xs/semibold", color: "text-default", children };
                              items[1] = authStore3(Text_Text.Text, obj4);
                              return closure_15(metroRequire, obj);
                            }
              };
              formatResult = intl2.format(tmp5(tmp3[10]).t.A1L1hU, obj6);
            }
            const obj7 = { style: tmp.container, scrollIndicatorInsets: { right: 1 }, children: items3 };
            const obj8 = { source: coverImageURI, style: tmp.heroImage };
            items3 = [closure_14(gatedChannelId(stateFromStores1[23]), obj8), , ];
            const obj9 = { style: tmp.contentCard, children: items4 };
            const obj10 = { style: tmp.guildIconContainer, children: closure_14(tmp2Result2, obj11) };
            obj11 = { size: guildId(stateFromStores1[24]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp.guildIcon };
            tmp2Result2 = gatedChannelId(stateFromStores1[24]);
            items4 = [closure_14(closure_6, obj10), , , , , , , , , , ];
            const obj12 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl3.format(guildId(stateFromStores1[10]).t.mqCkpl, obj13) };
            const Text = tmp5(tmp3[9]).Text;
            intl3 = tmp5(tmp3[10]).intl;
            obj13 = { serverName: stateFromStores.name };
            items4[1] = closure_14(Text, obj12);
            items4[2] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 8 });
            const obj14 = { variant: "body-sm/normal", color: "text-default", lineClamp: 3, children: description };
            items4[3] = closure_14(guildId(stateFromStores1[25]).TruncatedText, obj14);
            let tmp21Result = hasItem || null != store_page_trailer_url;
            const tmp22 = closure_7;
            const tmp24 = closure_6;
            if (tmp21Result) {
              const items5 = [closure_14(guildId(stateFromStores1[11]).Spacer, { size: 24 }), ];
              const Stack = tmp5(tmp3[26]).Stack;
              const tmp27 = closure_16;
              if (hasItem) {
                const obj15 = { iconSource: gatedChannelId(stateFromStores1[27]), text: intl4.string(guildId(stateFromStores1[10]).t["2MhjUV"]) };
                intl4 = tmp5(tmp3[10]).intl;
                hasItem = tmp23(SocialBadge, obj15);
              }
              const items6 = [hasItem, ];
              let tmp23Result = null != store_page_trailer_url;
              if (tmp23Result) {
                const obj16 = {
                  iconSource: gatedChannelId(stateFromStores1[28]),
                  text: intl5.string(guildId(stateFromStores1[10]).t["4PGeGA"]),
                  onPress() {
                                  const obj = LinkingDefault;
                                  return obj.openURL(store_page_trailer_url);
                                }
                };
                intl5 = tmp5(tmp3[10]).intl;
                tmp23Result = tmp23(SocialBadge, obj16);
              }
              const obj17 = { children: items5 };
              const obj18 = { direction: "horizontal", spacing: 8, children: items6 };
              items6[1] = tmp23Result;
              items5[1] = closure_15(Stack, obj18);
              tmp21Result = tmp21(tmp27, obj17);
            }
            items4[4] = tmp21Result;
            items4[5] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 16 });
            items4[6] = closure_14(LegalDisclaimer, {});
            items4[7] = closure_14(Separator, {});
            const obj19 = { variant: "body-sm/medium", color: "text-muted", children: formatResult };
            items4[8] = closure_14(guildId(stateFromStores1[9]).Text, obj19);
            items4[9] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 24 });
            const obj20 = {
              spacing: 16,
              children: mapped.map((listingId) => {
                          const obj = { listingId, guildId };
                          return authStore3(GuildRoleSubscriptionPurchasePreviewCardDefault, obj, listingId);
                        })
            };
            const Stack2 = tmp5(tmp3[26]).Stack;
            items4[10] = closure_14(Stack2, obj20);
            items3[1] = closure_15(tmp24, obj9);
            const obj21 = { source: tmp19, style: tmp.moneyBirbPlaceholder };
            items3[2] = closure_14(gatedChannelId(stateFromStores1[23]), obj21);
            return closure_15(tmp22, obj7);
          }
          const intl = tmp5(tmp3[10]).intl;
          formatResult = intl.string(tmp5(tmp3[10]).t["mPHb1/"]);
        }
      }
    }
  }
  const obj22 = { style: tmp.loadingContainer, children: closure_14(children, { size: "large" }) };
  return closure_14(closure_6, obj22);
};
