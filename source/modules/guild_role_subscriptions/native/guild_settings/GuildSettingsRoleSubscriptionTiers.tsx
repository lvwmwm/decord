// Module ID: 16313
// Function ID: 125853
// Name: DraftBadge
// Dependencies: []
// Exports: default

// Module 16313 (DraftBadge)
function DraftBadge() {
  const tmp = callback4();
  let obj = { style: tmp.draftBadge };
  obj = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold" };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.vosPk5);
  obj.children = callback2(arg1(dependencyMap[18]).Text, obj);
  return callback2(closure_7, obj);
}
function ArchivedBadge() {
  const tmp = callback4();
  let obj = { style: tmp.archiveBadge };
  obj = { style: tmp.archiveBadgeLabel };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.nhbtEl);
  obj.children = callback2(arg1(dependencyMap[18]).Text, obj);
  return callback2(closure_7, obj);
}
function UnsavedBadge() {
  const tmp = callback4();
  let obj = { style: tmp.unsavedBadge };
  obj = { style: tmp.unsavedBadgeLabel };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.aiwXeq);
  obj.children = callback2(arg1(dependencyMap[18]).Text, obj);
  return callback2(closure_7, obj);
}
function Row(disabled) {
  let children;
  let onLongPress;
  let onPress;
  let flag = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback4();
  const obj = {};
  const items = [tmp.tierManagementButton, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  obj.style = items;
  obj.accessibilityRole = "button";
  obj.onPress = onPress;
  obj.onLongPress = onLongPress;
  obj.disabled = flag;
  obj.children = children;
  return closure_17(importDefault(dependencyMap[19]), obj);
}
function EditListingButton(editStateId) {
  editStateId = editStateId.editStateId;
  const arg1 = editStateId;
  ({ guildId: closure_1, groupListingId: closure_2 } = editStateId);
  const tmp = callback4();
  let obj = arg1(dependencyMap[20]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionListing.getSubscriptionListing(editStateId));
  let published;
  if (null != stateFromStores) {
    published = stateFromStores.published;
  }
  let archived;
  if (null != stateFromStores) {
    archived = stateFromStores.archived;
  }
  let tmp6 = null != archived && archived;
  let tmp7 = !tmp6 && !(null != published && published) && undefined !== stateFromStores;
  let tmp8 = undefined === stateFromStores;
  let obj1 = importAll(dependencyMap[21]);
  let obj2 = importAll(dependencyMap[21]);
  const first = callback(obj2.usePriceTier(editStateId), 1)[0];
  let obj3 = importAll(dependencyMap[21]);
  const first1 = callback(obj3.useImage(editStateId, 250), 1)[0];
  if (null != stateFromStores) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    obj = {};
    obj = {
      onPress: editStateId.onPress,
      onLongPress() {
          let obj = callback(paths[12]);
          obj = { editStateId, guildId: callback, groupListingId: closure_2 };
          obj.openLazy(editStateId(paths[14])(paths[13], paths.paths), "TierArchiveOrDelete", obj);
        }
    };
    let tmp20 = null != first1;
    if (tmp20) {
      obj1 = { style: tmp.tierIcon, resizeMode: "cover" };
      obj2 = { uri: first1 };
      obj1.source = obj2;
      tmp20 = callback2(importDefault(dependencyMap[22]), obj1);
    }
    const items1 = [tmp20, , ];
    obj3 = { style: tmp.tierColumn };
    const obj4 = { children: callback(obj1.useName(editStateId), 1)[0] };
    const items2 = [callback2(arg1(dependencyMap[18]).Text, obj4), ];
    let obj5 = { style: tmp.detailsRow };
    if (tmp7) {
      tmp7 = callback2(DraftBadge, {});
    }
    const items3 = [tmp7, , , ];
    if (tmp6) {
      tmp6 = callback2(ArchivedBadge, {});
    }
    items3[1] = tmp6;
    if (tmp8) {
      tmp8 = callback2(UnsavedBadge, {});
    }
    items3[2] = tmp8;
    let obj6 = { style: tmp.tierPrice, children: "" };
    items3[3] = callback2(arg1(dependencyMap[18]).Text, obj6);
    obj5.children = items3;
    items2[1] = closure_18(closure_7, obj5);
    obj3.children = items2;
    items1[1] = closure_18(closure_7, obj3);
    items1[2] = callback2(arg1(dependencyMap[23]).PencilIcon, {});
    obj.children = items1;
    obj.children = closure_18(Row, obj);
    return callback2(closure_7, obj);
  } else if (null != first2) {
    const intl = arg1(dependencyMap[15]).intl;
    const obj7 = {};
    obj5 = arg1(dependencyMap[16]);
    obj7.price = obj5.formatPrice(first, first2.currency);
    obj6 = arg1(dependencyMap[17]);
    obj7.interval = obj6.formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[15]).t.CgmBaG, obj7);
  } else {
    const intl2 = arg1(dependencyMap[15]).intl;
    const obj8 = { price: arg1(dependencyMap[16]).formatPrice(first, constants.USD) };
    const obj17 = arg1(dependencyMap[16]);
    const obj9 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
    obj8.interval = arg1(dependencyMap[17]).formatPlanInterval(obj9);
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[15]).t.CgmBaG, obj8);
    const obj18 = arg1(dependencyMap[17]);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let importDefault;
  let dependencyMap;
  let closure_7;
  let callback;
  let closure_9;
  function handleEditListing(initialEditStateId) {
    const guildId = initialEditStateId;
    const guild = handleEditListing.getGuild(guildId);
    navigation(first[35])(null != guild, "guild must not be null");
    let obj = guildEligibleForTierTemplates(first[33]);
    obj = {};
    let id;
    if (null != first) {
      id = first.id;
    }
    obj.groupListingId = id;
    obj.initialEditStateId = initialEditStateId;
    obj.onBeforeDispatchNewListing = function onBeforeDispatchNewListing(id) {
      function handleListingCreated(id, arg1) {
        callback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[arg1] = arg0;
          return obj;
        });
      }(id.id, id);
    };
    obj.pushTierEditScene(navigation, obj);
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[26]);
  const navigation = obj.useNavigation();
  importDefault = navigation;
  let obj1 = arg1(dependencyMap[27]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = arg1(dependencyMap[28]);
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  let obj3 = arg1(dependencyMap[29]);
  const guildEligibleForTierTemplates = obj3.useGuildEligibleForTierTemplates(guildId);
  const importAll = guildEligibleForTierTemplates;
  let obj4 = arg1(dependencyMap[30]);
  const groupListingsForGuild = obj4.useGroupListingsForGuild(guildId);
  const first = groupListingsForGuild[0];
  dependencyMap = first;
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  callback = first1;
  let obj5 = importAll(dependencyMap[21]);
  const editStateIds = obj5.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const React = editStateIds;
  const tmp9 = callback(React.useState({}), 2);
  const first2 = tmp9[0];
  closure_7 = tmp9[1];
  const items = [editStateIds, first2];
  const memo = React.useMemo(() => {
    const mapped = editStateIds.map((arg0) => {
      let tmp = arg0;
      if (null != closure_6[arg0]) {
        tmp = tmp2;
      }
      return tmp;
    });
    return guildId(first[31]).uniq(mapped);
  }, items);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = {};
        const intl = callback(closure_3[15]).intl;
        obj.title = intl.string(callback(closure_3[15]).t.pXbGYc);
        const intl2 = callback(closure_3[15]).intl;
        obj.subtitle = intl2.string(callback(closure_3[15]).t.KzCF/6);
        return callback2(callback(closure_3[32]).NavigatorHeader, obj);
      }
    });
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
  let id;
  if (null != first) {
    id = first.id;
  }
  items1[3] = id;
  callback = React.useCallback(() => {
    if (guildEligibleForTierTemplates) {
      let id;
      let tmpResult = tmp(tmp2[33]);
      let obj = { guildId };
      if (null != first) {
        id = first.id;
      }
      obj.groupListingId = id;
      const result = tmpResult.pushTierTemplateSelectionScene(navigation, obj);
      const tmp10 = navigation;
    } else {
      let id1;
      tmpResult = tmp(tmp2[34]);
      obj = { guildId };
      if (null != first) {
        id1 = first.id;
      }
      obj.groupListingId = id1;
      obj.onAfterTierCreation = function onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      };
      const result1 = tmpResult.openTierCreationModal(obj);
    }
  }, items1);
  let obj6 = arg1(dependencyMap[20]);
  const items2 = [closure_9];
  const stateFromStores = obj6.useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  closure_9 = stateFromStores;
  const items3 = [stateFromStores, callback];
  const effect = React.useEffect(() => {
    if (stateFromStores === constants.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (null != memo) {
      mapped = memo.map((editStateId) => {
        const guildId = editStateId;
        return callback(closure_24, {
          editStateId,
          guildId,
          groupListingId: first1,
          onPress() {
            callback(arg0);
          }
        }, editStateId);
      });
    }
    obj = { style: tmp.container };
    obj = {};
    obj1 = { paddingBottom: importDefault(dependencyMap[24])().bottom };
    obj.style = obj1;
    obj2 = { style: tmp2.header };
    const intl = arg1(dependencyMap[15]).intl;
    obj2.children = intl.string(arg1(dependencyMap[15]).t.7iBIoO);
    const items4 = [callback2(importDefault(dependencyMap[36]), obj2), , , ];
    obj3 = { style: tmp.tierManagementDescription };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj4 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    obj3.children = intl2.format(arg1(dependencyMap[15]).t.nHRSvM, obj4);
    items4[1] = callback2(arg1(dependencyMap[18]).Text, obj3);
    items4[2] = mapped;
    obj5 = { onPress: callback, disabled: roleSubscriptionSettingsDisabled };
    obj6 = {};
    const tmp29 = importDefault(dependencyMap[36]);
    obj6.source = importDefault(dependencyMap[37]);
    const items5 = [callback2(importDefault(dependencyMap[22]), obj6), ];
    const obj7 = { style: tmp.createTierLabel };
    const intl3 = arg1(dependencyMap[15]).intl;
    obj7.children = intl3.string(arg1(dependencyMap[15]).t.PiFnny);
    items5[1] = callback2(arg1(dependencyMap[18]).Text, obj7);
    obj5.children = items5;
    items4[3] = callback3(Row, obj5);
    obj.children = items4;
    obj.children = callback3(closure_7, obj);
    return callback2(callback, obj);
  } else {
    const obj8 = { style: tmp.spinner, children: callback2(first2, {}) };
    return callback2(closure_7, obj8);
  }
  const tmp2 = importDefault(dependencyMap[25])();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_6, View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const MAX_SUBSCRIPTION_TIERS = arg1(dependencyMap[6]).MAX_SUBSCRIPTION_TIERS;
const tmp2 = arg1(dependencyMap[2]);
({ CurrencyCodes: closure_13, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = arg1(dependencyMap[7]));
const SubscriptionIntervalTypes = arg1(dependencyMap[8]).SubscriptionIntervalTypes;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { container: { height: "100%" }, tierManagementDescription: { __workletHash: null, ind: null } };
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[11]).radii.sm };
obj.tierManagementButton = obj;
obj.tierColumn = { GuildEvent: "isArray", stack: "key", "Null": "Array", "Bool(false)": "construct" };
const tmp4 = arg1(dependencyMap[9]);
obj.tierIcon = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH };
obj.tierPrice = { marginStart: 6 };
const obj1 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH };
obj.draftBadge = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.YELLOW_300, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
const obj2 = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.YELLOW_300, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
obj.draftBadgeLabel = { color: importDefault(dependencyMap[11]).unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
const obj3 = { color: importDefault(dependencyMap[11]).unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj.archiveBadge = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.PRIMARY_500, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
obj.archiveBadgeLabel = { textTransform: "uppercase" };
const obj4 = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.PRIMARY_500, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
obj.unsavedBadge = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
obj.unsavedBadgeLabel = { textTransform: "uppercase" };
obj.detailsRow = {};
obj.createTierLabel = { marginStart: 12 };
obj.spinner = { marginTop: 12 };
obj.disabled = { opacity: 0.5 };
let closure_19 = obj.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[11]).radii.sm, paddingHorizontal: 4 };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback2(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return callback2(importDefault(dependencyMap[38]), obj);
};
