// Module ID: 19991
// Function ID: 19992
// Name: GuildSettingsRoleSubscriptionTierTemplateSelection
// Dependencies: [32, 19, 17, 17210, 19942, 1072, 21, 575, 5014, 5624, 7294, 19992, 563, 17190, 17191, 12401, 19998, 1625, 1497, 1252, 5760, 19951, 10232, 1113, 6998, 6028, 1260, 19938, 1187, 2]
// Exports: default

// Module 19991 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 17191 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 19951 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 19992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 17210 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
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
  const tmp = closure_16();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    tmp3 = closure_13(closure_6, obj2);
  } else if (null != error) {
    let obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
    items = ["Error: ", error.message];
    tmp3 = closure_14(guildId(5624).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        const obj3 = {
          data: templates,
          horizontal: true,
          contentContainerStyle: obj4,
          keyExtractor(category) {
                  return category.category;
                },
          ItemSeparatorComponent() {
                  const obj = { style: size };
                  size = { height: "100%", width };
                  return closure_1_13(closure_1_8, obj);
                },
          decelerationRate: "fast",
          snapToInterval: guildId(19992).CARD_WIDTH + PX_16,
          renderItem(template) {
                  const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                  return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
                }
        };
        obj4 = { paddingLeft: PX_16, paddingRight: PX_16 };
        const FlashList = guildId(7294).FlashList;
        tmp3 = closure_13(FlashList, obj3);
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
  let tmp = closure_16();
  importDefault = tmp;
  let obj = guildId(groupListingId[12]);
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj2 = guildId(groupListingId[13]);
  const first = obj2.useGroupListingsForGuild(guildId)[0];
  let obj3 = guildId(groupListingId[14]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  const tmp8 = require("useRequest");
  const tmp9 = first1(tmp8(stateFromStores(groupListingId[16]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2Result = guildId(groupListingId[18]);
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
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = unpackModuleId.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "voluntarily_exit" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = unpackModuleId.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
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
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_13(guildId(groupListingId[22]).PencilIcon, obj3) };
        obj3 = { color: closure_1_1.editIcon.color, size: "xs" };
        items = [closure_2_13(closure_2_8, obj2), ];
        const obj4 = { children: closure_2_13(Text, obj5) };
        obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(guildId(groupListingId[23]).t.WNWtkB) };
        Text = guildId(groupListingId[9]).Text;
        intl = guildId(groupListingId[23]).intl;
        items[1] = closure_2_13(closure_2_8, obj4);
        return closure_2_14(callback1, obj);
      },
      headerTitle() {
        return closure_1_13(closure_1_8, {});
      },
      headerLeft: obj2.getHeaderBackButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items4);
  let obj4 = { type: tmp2(tmp3[26]).ImpressionTypes.PAGE, name: tmp2(tmp3[26]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR, properties: { guild_id: guildId } };
  const tmp16 = require("useTrackImpression");
  tmp16(obj4);
  let obj5 = { guildId, children: tmp19(tmp20, obj6) };
  obj6 = { style: items5, children: items7 };
  items5 = [tmp.container, { paddingBottom: bottom }];
  const RoleSubscriptionSettingsDisabledContextProvider = tmp2(tmp3[27]).RoleSubscriptionSettingsDisabledContextProvider;
  const obj7 = { variant: "heading-xl/semibold", style: items6, children: intl.string(guildId(groupListingId[23]).t.uYFiKr) };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let Text = tmp2(tmp3[9]).Text;
  intl = tmp2(tmp3[23]).intl;
  items7 = [closure_13(Text, obj7), closure_13(tmp2(tmp3[28]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: intl2.string(guildId(groupListingId[23]).t["ne+rg6"]) };
  const Text2 = tmp2(tmp3[9]).Text;
  intl2 = tmp2(tmp3[23]).intl;
  items7[2] = closure_13(Text2, obj8);
  items7[3] = closure_13(guildId(groupListingId[28]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: intl3.format(guildId(groupListingId[23]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" }) };
  const Text3 = tmp2(tmp3[9]).Text;
  intl3 = tmp2(tmp3[23]).intl;
  items7[4] = closure_13(Text3, obj9);
  items7[5] = closure_13(guildId(groupListingId[28]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading, error, guildId, groupListingId };
  tmp19 = closure_14;
  tmp20 = closure_8;
  const tmp21 = TierTemplatesRenderer;
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  items7[6] = closure_13(tmp21, obj10);
  return closure_13(RoleSubscriptionSettingsDisabledContextProvider, obj5);
}
({ ActivityIndicator: metroRequire, TouchableOpacity: metroImportDefault, View: metroImportAll } = react_native);
const usePriceTiers = RoleTierEditStore.usePriceTiers;
({ AnalyticEvents: unpackModuleId, GuildSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { container: { marginTop: PX_16 }, title: obj2, text: { marginLeft: PX_16, marginRight: PX_16 }, activityIndicator: obj3, editIcon: obj4, startFromScratch: obj5 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: nativeDefault.space.PX_4 };
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj2;
  const obj = { guildId: guildId.guildId, children: map1(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj2) };
  obj2 = {};
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  const merged = Object.assign(guildId);
  return map1(GroupListingsFetchContextProvider, obj);
};
