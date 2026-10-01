// Module ID: 17610
// Function ID: 17611
// Name: GuildSettingsRoleSubscriptionTierTemplateSelection
// Dependencies: [32, 19, 17, 14779, 17557, 1074, 21, 4836, 576, 4832, 17611, 563, 14757, 14758, 11685, 17617, 1613, 1485, 1241, 5016, 17567, 9713, 1115, 5936, 8230, 1249, 17552, 1177, 2]
// Exports: default

// Module 17610 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 14758 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 17567 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 17611 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 14779 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function TierTemplatesRenderer(groupListingId) {
  let error;
  let guildId;
  let items;
  let obj4;
  let templates;
  let tmp3;
  let width;
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const loading = groupListingId.loading;
  const tmp = closure_17();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    tmp3 = closure_14(closure_6, obj2);
  } else if (null != error) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
    items = ["Error: ", error.message];
    tmp3 = closure_15(guildId(4832).Text, obj3);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        let obj = {
          data: templates,
          horizontal: true,
          contentContainerStyle: obj4,
          keyExtractor(category) {
                  return category.category;
                },
          ItemSeparatorComponent() {
                  const obj = { style: size };
                  size = { height: "100%", width };
                  return closure_1_14(closure_1_8, obj);
                },
          decelerationRate: "fast",
          snapToInterval: guildId(17611).CARD_WIDTH + v16,
          renderItem(template) {
                  const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                  return authStore2(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
                }
        };
        obj4 = { paddingLeft: v16, paddingRight: v16 };
        tmp3 = closure_14(closure_9, obj);
      }
    }
  }
  return tmp3;
}
function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  let closure_1;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let loading;
  let obj6;
  let tmp19;
  let tmp20;
  guildId = guildId.guildId;
  let groupListingId;
  let first1;
  navigation = undefined;
  let callback;
  let callback1;
  let tmp = closure_17();
  importDefault = tmp;
  let obj = guildId(groupListingId[11]);
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj2 = guildId(groupListingId[12]);
  const first = obj2.useGroupListingsForGuild(guildId)[0];
  let obj3 = guildId(groupListingId[13]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  const tmp8 = require("useRequest");
  const tmp9 = first1(tmp8(stateFromStores(groupListingId[15]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2Result = guildId(groupListingId[17]);
  navigation = tmp2Result.useNavigation();
  const items1 = [first1, guildId, stateFromStores];
  const effect = navigation.useEffect(() => {
    const tmp = null != stateFromStores && 0 !== stateFromStores.length;
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "voluntarily_exit" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "create_from_scratch" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = GuildRoleSubscriptionsActionCreatorExtrasAll;
    const obj4 = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = obj3.openTierCreationModal(obj4);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let Text;
        let intl;
        let items;
        let obj3;
        let obj5;
        const obj = { onPress, style: closure_1_1.startFromScratch, activeOpacity: 0.5, children: items };
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_14(guildId(groupListingId[21]).PencilIcon, obj3) };
        obj3 = { color: closure_1_1.editIcon.color, size: "xs" };
        items = [closure_2_14(closure_2_8, obj2), ];
        const obj4 = { children: closure_2_14(Text, obj5) };
        obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(guildId(groupListingId[22]).t.WNWtkB) };
        Text = guildId(groupListingId[9]).Text;
        intl = guildId(groupListingId[22]).intl;
        items[1] = closure_2_14(closure_2_8, obj4);
        return closure_2_15(callback1, obj);
      },
      headerTitle() {
        return closure_1_14(closure_1_8, {});
      },
      headerLeft: obj2.getHeaderBackButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items4);
  let obj4 = { type: tmp2(tmp3[25]).ImpressionTypes.PAGE, name: tmp2(tmp3[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR, properties: { guild_id: guildId } };
  const tmp16 = require("useTrackImpression");
  tmp16(obj4);
  let obj5 = { guildId, children: tmp19(tmp20, obj6) };
  obj6 = { style: items5, children: items7 };
  items5 = [tmp.container, { paddingBottom: bottom }];
  const RoleSubscriptionSettingsDisabledContextProvider = tmp2(tmp3[26]).RoleSubscriptionSettingsDisabledContextProvider;
  const obj7 = { variant: "heading-xl/semibold", style: items6, children: intl.string(guildId(groupListingId[22]).t.uYFiKr) };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let Text = tmp2(tmp3[9]).Text;
  intl = tmp2(tmp3[22]).intl;
  items7 = [closure_14(Text, obj7), closure_14(tmp2(tmp3[27]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: intl2.string(guildId(groupListingId[22]).t["ne+rg6"]) };
  const Text2 = tmp2(tmp3[9]).Text;
  intl2 = tmp2(tmp3[22]).intl;
  items7[2] = closure_14(Text2, obj8);
  items7[3] = closure_14(guildId(groupListingId[27]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: intl3.format(guildId(groupListingId[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" }) };
  const Text3 = tmp2(tmp3[9]).Text;
  intl3 = tmp2(tmp3[22]).intl;
  items7[4] = closure_14(Text3, obj9);
  items7[5] = closure_14(guildId(groupListingId[27]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading, error, guildId, groupListingId };
  tmp19 = closure_15;
  tmp20 = closure_8;
  const tmp21 = TierTemplatesRenderer;
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  items7[6] = closure_14(tmp21, obj10);
  return closure_14(RoleSubscriptionSettingsDisabledContextProvider, obj5);
}
({ ActivityIndicator: metroRequire, TouchableOpacity: metroImportDefault, View: metroImportAll, FlatList: c9 } = react_native);
const usePriceTiers = RoleTierEditStore.usePriceTiers;
({ AnalyticEvents: closure_12, GuildSettingsSections: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let c16 = 16;
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 16 }, title: obj2, text: { marginLeft: 16, marginRight: 16 }, activityIndicator: obj3, editIcon: obj4, startFromScratch: { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let closure_17 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj2;
  const obj = { guildId: guildId.guildId, children: authStore2(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj2) };
  obj2 = {};
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  const merged = Object.assign(guildId);
  return authStore2(GroupListingsFetchContextProvider, obj);
};
