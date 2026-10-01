// Module ID: 16186
// Function ID: 16187
// Name: GuildRoleSubscriptionPurchasePage
// Dependencies: [19, 17, 1182, 2045, 2067, 1074, 21, 4836, 576, 4832, 1115, 1177, 9396, 6400, 14755, 14757, 14758, 563, 16187, 4989, 16189, 16190, 16191, 5335, 5899, 5896, 16192, 9807, 16194, 16195, 4525, 16196, 2]
// Exports: default

// Module 16186 (GuildRoleSubscriptionPurchasePage)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import AssetRegistryDefault from "AssetRegistry" /* 9396 */;
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard" /* 16196 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  return authStore2(metroRequire, obj);
}
function LegalDisclaimer() {
  let intl;
  let obj2;
  const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.format(intl6.t.FSPTDI, obj2) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  obj2 = { termsURL: map1.TERMS, paidURL: map1.PAID_TERMS };
  return authStore2(Text, obj);
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
  items[0] = authStore2(native.Icon, obj2);
  items[1] = authStore2(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: text });
  const tmp5 = authStore2;
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
let obj = { container: obj2, heroImage: { aspectRatio: 4, width: "100%" }, guildIconContainer: rect, guildIcon: obj3, contentCard: obj4, loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 }, socialContainer: { flexDirection: "row" }, socialBadge: obj5, socialBadgeIcon: { height: 24, marginRight: 6 }, socialBadgeArrow: obj6, separator: size, moneyBirbPlaceholder: { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" }, gatedChannel: { flexDirection: "row", alignItems: "center", marginBottom: -4 }, gatedChannelIcon: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
rect = { borderWidth: 3, borderRadius: nativeDefault.radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute" };
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj5 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj6 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
obj7 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  let GappedList;
  let ROLE_SUBSCRIPTIONS_TAB;
  let closure_2;
  let id1;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items7;
  let obj12;
  let obj14;
  let obj20;
  let theme;
  let tmp5Result2;
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  let obj = guildId(stateFromStores1[13]);
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
  const tmp4 = closure_17();
  importAll = tmp4;
  gatedChannelId(stateFromStores1[14])({ forceRestore: true });
  let obj2 = guildId(stateFromStores1[15]);
  const first = obj2.useGroupListingsForGuild(guildId)[0];
  let obj3 = guildId(stateFromStores1[16]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  let obj4 = guildId(stateFromStores1[15]);
  const subscriptionsSettings = obj4.useSubscriptionsSettings(guildId);
  let items = [GuildStore];
  const obj5 = guildId(stateFromStores1[17]);
  const stateFromStores = obj5.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let id;
  const useSubscriptionListingsForGroup = guildId(stateFromStores1[15]).useSubscriptionListingsForGroup;
  guildId(stateFromStores1[15]);
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
  const obj6 = { guildId, groupListingId: id1, location: ROLE_SUBSCRIPTIONS_TAB, relevantSubscriptionListingIds: mapped };
  id1 = undefined;
  const tmp5Result = gatedChannelId(stateFromStores1[18]);
  if (first != null) {
    id1 = first.id;
  }
  tmp5Result(obj6);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  const tmpResult = guildId(stateFromStores1[17]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
  children = tmp5(tmp2[19])(stateFromStores1);
  guildId(stateFromStores1[17]);
  [][0] = ThemeStore;
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const obj26 = require("GuildRoleSubscriptionSettingsUtils");
          const coverImageURI = obj26.getCoverImageURI(subscriptionsSettings);
          const description = subscriptionsSettings.description;
          let hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            let formatResult;
            if (null != stateFromStores1) {
              const intl2 = tmp(tmp2[10]).intl;
              const obj7 = {
                unlockHook() {
                              let items;
                              let obj3;
                              const obj = { style: closure_2.gatedChannel, children: items };
                              items = [authStore2(native.Spacer, { size: 3 }), , , ];
                              const obj2 = { size: native.Icon.Sizes.SMALL_20, style: closure_2.gatedChannelIcon, source: obj3.getChannelIcon(stateFromStores1) };
                              const Icon = native.Icon;
                              obj3 = utils_ChannelUtils;
                              items[1] = authStore2(Icon, obj2);
                              items[2] = authStore2(native.Spacer, { size: 3 });
                              const obj4 = { variant: "text-xs/semibold", color: "text-default", children };
                              items[3] = authStore2(Text_Text.Text, obj4);
                              return closure_15(metroRequire, obj);
                            }
              };
              formatResult = intl2.format(tmp(tmp2[10]).t.A1L1hU, obj7);
            }
            const obj8 = { style: tmp4.container, scrollIndicatorInsets: { right: 1 }, children: items3 };
            const obj9 = { source: coverImageURI, style: tmp4.heroImage };
            items3 = [closure_14(gatedChannelId(stateFromStores1[24]), obj9), , ];
            const obj10 = { style: tmp4.contentCard, children: items4 };
            const obj11 = { style: tmp4.guildIconContainer, children: closure_14(tmp5Result2, obj12) };
            obj12 = { size: guildId(stateFromStores1[25]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp4.guildIcon };
            tmp5Result2 = gatedChannelId(stateFromStores1[25]);
            items4 = [closure_14(closure_6, obj11), , , , , , , , , , ];
            const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl3.format(guildId(stateFromStores1[10]).t.mqCkpl, obj14) };
            const Text = tmp(tmp2[9]).Text;
            intl3 = tmp(tmp2[10]).intl;
            obj14 = { serverName: stateFromStores.name };
            items4[1] = closure_14(Text, obj13);
            items4[2] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 8 });
            const obj15 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: description };
            items4[3] = closure_14(guildId(stateFromStores1[26]).TruncatedText, obj15);
            let tmp22Result = hasItem || null != store_page_trailer_url;
            const tmp23 = closure_7;
            if (tmp22Result) {
              const items5 = [closure_14(guildId(stateFromStores1[11]).Spacer, { size: 24 }), ];
              const obj16 = { style: tmp4.socialContainer, children: closure_15(GappedList, obj20) };
              GappedList = tmp(tmp2[27]).GappedList;
              const tmp28 = closure_16;
              if (hasItem) {
                const obj17 = { iconSource: gatedChannelId(stateFromStores1[28]), text: intl4.string(guildId(stateFromStores1[10]).t["2MhjUV"]) };
                intl4 = tmp(tmp2[10]).intl;
                hasItem = tmp24(SocialBadge, obj17);
              }
              const items6 = [hasItem, ];
              let tmp24Result = null != store_page_trailer_url;
              if (tmp24Result) {
                const obj18 = {
                  iconSource: gatedChannelId(stateFromStores1[29]),
                  text: intl5.string(guildId(stateFromStores1[10]).t["4PGeGA"]),
                  onPress() {
                                  const obj = LinkingDefault;
                                  return obj.openURL(store_page_trailer_url);
                                }
                };
                intl5 = tmp(tmp2[10]).intl;
                tmp24Result = tmp24(SocialBadge, obj18);
              }
              const obj19 = { children: items5 };
              obj20 = { gap: 8, children: items6 };
              items6[1] = tmp24Result;
              items5[1] = closure_14(closure_6, obj16);
              tmp22Result = tmp22(tmp28, obj19);
            }
            items4[4] = tmp22Result;
            items4[5] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 16 });
            items4[6] = closure_14(LegalDisclaimer, {});
            items4[7] = closure_14(Separator, {});
            const obj21 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: items7, children: formatResult };
            items7 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
            items4[8] = closure_14(guildId(stateFromStores1[9]).Text, obj21);
            items4[9] = closure_14(guildId(stateFromStores1[11]).Spacer, { size: 24 });
            const obj22 = {
              gap: 16,
              children: mapped.map((listingId) => {
                          const obj = { listingId, guildId };
                          return authStore2(GuildRoleSubscriptionPurchasePreviewCardDefault, obj, listingId);
                        })
            };
            const GappedList2 = tmp(tmp2[27]).GappedList;
            items4[10] = closure_14(GappedList2, obj22);
            items3[1] = closure_15(closure_6, obj10);
            const obj23 = { source: tmp20, style: tmp4.moneyBirbPlaceholder };
            items3[2] = closure_14(gatedChannelId(stateFromStores1[24]), obj23);
            return closure_15(tmp23, obj8);
          }
          const intl = tmp(tmp2[10]).intl;
          formatResult = intl.string(tmp(tmp2[10]).t["mPHb1/"]);
        }
      }
    }
  }
  const obj24 = { style: tmp4.loadingContainer, children: closure_14(children, { size: "large" }) };
  return closure_14(closure_6, obj24);
};
