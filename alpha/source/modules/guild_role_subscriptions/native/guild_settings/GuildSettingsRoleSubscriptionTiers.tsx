// Module ID: 19889
// Function ID: 19890
// Name: GuildSettingsRoleSubscriptionTiers
// Dependencies: [32, 19, 17, 9056, 4880, 4934, 17125, 1072, 21, 5009, 575, 5253, 19890, 1995, 1114, 7407, 17151, 5619, 563, 17147, 6969, 5712, 11118, 1626, 1498, 17133, 19881, 15676, 17132, 12, 6992, 19892, 19893, 38, 7054, 11454, 19888, 2]
// Exports: default

// Module 19889 (GuildSettingsRoleSubscriptionTiers)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17125 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17147 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 19888 */;
import GuildRoleSettingsActionCreatorsAll from "GuildRoleSettingsActionCreators" /* 19892 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 19893 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4934 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let guild, navigation;

let closure_14;
let closure_15;
let closure_16;
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
  const tmp = closure_17();
  const obj = { style: tmp.draftBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: intl.string(intl4.t.vosPk5) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
}
function ArchivedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_17();
  const obj = { style: tmp.archiveBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.nhbtEl) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
}
function UnsavedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_17();
  const obj = { style: tmp.unsavedBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.aiwXeq) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
}
function EditListingButton(editStateId) {
  let first3;
  let groupListingId;
  let guildId;
  let items1;
  let obj7;
  let obj9;
  let tmp11Result6;
  let tmp12;
  let tmp13;
  let tmp2Result;
  let tmp2Result3;
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const onPress = editStateId.onPress;
  const tmp = closure_17();
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
  let tmp5 = !flag2 && !flag && undefined !== stateFromStores;
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
      const intl = tmp2(1114).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj5 = { price: tmp2Result.formatPrice(first1, first3.currency), interval: tmp2Result3.formatPlanInterval(first3) };
      const CgmBaG = tmp2(1114).t.CgmBaG;
      tmp2Result = editStateId(7407);
      tmp2Result3 = editStateId(17151);
      formatToPlainStringResult = formatToPlainString(CgmBaG, obj5);
    } else {
      const tmp2Result4 = editStateId(17151);
      formatToPlainStringResult = tmp2Result4.formatMonthlyPriceLabel(first1);
    }
    str = formatToPlainStringResult;
  }
  const obj6 = {
    label: first,
    subLabel: tmp12(tmp13, obj7),
    icon: tmp11Result6,
    arrow: true,
    onPress,
    onLongPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { editStateId, guildId: importDefault, groupListingId: importAll };
      obj.openLazy(asyncRequire(19890, dependencyMap.paths), "TierArchiveOrDelete", obj2);
    }
  };
  let tmp11Result = tmp5;
  obj7 = { style: tmp.detailsRow, children: items1 };
  const TableRow = tmp2(6969).TableRow;
  tmp12 = closure_16;
  tmp13 = closure_7;
  if (tmp5) {
    tmp11Result = tmp11(DraftBadge, {});
  }
  items1 = [tmp11Result, , , ];
  items1[1] = flag2 && tmp11(ArchivedBadge, {});
  const tmp11Result4 = flag2 && tmp11(ArchivedBadge, {});
  items1[2] = tmp18 && tmp11(UnsavedBadge, {});
  const items2 = [tmp.tierPrice, ];
  const tmp11Result5 = tmp18 && tmp11(UnsavedBadge, {});
  const Text = tmp2(5619).Text;
  if (!tmp5) {
    tmp5 = flag2;
  }
  if (!tmp5) {
    tmp5 = tmp18;
  }
  items2[1] = !tmp5 && tmp.tierPriceWithoutBadge;
  items1[3] = closure_15(Text, { style: items2, variant: "text-sm/medium", color: "interactive-text-default", children: str });
  if (null != first2) {
    const obj8 = { style: tmp.tierIcon, resizeMode: "cover", source: obj9 };
    obj9 = { uri: first2 };
    tmp11Result6 = tmp11(FastImageDefault, obj8);
  } else {
    const obj10 = { IconComponent: editStateId(11118).TagsIcon };
    const Icon = tmp2(6969).TableRow.Icon;
    tmp11Result6 = tmp11(Icon, obj10);
  }
  return closure_15(TableRow, obj6);
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  let CirclePlusIcon;
  let TableRowGroup;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let obj11;
  let obj12;
  let obj14;
  let obj9;
  guildId = guildId.guildId;
  navigation = undefined;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_17();
  const tmp4 = guildId;
  const bottom = navigation(first[23])().bottom;
  let obj = guildId(first[24]);
  const tmp2 = navigation;
  navigation = obj.useNavigation();
  let obj2 = guildId(first[25]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  const obj3 = guildId(first[26]);
  const roleSubscriptionSettingsDisabled = obj3.useRoleSubscriptionSettingsDisabled();
  const obj4 = guildId(first[27]);
  const guildEligibleForTierTemplates = obj4.useGuildEligibleForTierTemplates(guildId);
  const obj5 = guildId(first[28]);
  const groupListingsForGuild = obj5.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  const obj6 = guildEligibleForTierTemplates(first[19]);
  const editStateIds = obj6.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const tmp11 = first1(editStateIds.useState({}), 2);
  const first2 = tmp11[0];
  let closure_7 = tmp11[1];
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
        const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
        const NavigatorHeader = guildId(first[30]).NavigatorHeader;
        intl = guildId(first[14]).intl;
        intl2 = guildId(first[14]).intl;
        return closure_1_15(NavigatorHeader, obj);
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
  const tmp4Result = tmp4(first[18]);
  stateFromStores = tmp4Result.useStateFromStores(items2, () => stateFromStores.getProps().subsection);
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
            closure_1_1(closure_1_3[33])(null != guild, "guild must not be null");
            let id;
            const pushTierEditScene = guildEligibleForTierTemplates(closure_1_3[31]).pushTierEditScene;
            guildEligibleForTierTemplates(closure_1_3[31]);
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
        return closure_1_15(EditListingButton, obj, editStateId);
      });
    }
    const obj8 = { style: tmp.container, children: closure_15(closure_7, obj9) };
    obj9 = { style: items4, children: closure_16(TableRowGroup, obj11) };
    items4 = [tmp.content, ];
    const obj10 = { paddingBottom: bottom };
    items4[1] = obj10;
    obj11 = { title: intl.string(tmp4(first[14]).t["7iBIoO"]), description: intl2.format(tmp4(first[14]).t.nHRSvM, obj12), hasIcons: true, children: items5 };
    TableRowGroup = tmp4(tmp3[34]).TableRowGroup;
    intl = tmp4(tmp3[14]).intl;
    intl2 = tmp4(tmp3[14]).intl;
    items5 = [mapped, ];
    obj12 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    const obj13 = { label: intl3.string(tmp4(first[14]).t.PiFnny), icon: closure_15(CirclePlusIcon, obj14), onPress, disabled: roleSubscriptionSettingsDisabled };
    const TableRow = tmp4(tmp3[20]).TableRow;
    intl3 = tmp4(tmp3[14]).intl;
    obj14 = { size: "md", color: tmp2(first[10]).colors.ICON_BRAND };
    CirclePlusIcon = tmp4(tmp3[35]).CirclePlusIcon;
    items5[1] = closure_15(TableRow, obj13);
    return closure_15(onPress, obj8);
  } else {
    const obj15 = { style: tmp.spinner, children: closure_15(first2, {}) };
    return closure_15(closure_7, obj15);
  }
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const MAX_SUBSCRIPTION_TIERS = GuildRoleSubscriptionsConstants.MAX_SUBSCRIPTION_TIERS;
({ GuildSettingsSections: map1, GuildSettingsSubsections: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, content: obj2, tierIcon: size, tierPrice: { marginStart: 6 }, tierPriceWithoutBadge: { marginStart: 0 }, draftBadge: obj3, draftBadgeLabel: obj4, archiveBadge: obj5, archiveBadgeLabel: { textTransform: "uppercase" }, unsavedBadge: obj6, unsavedBadgeLabel: { textTransform: "uppercase" }, detailsRow: { flexDirection: "row", alignItems: "center" }, spinner: { marginTop: 12 } };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, height: 40, width: 40 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
let closure_17 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_15(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  const tmp = GuildSettingsRoleSubscriptionContainerDefault;
  return closure_15(tmp, obj);
};
