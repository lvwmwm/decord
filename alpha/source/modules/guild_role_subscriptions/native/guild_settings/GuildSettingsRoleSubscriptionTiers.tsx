// Module ID: 19826
// Function ID: 19827
// Name: GuildSettingsRoleSubscriptionTiers
// Dependencies: [32, 19, 17, 9043, 4879, 4930, 17071, 1084, 21, 5005, 587, 5247, 19827, 2000, 1125, 7399, 17097, 558, 576, 5271, 573, 17093, 5707, 6963, 11096, 1631, 1503, 17079, 19818, 15636, 17078, 12, 6984, 19829, 19830, 38, 11249, 7047, 19825, 2]

// Module 19826 (GuildSettingsRoleSubscriptionTiers)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import FastImageDefault from "FastImage" /* 5707 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17093 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 19825 */;
import GuildRoleSettingsActionCreatorsAll from "GuildRoleSettingsActionCreators" /* 19829 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 19830 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9043 */;
import GuildStore from "GuildStore" /* 4879 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4930 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function DraftBadge() {
  let draftBadge;
  let draftBadgeLabel;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_17();
  ({ draftBadge, draftBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t.vosPk5);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.draftBadgeLabel) {
    const obj2 = { style: draftBadgeLabel, variant: "text-xs/semibold", children: first };
    const tmp9 = closure_15(Text_Text.Text, obj2);
    cResult[1] = tmp4.draftBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.draftBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_15(metroImportDefault, { style: draftBadge, children: tmp7 });
  cResult[3] = tmp4.draftBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function DraftBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_17();
  const obj = { style: tmp.draftBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: intl.string(intl4.t.vosPk5) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ArchivedBadge() {
  let archiveBadge;
  let archiveBadgeLabel;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_17();
  ({ archiveBadge, archiveBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t.nhbtEl);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.archiveBadgeLabel) {
    const obj2 = { style: archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: first };
    const tmp9 = closure_15(Text_Text.Text, obj2);
    cResult[1] = tmp4.archiveBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.archiveBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_15(metroImportDefault, { style: archiveBadge, children: tmp7 });
  cResult[3] = tmp4.archiveBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function ArchivedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_17();
  const obj = { style: tmp.archiveBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.nhbtEl) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnsavedBadge() {
  let first;
  let tmp7;
  let unsavedBadge;
  let unsavedBadgeLabel;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_17();
  ({ unsavedBadge, unsavedBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t.aiwXeq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.unsavedBadgeLabel) {
    const obj2 = { style: unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: first };
    const tmp9 = closure_15(Text_Text.Text, obj2);
    cResult[1] = tmp4.unsavedBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.unsavedBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_15(metroImportDefault, { style: unsavedBadge, children: tmp7 });
  cResult[3] = tmp4.unsavedBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function UnsavedBadge() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_17();
  const obj = { style: tmp.unsavedBadge, children: closure_15(Text, obj2) };
  obj2 = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.aiwXeq) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_15(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditListingButton(editStateId) {
  let first;
  let items1;
  let obj7;
  let tmp7;
  let tmpResult4;
  let tmpResult5;
  let obj = editStateId(576);
  const cResult = obj.c(37);
  editStateId = editStateId.editStateId;
  const guildId = editStateId.guildId;
  const groupListingId = editStateId.groupListingId;
  const onPress = editStateId.onPress;
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleSubscriptionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== editStateId) {
    const fn = function s() {
      return GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId);
    };
    cResult[1] = editStateId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = editStateId(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
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
  let tmp9 = !flag2 && !flag && undefined !== stateFromStores;
  const obj3 = groupListingId(17093);
  const first1 = _slicedToArray(obj3.useName(editStateId), 1)[0];
  const obj4 = groupListingId(17093);
  const first2 = _slicedToArray(obj4.usePriceTier(editStateId), 1)[0];
  const obj5 = groupListingId(17093);
  const first3 = _slicedToArray(obj5.useImage(editStateId, 250), 1)[0];
  let first4;
  if (stateFromStores != null) {
    first4 = stateFromStores.subscription_plans[0];
  }
  if (cResult[3] === first2) {
    let tmp14;
    let tmp16;
    let tmp20;
    let tmp25;
    if (cResult[4] === first4) {
      tmp14 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const tmp17 = tmp9 && closure_15(closure_18, {});
      cResult[6] = tmp9;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== flag2) {
      const tmp21 = flag2 && closure_15(closure_19, {});
      cResult[8] = flag2;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] !== (undefined === stateFromStores)) {
      const tmp26 = tmp24 && closure_15(closure_20, {});
      cResult[10] = undefined === stateFromStores;
      cResult[11] = tmp26;
      tmp25 = tmp26;
    } else {
      tmp25 = cResult[11];
    }
    if (!tmp9) {
      tmp9 = flag2;
    }
    if (!tmp9) {
      tmp9 = tmp24;
    }
    if (cResult[12] === tmp4.tierPrice) {
      let tmp30;
      if (cResult[13] === (!tmp9 && tmp4.tierPriceWithoutBadge)) {
        tmp30 = cResult[14];
      }
      if (cResult[15] === tmp14) {
        let tmp31;
        if (cResult[16] === tmp30) {
          tmp31 = cResult[17];
        }
        if (cResult[18] === tmp4.detailsRow) {
          if (cResult[19] === tmp16) {
            if (cResult[20] === tmp20) {
              if (cResult[21] === tmp25) {
                let tmp34;
                let tmp40;
                if (cResult[22] === tmp31) {
                  tmp34 = cResult[23];
                }
                if (cResult[24] === first3) {
                  let tmp38;
                  if (cResult[25] === tmp4.tierIcon) {
                    tmp38 = cResult[26];
                  }
                  if (cResult[27] === editStateId) {
                    if (cResult[28] === groupListingId) {
                      let tmp43;
                      if (cResult[29] === guildId) {
                        tmp43 = cResult[30];
                      }
                      if (cResult[31] === first1) {
                        if (cResult[32] === onPress) {
                          if (cResult[33] === tmp34) {
                            if (cResult[34] === tmp38) {
                              let tmp44;
                              if (cResult[35] === tmp43) {
                                tmp44 = cResult[36];
                              }
                              return tmp44;
                            }
                          }
                        }
                      }
                      let obj2 = { label: first1, subLabel: tmp34, icon: tmp38, arrow: true, onPress, onLongPress: tmp43 };
                      const tmp46 = closure_15(editStateId(6963).TableRow, obj2);
                      cResult[31] = first1;
                      cResult[32] = onPress;
                      cResult[33] = tmp34;
                      cResult[34] = tmp38;
                      cResult[35] = tmp43;
                      cResult[36] = tmp46;
                      tmp44 = tmp46;
                    }
                  }
                  const fn2 = function q() {
                    const obj = ActionSheetActionCreatorsDefault;
                    const obj2 = { editStateId, guildId, groupListingId };
                    obj.openLazy(asyncRequire(19827, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                  };
                  cResult[27] = editStateId;
                  cResult[28] = groupListingId;
                  cResult[29] = guildId;
                  cResult[30] = fn2;
                  tmp43 = fn2;
                }
                if (null != first3) {
                  const obj6 = { style: tmp4.tierIcon, resizeMode: "cover", source: obj7 };
                  obj7 = { uri: first3 };
                  tmp40 = closure_15(guildId(5707), obj6);
                } else {
                  const obj8 = { IconComponent: editStateId(11096).TagsIcon };
                  const Icon = tmp(6963).TableRow.Icon;
                  tmp40 = closure_15(Icon, obj8);
                }
                cResult[24] = first3;
                cResult[25] = tmp4.tierIcon;
                cResult[26] = tmp40;
                tmp38 = tmp40;
              }
            }
          }
        }
        const obj9 = { style: tmp4.detailsRow, children: items1 };
        items1 = [tmp16, tmp20, tmp25, tmp31];
        const tmp37 = closure_16(closure_7, obj9);
        cResult[18] = tmp4.detailsRow;
        cResult[19] = tmp16;
        cResult[20] = tmp20;
        cResult[21] = tmp25;
        cResult[22] = tmp31;
        cResult[23] = tmp37;
        tmp34 = tmp37;
      }
      const obj10 = { style: tmp30, variant: "text-sm/medium", color: "interactive-text-default", children: tmp14 };
      const tmp33 = closure_15(editStateId(5271).Text, obj10);
      cResult[15] = tmp14;
      cResult[16] = tmp30;
      cResult[17] = tmp33;
      tmp31 = tmp33;
    }
    const items2 = [tmp4.tierPrice, !tmp9 && tmp4.tierPriceWithoutBadge];
    cResult[12] = tmp4.tierPrice;
    cResult[13] = !tmp9 && tmp4.tierPriceWithoutBadge;
    cResult[14] = items2;
    tmp30 = items2;
  }
  let str = "";
  if (undefined !== first2) {
    let formatToPlainStringResult;
    if (null != first4) {
      const intl = tmp(1125).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj11 = { price: tmpResult4.formatPrice(first2, first4.currency), interval: tmpResult5.formatPlanInterval(first4) };
      const CgmBaG = tmp(1125).t.CgmBaG;
      tmpResult4 = editStateId(7399);
      tmpResult5 = editStateId(17097);
      formatToPlainStringResult = formatToPlainString(CgmBaG, obj11);
    } else {
      const tmpResult6 = editStateId(17097);
      formatToPlainStringResult = tmpResult6.formatMonthlyPriceLabel(first2);
    }
    str = formatToPlainStringResult;
  }
  cResult[3] = first2;
  cResult[4] = first4;
  cResult[5] = str;
  tmp14 = str;
}) : (function EditListingButton(editStateId) {
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
  let obj = editStateId(573);
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
      const intl = tmp2(1125).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj5 = { price: tmp2Result.formatPrice(first1, first3.currency), interval: tmp2Result3.formatPlanInterval(first3) };
      const CgmBaG = tmp2(1125).t.CgmBaG;
      tmp2Result = editStateId(7399);
      tmp2Result3 = editStateId(17097);
      formatToPlainStringResult = formatToPlainString(CgmBaG, obj5);
    } else {
      const tmp2Result4 = editStateId(17097);
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
      obj.openLazy(asyncRequire(19827, dependencyMap.paths), "TierArchiveOrDelete", obj2);
    }
  };
  let tmp11Result = tmp5;
  obj7 = { style: tmp.detailsRow, children: items1 };
  const TableRow = tmp2(6963).TableRow;
  tmp12 = closure_16;
  tmp13 = closure_7;
  if (tmp5) {
    tmp11Result = tmp11(closure_18, {});
  }
  items1 = [tmp11Result, , , ];
  items1[1] = flag2 && tmp11(closure_19, {});
  const tmp11Result4 = flag2 && tmp11(closure_19, {});
  items1[2] = tmp18 && tmp11(closure_20, {});
  const items2 = [tmp.tierPrice, ];
  const tmp11Result5 = tmp18 && tmp11(closure_20, {});
  const Text = tmp2(5271).Text;
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
    const obj10 = { IconComponent: editStateId(11096).TagsIcon };
    const Icon = tmp2(6963).TableRow.Icon;
    tmp11Result6 = tmp11(Icon, obj10);
  }
  return closure_15(TableRow, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  let first;
  let first2;
  let props;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp = guildId;
  let obj = guildId(first[18]);
  const cResult = obj.c(58);
  guildId = guildId.guildId;
  let tmp4 = closure_17();
  const bottom = navigation(first[25])().bottom;
  let obj2 = guildId(first[26]);
  navigation = obj2.useNavigation();
  const obj3 = guildId(first[27]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  const obj4 = guildId(first[28]);
  const roleSubscriptionSettingsDisabled = obj4.useRoleSubscriptionSettingsDisabled();
  const obj5 = guildId(first[29]);
  const guildEligibleForTierTemplates = obj5.useGuildEligibleForTierTemplates(guildId);
  const obj6 = guildId(first[30]);
  const groupListingsForGuild = obj6.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  if (cResult[0] !== groupListingsForGuild) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function h(id) {
        return id.id;
      };
      cResult[2] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[2];
    }
    const mapped = groupListingsForGuild.map(tmp12);
    cResult[0] = groupListingsForGuild;
    cResult[1] = mapped;
    tmp10 = mapped;
  } else {
    tmp10 = cResult[1];
  }
  const first1 = tmp10[0];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { includeSoftDeleted: true };
    cResult[3] = obj7;
    tmp15 = obj7;
  } else {
    tmp15 = cResult[3];
  }
  const obj8 = guildEligibleForTierTemplates(first[21]);
  const editStateIds = obj8.useEditStateIds(first1, guildId, tmp15).editStateIds;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = {};
    cResult[4] = obj9;
    tmp16 = obj9;
  } else {
    tmp16 = cResult[4];
  }
  const tmp17 = first1(first2.useState(tmp16), 2);
  const obj10 = first2;
  first2 = tmp17[0];
  let closure_6 = tmp17[1];
  if (cResult[5] === editStateIds) {
    let tmp23;
    let tmp24;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      function handleListingCreated(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        closure_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_1] = closure_0;
          return obj;
        });
      }
      cResult[10] = handleListingCreated;
      tmp23 = handleListingCreated;
    } else {
      tmp23 = cResult[10];
    }
    let closure_7 = tmp23;
    if (cResult[11] !== navigation) {
      class K {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[32]).NavigatorHeader;
              intl = guildId(first[14]).intl;
              intl2 = guildId(first[14]).intl;
              return closure_1_15(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
      cResult[11] = navigation;
      cResult[12] = K;
      tmp24 = K;
    } else {
      class K {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[32]).NavigatorHeader;
              intl = guildId(first[14]).intl;
              intl2 = guildId(first[14]).intl;
              return closure_1_15(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    const layoutEffect = obj10.useLayoutEffect(tmp24);
    const tmp26 = cResult[13];
    if (first != null) {
      class K {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[32]).NavigatorHeader;
              intl = guildId(first[14]).intl;
              intl2 = guildId(first[14]).intl;
              return closure_1_15(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    if (tmp26 === undefined) {
      class K {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[32]).NavigatorHeader;
              intl = guildId(first[14]).intl;
              intl2 = guildId(first[14]).intl;
              return closure_1_15(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    if (first != null) {
      class K {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[32]).NavigatorHeader;
              intl = guildId(first[14]).intl;
              intl2 = guildId(first[14]).intl;
              return closure_1_15(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    const fn2 = function j() {
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
    };
    cResult[13] = undefined;
    cResult[14] = guildId;
    cResult[15] = guildEligibleForTierTemplates;
    cResult[16] = navigation;
    cResult[17] = fn2;
  }
  if (cResult[8] !== first2) {
    class K {
      constructor() {
        let obj = {
          headerTitle() {
            let intl;
            let intl2;
            const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
            const NavigatorHeader = guildId(first[32]).NavigatorHeader;
            intl = guildId(first[14]).intl;
            intl2 = guildId(first[14]).intl;
            return closure_1_15(NavigatorHeader, obj);
          }
        };
        navigation.setOptions(obj);
      }
    }
    cResult[8] = first2;
    cResult[9] = X;
    tmp20 = X;
  } else {
    class K {
      constructor() {
        let obj = {
          headerTitle() {
            let intl;
            let intl2;
            const obj = { title: intl.string(guildId(first[14]).t.pXbGYc), subtitle: intl2.string(guildId(first[14]).t["KzCF/6"]) };
            const NavigatorHeader = guildId(first[32]).NavigatorHeader;
            intl = guildId(first[14]).intl;
            intl2 = guildId(first[14]).intl;
            return closure_1_15(NavigatorHeader, obj);
          }
        };
        navigation.setOptions(obj);
      }
    }
  }
  const mapped1 = editStateIds.map(tmp20);
  const tmpResult = tmp(tmp2[31]);
  cResult[5] = editStateIds;
  cResult[6] = first2;
  cResult[7] = tmpResult.uniq(mapped1);
  tmpResult.uniq(mapped1);
}) : (function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
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
  const bottom = navigation(first[25])().bottom;
  let obj = guildId(first[26]);
  const tmp2 = navigation;
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
        const NavigatorHeader = guildId(first[32]).NavigatorHeader;
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
  const tmp4Result = tmp4(first[20]);
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
        return closure_1_15(closure_1_21, obj, editStateId);
      });
    }
    const obj8 = { style: tmp.container, children: closure_15(closure_7, obj9) };
    obj9 = { style: items4, children: closure_16(TableRowGroup, obj11) };
    items4 = [tmp.content, ];
    const obj10 = { paddingBottom: bottom };
    items4[1] = obj10;
    obj11 = { title: intl.string(tmp4(first[14]).t["7iBIoO"]), description: intl2.format(tmp4(first[14]).t.nHRSvM, obj12), hasIcons: true, children: items5 };
    TableRowGroup = tmp4(tmp3[37]).TableRowGroup;
    intl = tmp4(tmp3[14]).intl;
    intl2 = tmp4(tmp3[14]).intl;
    items5 = [mapped, ];
    obj12 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    const obj13 = { label: intl3.string(tmp4(first[14]).t.PiFnny), icon: closure_15(CirclePlusIcon, obj14), onPress, disabled: roleSubscriptionSettingsDisabled };
    const TableRow = tmp4(tmp3[23]).TableRow;
    intl3 = tmp4(tmp3[14]).intl;
    obj14 = { size: "md", color: tmp2(first[10]).colors.ICON_BRAND };
    CirclePlusIcon = tmp4(tmp3[36]).CirclePlusIcon;
    items5[1] = closure_15(TableRow, obj13);
    return closure_15(onPress, obj8);
  } else {
    const obj15 = { style: tmp.spinner, children: closure_15(first2, {}) };
    return closure_15(closure_7, obj15);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsTiers(guildId) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const obj2 = { guildId };
    const tmp6 = closure_15(closure_22, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildId) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = closure_15(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
  cResult[2] = guildId;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_15(closure_22, { guildId }) };
  const tmp = GuildSettingsRoleSubscriptionContainerDefault;
  return closure_15(tmp, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default tmp6;
