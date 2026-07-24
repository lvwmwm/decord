// Module ID: 16477
// Function ID: 128351
// Name: DraftBadge
// Dependencies: [57, 31, 27, 8483, 1838, 3752, 14144, 653, 1851, 33, 4130, 689, 4098, 16478, 1934, 1212, 5616, 14170, 4126, 8518, 624, 14166, 5085, 9142, 1557, 12957, 1456, 14152, 16466, 12952, 14151, 22, 5087, 16480, 16481, 44, 8521, 16515, 16476, 2]
// Exports: default

// Module 16477 (DraftBadge)
import _slicedToArray from "_slicedToArray";
import apply from "apply";
import get_ActivityIndicator from "useGroupListingsFetchContext";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import { MAX_SUBSCRIPTION_TIERS } from "MAX_SUBSCRIPTION_TIERS";
import ME from "ME";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import jsxProd from "pushTierEditScene";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function DraftBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.draftBadge };
  obj = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.vosPk5);
  obj.children = callback2(require(4126) /* Text */.Text, obj);
  return callback2(closure_7, obj);
}
function ArchivedBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.archiveBadge };
  obj = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.nhbtEl);
  obj.children = callback2(require(4126) /* Text */.Text, obj);
  return callback2(closure_7, obj);
}
function UnsavedBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.unsavedBadge };
  obj = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.aiwXeq);
  obj.children = callback2(require(4126) /* Text */.Text, obj);
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
  const tmp = _createForOfIteratorHelperLoose();
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
  return closure_17(importDefault(8518), obj);
}
function EditListingButton(editStateId) {
  let importAll;
  let importDefault;
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = editStateId(624);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getSubscriptionListing(editStateId));
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
  let obj1 = importAll(14166);
  let obj2 = importAll(14166);
  const first = callback(obj2.usePriceTier(editStateId), 1)[0];
  let obj3 = importAll(14166);
  const first1 = callback(obj3.useImage(editStateId, 250), 1)[0];
  if (null != stateFromStores) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    obj = {};
    obj = {
      onPress: editStateId.onPress,
      onLongPress() {
          let obj = outer1_1(outer1_3[12]);
          obj = { editStateId, guildId: closure_1, groupListingId: closure_2 };
          obj.openLazy(editStateId(outer1_3[14])(outer1_3[13], outer1_3.paths), "TierArchiveOrDelete", obj);
        }
    };
    let tmp20 = null != first1;
    if (tmp20) {
      obj1 = { style: tmp.tierIcon, resizeMode: "cover" };
      obj2 = { uri: first1 };
      obj1.source = obj2;
      tmp20 = callback2(importDefault(5085), obj1);
    }
    const items1 = [tmp20, , ];
    obj3 = { style: tmp.tierColumn };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: callback(obj1.useName(editStateId), 1)[0] };
    const items2 = [callback2(editStateId(4126).Text, obj4), ];
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
    let obj6 = { style: tmp.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: "" };
    items3[3] = callback2(editStateId(4126).Text, obj6);
    obj5.children = items3;
    items2[1] = closure_18(closure_7, obj5);
    obj3.children = items2;
    items1[1] = closure_18(closure_7, obj3);
    items1[2] = callback2(editStateId(9142).PencilIcon, {});
    obj.children = items1;
    obj.children = closure_18(Row, obj);
    return callback2(closure_7, obj);
  } else if (null != first2) {
    const intl = editStateId(1212).intl;
    const obj7 = {};
    obj5 = editStateId(5616);
    obj7.price = obj5.formatPrice(first, first2.currency);
    obj6 = editStateId(14170);
    obj7.interval = obj6.formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(editStateId(1212).t.CgmBaG, obj7);
  } else {
    const intl2 = editStateId(1212).intl;
    const obj8 = { price: editStateId(5616).formatPrice(first, constants.USD) };
    const obj17 = editStateId(5616);
    const obj9 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
    obj8.interval = editStateId(14170).formatPlanInterval(obj9);
    formatToPlainStringResult = intl2.formatToPlainString(editStateId(1212).t.CgmBaG, obj8);
    const obj18 = editStateId(14170);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let first;
  let closure_7;
  let callback;
  let stateFromStores;
  function handleEditListing(initialEditStateId) {
    let closure_0 = initialEditStateId;
    const guild = handleEditListing.getGuild(closure_0);
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
      (function handleListingCreated(id, closure_0) {
        closure_0 = id;
        let closure_1 = closure_0;
        outer2_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_1] = closure_0;
          return obj;
        });
      })(id.id, closure_0);
    };
    obj.pushTierEditScene(navigation, obj);
  }
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(first[26]);
  navigation = obj.useNavigation();
  let obj1 = guildId(first[27]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = guildId(first[28]);
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  let obj3 = guildId(first[29]);
  const guildEligibleForTierTemplates = obj3.useGuildEligibleForTierTemplates(guildId);
  let obj4 = guildId(first[30]);
  const groupListingsForGuild = obj4.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  let obj5 = guildEligibleForTierTemplates(first[21]);
  const editStateIds = obj5.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const tmp9 = first1(editStateIds.useState({}), 2);
  const first2 = tmp9[0];
  closure_7 = tmp9[1];
  const items = [editStateIds, first2];
  const memo = editStateIds.useMemo(() => {
    const mapped = editStateIds.map((arg0) => {
      let tmp = arg0;
      if (null != outer1_6[arg0]) {
        tmp = tmp2;
      }
      return tmp;
    });
    return guildId(first[31]).uniq(mapped);
  }, items);
  const layoutEffect = editStateIds.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = {};
        const intl = guildId(first[15]).intl;
        obj.title = intl.string(guildId(first[15]).t.pXbGYc);
        const intl2 = guildId(first[15]).intl;
        obj.subtitle = intl2.string(guildId(first[15]).t["KzCF/6"]);
        return outer2_17(guildId(first[32]).NavigatorHeader, obj);
      }
    });
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
  let id;
  if (null != first) {
    id = first.id;
  }
  items1[3] = id;
  callback = editStateIds.useCallback(() => {
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
        outer1_1.navigate(outer2_14.ROLE_SUBSCRIPTIONS_TIERS);
      };
      const result1 = tmpResult.openTierCreationModal(obj);
    }
  }, items1);
  let obj6 = guildId(first[20]);
  const items2 = [stateFromStores];
  stateFromStores = obj6.useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, callback];
  const effect = editStateIds.useEffect(() => {
    if (stateFromStores === outer1_15.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (null != memo) {
      mapped = memo.map((editStateId) => {
        let closure_0 = editStateId;
        return outer1_17(outer1_24, {
          editStateId,
          guildId: closure_0,
          groupListingId: first1,
          onPress() {
            outer1_10(closure_0);
          }
        }, editStateId);
      });
    }
    obj = { style: tmp.container };
    obj = {};
    obj1 = { paddingBottom: navigation(first[24])().bottom };
    obj.style = obj1;
    obj2 = { style: tmp2.header };
    let intl = guildId(first[15]).intl;
    obj2.children = intl.string(guildId(first[15]).t["7iBIoO"]);
    const items4 = [callback2(navigation(first[36]), obj2), , , ];
    obj3 = { style: tmp.tierManagementDescription, variant: "text-sm/medium", color: "text-default" };
    let intl2 = guildId(first[15]).intl;
    obj4 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    obj3.children = intl2.format(guildId(first[15]).t.nHRSvM, obj4);
    items4[1] = callback2(guildId(first[18]).Text, obj3);
    items4[2] = mapped;
    obj5 = { onPress: callback, disabled: roleSubscriptionSettingsDisabled };
    obj6 = {};
    const tmp29 = navigation(first[36]);
    obj6.source = navigation(first[37]);
    const items5 = [callback2(navigation(first[22]), obj6), ];
    const obj7 = { style: tmp.createTierLabel, variant: "text-md/medium", color: "mobile-text-heading-primary" };
    const intl3 = guildId(first[15]).intl;
    obj7.children = intl3.string(guildId(first[15]).t.PiFnny);
    items5[1] = callback2(guildId(first[18]).Text, obj7);
    obj5.children = items5;
    items4[3] = callback3(Row, obj5);
    obj.children = items4;
    obj.children = callback3(closure_7, obj);
    return callback2(callback, obj);
  } else {
    const obj8 = { style: tmp.spinner, children: callback2(first2, {}) };
    return callback2(closure_7, obj8);
  }
  tmp2 = navigation(first[25])();
}
({ ActivityIndicator: closure_6, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ CurrencyCodes: closure_13, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { height: "100%" }, tierManagementDescription: { marginBottom: 16, paddingHorizontal: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "row", alignItems: "center", alignSelf: "stretch", justifyContent: "flex-start", height: 72, padding: 16, marginHorizontal: 16, marginBottom: 8 };
_createForOfIteratorHelperLoose.tierManagementButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tierColumn = { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, marginEnd: 12, height: 40, width: 40 };
_createForOfIteratorHelperLoose.tierIcon = obj1;
_createForOfIteratorHelperLoose.tierPrice = { marginStart: 6 };
_createForOfIteratorHelperLoose.draftBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.draftBadgeLabel = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
let obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
_createForOfIteratorHelperLoose.archiveBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.archiveBadgeLabel = { textTransform: "uppercase" };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.unsavedBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.unsavedBadgeLabel = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose.detailsRow = { flexDirection: "row", alignItems: "center", marginTop: 3 };
_createForOfIteratorHelperLoose.createTierLabel = { marginStart: 12 };
_createForOfIteratorHelperLoose.spinner = { marginTop: 12 };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback2(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return callback2(importDefault(16476), obj);
};
