// Module ID: 17563
// Function ID: 17564
// Name: GuildSettingsRoleSubscriptionTiers
// Dependencies: [32, 19, 17, 9049, 2067, 4462, 14750, 1074, 1374, 21, 4836, 576, 4800, 17564, 1981, 1115, 6655, 14776, 4832, 9203, 563, 14772, 5899, 9713, 1613, 13442, 1485, 14758, 17552, 13437, 14757, 12, 5936, 17566, 17567, 38, 9271, 17601, 17562, 2]
// Exports: default

// Module 17563 (GuildSettingsRoleSubscriptionTiers)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 17562 */;
import GuildRoleSettingsActionCreatorsAll from "GuildRoleSettingsActionCreators" /* 17566 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 17567 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let guild, navigation;

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
function DraftBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.draftBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: intl.string(intl4.t.vosPk5) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
}
function ArchivedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.archiveBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.nhbtEl) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
}
function UnsavedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.unsavedBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.aiwXeq) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
}
function Row(disabled) {
  let children;
  let onLongPress;
  let onPress;
  let disabled2 = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (disabled2 === undefined) {
    disabled2 = false;
  }
  const tmp = closure_19();
  const style = [tmp.tierManagementButton, ];
  disabled = disabled2;
  const tmp2 = closure_17;
  const tmp3 = TouchableHitBoxDefault;
  if (disabled2) {
    disabled = tmp.disabled;
  }
  style[1] = disabled;
  return tmp2(tmp3, { style, accessibilityRole: "button", onPress, onLongPress, disabled: disabled2, children });
}
function EditListingButton(editStateId) {
  let first3;
  let groupListingId;
  let guildId;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj7;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const onPress = editStateId.onPress;
  const tmp = closure_19();
  let obj = editStateId(563);
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.published;
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (stateFromStores != null) {
    flag2 = stateFromStores.archived;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp11Result3 = !flag2 && !flag && undefined !== stateFromStores;
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useName(editStateId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.usePriceTier(editStateId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useImage(editStateId, 250), 1)[0];
  if (stateFromStores != null) {
    first3 = stateFromStores.subscription_plans[0];
  }
  let str = "";
  if (undefined !== first1) {
    let formatToPlainStringResult;
    if (null != first3) {
      const intl = tmp2(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj5 = { price: tmp2Result.formatPrice(first1, first3.currency), interval: tmp2Result4.formatPlanInterval(first3) };
      const CgmBaG = tmp2(1115).t.CgmBaG;
      tmp2Result = editStateId(6655);
      tmp2Result4 = editStateId(14776);
      formatToPlainStringResult = formatToPlainString(CgmBaG, obj5);
    } else {
      const intl2 = tmp2(1115).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const obj6 = { price: tmp2Result5.formatPrice(first1, constants.USD), interval: tmp2Result6.formatPlanInterval(obj7) };
      const CgmBaG2 = tmp2(1115).t.CgmBaG;
      obj7 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
      tmp2Result5 = editStateId(6655);
      tmp2Result6 = editStateId(14776);
      formatToPlainStringResult = formatToPlainString2(CgmBaG2, obj6);
    }
    str = formatToPlainStringResult;
  }
  let tmp11Result = null != first2;
  const obj8 = {
    onPress,
    onLongPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { editStateId, guildId: importDefault, groupListingId: importAll };
      obj.openLazy(asyncRequire(17564, dependencyMap.paths), "TierArchiveOrDelete", obj2);
    },
    children: items1
  };
  const tmp14 = Row;
  if (tmp11Result) {
    const obj9 = { style: tmp.tierIcon, resizeMode: "cover", source: obj10 };
    obj10 = { uri: first2 };
    tmp11Result = tmp11(FastImageDefault, obj9);
  }
  items1 = [tmp11Result, , ];
  const obj11 = { style: tmp.tierColumn, children: items2 };
  items2 = [closure_17(editStateId(4832).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: first }), ];
  const obj12 = { style: tmp.detailsRow, children: items3 };
  if (tmp11Result3) {
    tmp11Result3 = tmp11(DraftBadge, {});
  }
  items3 = [tmp11Result3, , , ];
  if (flag2) {
    flag2 = tmp11(ArchivedBadge, {});
  }
  let tmp11Result4 = undefined === stateFromStores;
  items3[1] = flag2;
  if (tmp11Result4) {
    tmp11Result4 = tmp11(UnsavedBadge, {});
  }
  items3[2] = tmp11Result4;
  const obj13 = { children: closure_18(tmp14, obj8) };
  const obj14 = { style: tmp.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: str };
  items3[3] = closure_17(editStateId(4832).Text, obj14);
  items2[1] = closure_18(closure_7, obj12);
  items1[1] = closure_18(closure_7, obj11);
  items1[2] = closure_17(editStateId(9713).PencilIcon, {});
  return closure_17(closure_7, obj13);
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let obj10;
  let obj13;
  let obj9;
  guildId = guildId.guildId;
  navigation = undefined;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_19();
  const bottom = navigation(first[24])().bottom;
  let tmp5 = guildId;
  const tmp4 = navigation(first[25])();
  let obj = guildId(first[26]);
  navigation = obj.useNavigation();
  let obj2 = guildId(first[27]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  const obj3 = guildId(first[28]);
  const roleSubscriptionSettingsDisabled = obj3.useRoleSubscriptionSettingsDisabled();
  const obj4 = guildId(first[29]);
  const guildEligibleForTierTemplates = obj4.useGuildEligibleForTierTemplates(guildId);
  const obj5 = guildId(first[30]);
  const groupListingsForGuild = obj5.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  const obj6 = guildEligibleForTierTemplates(first[21]);
  const editStateIds = obj6.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const tmp12 = first1(editStateIds.useState({}), 2);
  const first2 = tmp12[0];
  let closure_7 = tmp12[1];
  const items = [editStateIds, first2];
  const memo = editStateIds.useMemo(() => {
    const mapped = editStateIds.map((item) => {
      let tmp = first2[item];
      if (tmp == null) {
        tmp = item;
      }
      return tmp;
    });
    const obj = _mod12;
    return obj.uniq(mapped);
  }, items);
  const layoutEffect = editStateIds.useLayoutEffect(() => {
    let obj = {
      headerTitle() {
        let intl;
        let intl2;
        const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
        const NavigatorHeader = guildId(first[32]).NavigatorHeader;
        intl = guildId(first[15]).intl;
        intl2 = guildId(first[15]).intl;
        return closure_1_17(NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
  let id;
  const obj7 = editStateIds;
  const useCallback = editStateIds.useCallback;
  if (first != null) {
    id = first.id;
  }
  items1[3] = id;
  onPress = useCallback(() => {
    let id;
    let id1;
    if (guildEligibleForTierTemplates) {
      const obj2 = { guildId, groupListingId: id };
      id = undefined;
      const pushTierTemplateSelectionScene = GuildRoleSettingsActionCreatorsAll.pushTierTemplateSelectionScene;
      GuildRoleSettingsActionCreatorsAll;
      const tmp9 = navigation;
      if (first != null) {
        id = first.id;
      }
      const result = pushTierTemplateSelectionScene(tmp9, obj2);
    } else {
      const obj = {
        guildId,
        groupListingId: id1,
        onAfterTierCreation() {
            navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
          }
      };
      id1 = undefined;
      const openTierCreationModal = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal;
      GuildRoleSubscriptionsActionCreatorExtrasAll;
      if (first != null) {
        id1 = first.id;
      }
      const result1 = openTierCreationModal(obj);
    }
  }, items1);
  const items2 = [stateFromStores];
  const tmp5Result = tmp5(first[20]);
  stateFromStores = tmp5Result.useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, onPress];
  const effect = obj7.useEffect(() => {
    if (stateFromStores === constants.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (memo != null) {
      mapped = memo.map((editStateId) => {
        guildId = editStateId;
        let obj = {
          editStateId,
          guildId,
          groupListingId: first1,
          onPress() {
            guild = guild.getGuild(guildId);
            closure_1_1(closure_1_3[35])(null != guild, "guild must not be null");
            let id;
            const pushTierEditScene = guildEligibleForTierTemplates(closure_1_3[33]).pushTierEditScene;
            guildEligibleForTierTemplates(closure_1_3[33]);
            const tmp = closure_0;
            const tmp5 = navigation;
            if (first != null) {
              id = first.id;
            }
            let obj = {
              groupListingId: id,
              initialEditStateId: tmp,
              onBeforeDispatchNewListing(id) {
                id = id.id;
                let closure_1 = closure_0;
                closure_2_7((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = id;
                  return obj;
                });
              }
            };
            pushTierEditScene(tmp5, obj);
          }
        };
        return closure_1_17(EditListingButton, obj, editStateId);
      });
    }
    const obj8 = { style: tmp.container, children: closure_18(closure_7, obj9) };
    obj9 = { style: obj10, children: items4 };
    obj10 = { paddingBottom: bottom };
    const obj11 = { style: tmp4.header, children: intl.string(tmp5(first[15]).t["7iBIoO"]) };
    const tmp2Result = navigation(first[36]);
    intl = tmp5(tmp3[15]).intl;
    items4 = [closure_17(tmp2Result, obj11), , , ];
    const obj12 = { style: tmp.tierManagementDescription, variant: "text-sm/medium", color: "text-default", children: intl2.format(tmp5(first[15]).t.nHRSvM, obj13) };
    const Text = tmp5(tmp3[18]).Text;
    intl2 = tmp5(tmp3[15]).intl;
    obj13 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    items4[1] = closure_17(Text, obj12);
    items4[2] = mapped;
    const obj14 = { onPress, disabled: roleSubscriptionSettingsDisabled, children: items5 };
    const obj15 = { source: navigation(first[37]) };
    const tmp2Result2 = navigation(first[22]);
    items5 = [closure_17(tmp2Result2, obj15), ];
    const obj16 = { style: tmp.createTierLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl3.string(tmp5(first[15]).t.PiFnny) };
    const Text2 = tmp5(tmp3[18]).Text;
    intl3 = tmp5(tmp3[15]).intl;
    items5[1] = closure_17(Text2, obj16);
    items4[3] = closure_18(Row, obj14);
    return closure_17(onPress, obj8);
  } else {
    const obj17 = { style: tmp.spinner, children: closure_17(first2, {}) };
    return closure_17(closure_7, obj17);
  }
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const MAX_SUBSCRIPTION_TIERS = GuildRoleSubscriptionsConstants.MAX_SUBSCRIPTION_TIERS;
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = Constants);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, tierManagementDescription: { marginBottom: 16, paddingHorizontal: 16 }, tierManagementButton: obj2, tierColumn: { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 }, tierIcon: size, tierPrice: { marginStart: 6 }, draftBadge: obj3, draftBadgeLabel: obj4, archiveBadge: obj5, archiveBadgeLabel: { textTransform: "uppercase" }, unsavedBadge: obj6, unsavedBadgeLabel: { textTransform: "uppercase" }, detailsRow: { flexDirection: "row", alignItems: "center", marginTop: 3 }, createTierLabel: { marginStart: 12 }, spinner: { marginTop: 12 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", alignSelf: "stretch", justifyContent: "flex-start", height: 72, padding: 16, marginHorizontal: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, marginEnd: 12, height: 40, width: 40 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
let closure_19 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_17(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  const tmp = GuildSettingsRoleSubscriptionContainerDefault;
  return closure_17(tmp, obj);
};
