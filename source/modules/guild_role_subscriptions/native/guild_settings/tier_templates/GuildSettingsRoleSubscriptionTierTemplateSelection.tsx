// Module ID: 16524
// Function ID: 128698
// Name: TierTemplatesRenderer
// Dependencies: [57, 31, 27, 14173, 16471, 653, 33, 4130, 689, 4126, 16525, 624, 14151, 14152, 11352, 16531, 1557, 1456, 675, 4324, 16481, 9142, 1212, 5087, 8604, 480, 16466, 1273, 2]
// Exports: default

// Module 16524 (TierTemplatesRenderer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { usePriceTiers } from "_createForOfIteratorHelperLoose";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function TierTemplatesRenderer(groupListingId) {
  let error;
  let guildId;
  let templates;
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    let obj = { color: tmp.activityIndicator.color };
    let tmp3 = callback(closure_6, obj);
  } else if (null != error) {
    obj = { variant: "text-xs/normal", color: "text-feedback-critical" };
    const items = ["Error: ", error.message];
    obj.children = items;
    tmp3 = callback2(guildId(4126).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        obj = { data: templates, horizontal: true };
        const obj1 = { paddingLeft: c16, paddingRight: c16 };
        obj.contentContainerStyle = obj1;
        obj.keyExtractor = function keyExtractor(category) {
          return category.category;
        };
        obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
          const style = { height: "100%", width: outer1_16 };
          return outer1_14(outer1_8, { style });
        };
        obj.decelerationRate = "fast";
        obj.snapToInterval = guildId(16525).CARD_WIDTH + c16;
        obj.renderItem = function renderItem(item) {
          return outer1_14(groupListingId(outer1_3[10]), { template: item.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = callback(closure_9, obj);
      }
    }
  }
  return tmp3;
}
function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  guildId = guildId.guildId;
  let groupListingId = guildId.groupListingId;
  groupListingId = undefined;
  let first1;
  let navigation;
  let callback;
  let callback1;
  let tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = guildId(groupListingId[11]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getTemplates(guildId));
  let obj1 = guildId(groupListingId[12]);
  const first = obj1.useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(groupListingId[13]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  if (null == groupListingId) {
    let id;
    if (null != first) {
      id = first.id;
    }
    groupListingId = id;
  }
  const tmp7 = first1(importDefault(groupListingId[14])(stateFromStores(groupListingId[15]).getTemplates), 2);
  first1 = tmp7[0];
  let loading = tmp9.loading;
  let obj3 = guildId(groupListingId[17]);
  navigation = obj3.useNavigation();
  const items1 = [first1, guildId, stateFromStores];
  const effect = navigation.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = 0 !== stateFromStores.length;
    }
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = navigation.useCallback(() => {
    let obj = tmp(groupListingId[18]);
    obj = { exit_reason: "voluntarily_exit" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(outer1_12.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    let obj = tmp(groupListingId[18]);
    obj = { exit_reason: "create_from_scratch" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(outer1_12.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = guildId(groupListingId[19]);
    obj = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        outer1_5.navigate(outer2_13.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = stateFromStores(groupListingId[20]).openTierCreationModal(obj);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let obj = { onPress: outer1_7, style: outer1_1.startFromScratch, activeOpacity: 0.5 };
        obj = { style: outer1_1.editIcon, children: outer2_14(guildId(groupListingId[21]).PencilIcon, obj) };
        obj = { color: outer1_1.editIcon.color, size: "xs" };
        const items = [outer2_14(outer2_8, obj), ];
        const obj1 = {};
        const obj2 = { variant: "text-md/medium", color: "interactive-text-active" };
        const intl = guildId(groupListingId[22]).intl;
        obj2.children = intl.string(guildId(groupListingId[22]).t.WNWtkB);
        obj1.children = outer2_14(guildId(groupListingId[9]).Text, obj2);
        items[1] = outer2_14(outer2_8, obj1);
        obj.children = items;
        return outer2_15(callback1, obj);
      },
      headerTitle() {
        return outer2_14(outer2_8, {});
      },
      headerLeft: guildId(groupListingId[23]).getHeaderBackButton(callback)
    };
    navigation.setOptions(obj);
  }, items4);
  obj = {};
  const tmp6 = importDefault(groupListingId[14]);
  obj.type = guildId(groupListingId[25]).ImpressionTypes.PAGE;
  obj.name = guildId(groupListingId[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
  obj.properties = { guild_id: guildId };
  importDefault(groupListingId[24])(obj);
  obj = { guildId };
  obj1 = { style: items5 };
  items5 = [tmp.container, { paddingBottom: importDefault(groupListingId[16])().bottom }];
  obj2 = { variant: "heading-xl/semibold", style: items6 };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let intl = guildId(groupListingId[22]).intl;
  obj2.children = intl.string(guildId(groupListingId[22]).t.uYFiKr);
  const items7 = [callback(guildId(groupListingId[9]).Text, obj2), callback(guildId(groupListingId[27]).Spacer, { size: 8 }), , , , , ];
  obj3 = { variant: "text-sm/medium", style: tmp.text };
  const intl2 = guildId(groupListingId[22]).intl;
  obj3.children = intl2.string(guildId(groupListingId[22]).t["ne+rg6"]);
  items7[2] = callback(guildId(groupListingId[9]).Text, obj3);
  items7[3] = callback(guildId(groupListingId[27]).Spacer, { size: 8 });
  const obj4 = { variant: "text-sm/medium", style: tmp.text };
  const intl3 = guildId(groupListingId[22]).intl;
  obj4.children = intl3.format(guildId(groupListingId[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = callback(guildId(groupListingId[9]).Text, obj4);
  items7[5] = callback(guildId(groupListingId[27]).Spacer, { size: 24 });
  const obj5 = { templates: stateFromStores };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj5.loading = loading;
  obj5.error = tmp7[1].error;
  obj5.guildId = guildId;
  obj5.groupListingId = groupListingId;
  items7[6] = callback(TierTemplatesRenderer, obj5);
  obj1.children = items7;
  obj.children = closure_15(closure_8, obj1);
  return callback(guildId(groupListingId[26]).RoleSubscriptionSettingsDisabledContextProvider, obj);
}
({ ActivityIndicator: closure_6, TouchableOpacity: closure_7, View: closure_8, FlatList: closure_9 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, GuildSettingsSections: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 16;
_createForOfIteratorHelperLoose = { container: { marginTop: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { marginLeft: 16, marginRight: 16 };
_createForOfIteratorHelperLoose.activityIndicator = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.editIcon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
_createForOfIteratorHelperLoose.startFromScratch = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj = { guildId: guildId.guildId };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = callback(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj);
  return callback(require(14152) /* useGroupListingsFetchContext */.GroupListingsFetchContextProvider, obj);
};
