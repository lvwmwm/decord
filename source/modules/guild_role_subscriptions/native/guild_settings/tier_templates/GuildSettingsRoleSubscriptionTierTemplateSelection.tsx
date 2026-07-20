// Module ID: 16337
// Function ID: 126066
// Name: TierTemplatesRenderer
// Dependencies: []
// Exports: default

// Module 16337 (TierTemplatesRenderer)
function TierTemplatesRenderer(groupListingId) {
  let error;
  let guildId;
  let templates;
  ({ templates, error, guildId } = groupListingId);
  const arg1 = guildId;
  const importDefault = groupListingId.groupListingId;
  const importAll = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    let obj = { color: tmp.activityIndicator.color };
    let tmp3 = callback2(closure_6, obj);
  } else if (null != error) {
    obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    const items = ["<string:3504907740>", error.message];
    obj.children = items;
    tmp3 = callback3(arg1(dependencyMap[9]).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        obj = { data: templates, horizontal: true };
        const obj1 = { paddingLeft: closure_16, paddingRight: closure_16 };
        obj.contentContainerStyle = obj1;
        obj.keyExtractor = function keyExtractor(category) {
          return category.category;
        };
        obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
          const style = { height: "100%", width: closure_16 };
          return callback(closure_8, { style });
        };
        obj.decelerationRate = "fast";
        obj.snapToInterval = arg1(dependencyMap[10]).CARD_WIDTH + closure_16;
        obj.renderItem = function renderItem(item) {
          return callback(groupListingId(closure_3[10]), { template: item.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = callback2(closure_9, obj);
      }
    }
  }
  return tmp3;
}
function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let groupListingId = guildId.groupListingId;
  let dependencyMap;
  let callback;
  let React;
  callback = undefined;
  let callback1;
  const tmp = callback4();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => templates.getTemplates(guildId));
  const importAll = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const first = obj1.useGroupListingsForGuild(guildId)[0];
  let obj2 = arg1(dependencyMap[13]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  if (null == groupListingId) {
    let id;
    if (null != first) {
      id = first.id;
    }
    groupListingId = id;
  }
  dependencyMap = groupListingId;
  const tmp7 = callback(importDefault(dependencyMap[14])(importAll(dependencyMap[15]).getTemplates), 2);
  const first1 = tmp7[0];
  callback = first1;
  let loading = tmp9.loading;
  let obj3 = arg1(dependencyMap[17]);
  const navigation = obj3.useNavigation();
  React = navigation;
  const items1 = [first1, guildId, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = 0 !== stateFromStores.length;
    }
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = React.useCallback(() => {
    let obj = tmp(groupListingId[18]);
    obj = { exit_reason: "voluntarily_exit" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = React.useCallback(() => {
    let obj = tmp(groupListingId[18]);
    obj = { exit_reason: "create_from_scratch" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = guildId(groupListingId[19]);
    obj = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = stateFromStores(groupListingId[20]).openTierCreationModal(obj);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerRight() {
        let obj = { onPress: closure_7, style: closure_1.startFromScratch, activeOpacity: 0.5 };
        obj = { style: closure_1.editIcon, children: callback2(callback(closure_3[21]).PencilIcon, obj) };
        obj = { color: closure_1.editIcon.color, size: "xs" };
        const items = [callback2(closure_8, obj), ];
        const obj1 = {};
        const obj2 = { INTEGRATION_CREATE: 1, ConstraintReasonCode: 1 };
        const intl = callback(closure_3[22]).intl;
        obj2.children = intl.string(callback(closure_3[22]).t.WNWtkB);
        obj1.children = callback2(callback(closure_3[9]).Text, obj2);
        items[1] = callback2(closure_8, obj1);
        obj.children = items;
        return callback3(closure_7, obj);
      },
      headerTitle() {
        return callback2(closure_8, {});
      },
      headerLeft: guildId(groupListingId[23]).getHeaderBackButton(callback)
    };
    navigation.setOptions(obj);
  }, items4);
  obj = {};
  const tmp6 = importDefault(dependencyMap[14]);
  obj.type = arg1(dependencyMap[25]).ImpressionTypes.PAGE;
  obj.name = arg1(dependencyMap[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
  obj.properties = { guild_id: guildId };
  importDefault(dependencyMap[24])(obj);
  obj = { guildId };
  obj1 = { style: items5 };
  const items5 = [tmp.container, { paddingBottom: importDefault(dependencyMap[16])().bottom }];
  obj2 = { variant: "heading-xl/semibold", style: items6 };
  const items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  const intl = arg1(dependencyMap[22]).intl;
  obj2.children = intl.string(arg1(dependencyMap[22]).t.uYFiKr);
  const items7 = [callback2(arg1(dependencyMap[9]).Text, obj2), callback2(arg1(dependencyMap[27]).Spacer, { size: 8 }), , , , , ];
  obj3 = { variant: "text-sm/medium", style: tmp.text };
  const intl2 = arg1(dependencyMap[22]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[22]).t.ne+rg6);
  items7[2] = callback2(arg1(dependencyMap[9]).Text, obj3);
  items7[3] = callback2(arg1(dependencyMap[27]).Spacer, { size: 8 });
  const obj4 = { variant: "text-sm/medium", style: tmp.text };
  const intl3 = arg1(dependencyMap[22]).intl;
  obj4.children = intl3.format(arg1(dependencyMap[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = callback2(arg1(dependencyMap[28]).TextWithIOSLinkWorkaround, obj4);
  items7[5] = callback2(arg1(dependencyMap[27]).Spacer, { size: 24 });
  const obj5 = { templates: stateFromStores };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj5.loading = loading;
  obj5.error = tmp7[1].error;
  obj5.guildId = guildId;
  obj5.groupListingId = groupListingId;
  items7[6] = callback2(TierTemplatesRenderer, obj5);
  obj1.children = items7;
  obj.children = closure_15(closure_8, obj1);
  return callback2(arg1(dependencyMap[26]).RoleSubscriptionSettingsDisabledContextProvider, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_6, TouchableOpacity: closure_7, View: closure_8, FlatList: closure_9 } = arg1(dependencyMap[2]));
let closure_10 = importDefault(dependencyMap[3]);
const usePriceTiers = arg1(dependencyMap[4]).usePriceTiers;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, GuildSettingsSections: closure_13 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
let closure_16 = 16;
let obj = arg1(dependencyMap[7]);
obj = { container: { marginTop: 16 } };
obj = { color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
obj.text = { right: "<string:16777479>", bottom: "<string:36295491>" };
const tmp4 = arg1(dependencyMap[6]);
obj.activityIndicator = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj1 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.editIcon = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
obj.startFromScratch = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
let closure_17 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj = { guildId: guildId.guildId };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = callback2(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj);
  return callback2(arg1(dependencyMap[13]).GroupListingsFetchContextProvider, obj);
};
