// Module ID: 19834
// Function ID: 19835
// Name: GuildRoleSubscriptionTierBenefitsModal
// Dependencies: [32, 19, 17, 17094, 19822, 17071, 21, 5005, 587, 558, 576, 11249, 6963, 1125, 1415, 5707, 19835, 17098, 38, 19818, 7355, 19836, 19837, 7047, 19839, 17078, 19814, 17093, 19840, 19841, 19849, 19850, 17097, 19824, 2]

// Module 19834 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import FastImageDefault from "FastImage" /* 5707 */;
import TableRow2 from "TableRow" /* 6963 */;
import TableRowGroup2 from "TableRowGroup" /* 7047 */;
import CirclePlusIcon2 from "CirclePlusIcon" /* 11249 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17093 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 17094 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 19814 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19822 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19824 */;
import EmojiAliasDefault from "EmojiAlias" /* 19835 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 19840 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 19841 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, constants, dependencyMap, importAll, importDefault;

let c10;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp10;
let unpackModuleId;
const AllChannelsSwitchDefault = tmp10(19850);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ SectionList: metroRequire, View: metroImportDefault } = react_native);
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
let useGroupIsFullGateState = RoleTierEditStore.useGroupIsFullGateState;
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = GuildRoleSubscriptionsConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listContainer: obj2, sectionTitle: obj3, listFooterContainer: { marginVertical: 24 }, allChannelsSwitch: { marginTop: 24 }, emojiImage: { width: 24, height: 24 }, addBenefitRowAfterBenefits: obj4 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
const constants3 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddBenefitRow(hasBenefits) {
  let addBenefitRowAfterBenefits;
  let first;
  let label;
  let onPress;
  const obj = react2;
  const cResult = obj.c(8);
  ({ label, onPress, disabled } = hasBenefits);
  let tmp4 = undefined !== disabled;
  hasBenefits = hasBenefits.hasBenefits;
  if (tmp4) {
    tmp4 = disabled;
  }
  if (hasBenefits) {
    addBenefitRowAfterBenefits = closure_14().addBenefitRowAfterBenefits;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "md", color: nativeDefault.colors.ICON_BRAND };
    const CirclePlusIcon = tmp(11249).CirclePlusIcon;
    const tmp8 = authStore2(CirclePlusIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4) {
    if (cResult[2] === label) {
      let tmp9;
      if (cResult[3] === onPress) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === addBenefitRowAfterBenefits) {
        let tmp11;
        if (cResult[6] === tmp9) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
      const obj3 = { style: addBenefitRowAfterBenefits, children: tmp9 };
      const tmp14 = authStore2(metroImportDefault, obj3);
      cResult[5] = addBenefitRowAfterBenefits;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    }
  }
  const tmp10 = authStore2(TableRow2.TableRow, { start: true, end: true, icon: first, label, onPress, disabled: tmp4 });
  cResult[1] = tmp4;
  cResult[2] = label;
  cResult[3] = onPress;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function AddBenefitRow(disabled) {
  let CirclePlusIcon;
  let TableRow;
  let label;
  let obj2;
  let obj3;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let prop;
  const tmp2 = metroImportDefault;
  if (disabled.hasBenefits) {
    prop = closure_14().addBenefitRowAfterBenefits;
  }
  const obj = { style: prop, children: authStore2(TableRow, obj2) };
  obj2 = { start: true, end: true, icon: authStore2(CirclePlusIcon, obj3), label, onPress, disabled: flag };
  TableRow = TableRow2.TableRow;
  obj3 = { size: "md", color: nativeDefault.colors.ICON_BRAND };
  CirclePlusIcon = CirclePlusIcon2.CirclePlusIcon;
  return authStore2(tmp2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiBenefitRow(arg0) {
  let emoji;
  let end;
  let start;
  const obj = react2;
  const cResult = obj.c(16);
  ({ emoji, start, end, disabled } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === emoji.animated) {
    let tmp6;
    let tmp8;
    if (cResult[1] === emoji.id) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj3 = { uri: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.emojiImage) {
      let tmp9;
      let tmp13;
      if (cResult[6] === tmp8) {
        tmp9 = cResult[7];
      }
      if (cResult[8] !== emoji.name) {
        const obj4 = { children: emoji.name };
        const tmp16 = authStore2(EmojiAliasDefault, obj4);
        cResult[8] = emoji.name;
        cResult[9] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === disabled) {
        if (cResult[11] === end) {
          if (cResult[12] === start) {
            if (cResult[13] === tmp9) {
              let tmp17;
              if (cResult[14] === tmp13) {
                tmp17 = cResult[15];
              }
              return tmp17;
            }
          }
        }
      }
      const obj5 = { start, end, icon: tmp9, label: tmp13, disabled };
      const tmp19 = authStore2(TableRow2.TableRow, obj5);
      cResult[10] = disabled;
      cResult[11] = end;
      cResult[12] = start;
      cResult[13] = tmp9;
      cResult[14] = tmp13;
      cResult[15] = tmp19;
      tmp17 = tmp19;
    }
    const obj6 = { style: tmp5, source: tmp8 };
    const tmp12 = authStore2(FastImageDefault, obj6);
    cResult[5] = tmp4.emojiImage;
    cResult[6] = tmp8;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  const obj2 = AvatarUtilsDefault;
  const obj7 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const emojiURL = obj2.getEmojiURL(obj7);
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp6 = emojiURL;
}) : (function EmojiBenefitRow(emoji) {
  let end;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let start;
  let tmp2;
  emoji = emoji.emoji;
  ({ start, end, disabled } = emoji);
  const obj = { start, end, icon: authStore2(tmp2, obj2), label: authStore2(EmojiAliasDefault, obj6), disabled };
  const tmp = closure_14();
  const TableRow = TableRow2.TableRow;
  obj2 = { style: tmp.emojiImage, source: obj3 };
  obj3 = { uri: obj4.getEmojiURL(obj5) };
  tmp2 = FastImageDefault;
  obj4 = AvatarUtilsDefault;
  obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  obj6 = { children: emoji.name };
  return authStore2(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListFooterSection(onChangeTrialInterval) {
  let items;
  let onChangeTrialActiveUserLimit;
  let options;
  let trialActiveUserLimit;
  const obj = onChangeTrialInterval(576);
  const cResult = obj.c(26);
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const interval = onChangeTrialInterval.interval;
  const tmp4 = closure_14();
  const tmp6 = options(17098)(interval);
  options = tmp6.options;
  const selectedOption = tmp6.selectedOption;
  if (cResult[0] === onChangeTrialInterval) {
    let tmp7;
    let tmp13;
    let tmp15;
    let tmp17;
    if (cResult[1] === options) {
      tmp7 = cResult[2];
    }
    const tmpResult = onChangeTrialInterval(19818);
    const roleSubscriptionSettingsDisabled = tmpResult.useRoleSubscriptionSettingsDisabled();
    let tmp11 = !tmp9;
    if (null != selectedOption) {
      tmp11 = roleSubscriptionSettingsDisabled;
    }
    const _Symbol = Symbol;
    const listFooterContainer = tmp4.listFooterContainer;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(onChangeTrialInterval(1125).t["6anton"]);
      cResult[3] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(onChangeTrialInterval(1125).t.urVijS);
      cResult[4] = stringResult1;
      tmp15 = stringResult1;
    } else {
      tmp15 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1125).intl;
      const stringResult2 = intl3.string(onChangeTrialInterval(1125).t["+hTmdb"]);
      cResult[5] = stringResult2;
      tmp17 = stringResult2;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] === tmp7) {
      if (cResult[7] === null != selectedOption) {
        let tmp19;
        if (cResult[8] === roleSubscriptionSettingsDisabled) {
          tmp19 = cResult[9];
        }
        if (cResult[10] === onChangeTrialInterval) {
          if (cResult[11] === selectedOption) {
            if (cResult[12] === options) {
              let tmp22;
              if (cResult[13] === tmp11) {
                tmp22 = cResult[14];
              }
              if (cResult[15] === onChangeTrialActiveUserLimit) {
                if (cResult[16] === trialActiveUserLimit) {
                  let tmp25;
                  if (cResult[17] === tmp11) {
                    tmp25 = cResult[18];
                  }
                  if (cResult[19] === tmp19) {
                    if (cResult[20] === tmp22) {
                      let tmp28;
                      if (cResult[21] === tmp25) {
                        tmp28 = cResult[22];
                      }
                      if (cResult[23] === tmp4.listFooterContainer) {
                        let tmp31;
                        if (cResult[24] === tmp28) {
                          tmp31 = cResult[25];
                        }
                        return tmp31;
                      }
                      const obj2 = { style: listFooterContainer, children: tmp28 };
                      const tmp34 = closure_12(closure_7, obj2);
                      cResult[23] = tmp4.listFooterContainer;
                      cResult[24] = tmp28;
                      cResult[25] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                  const obj3 = { title: tmp13, hasIcons: false, helperText: tmp15, children: items };
                  items = [tmp19, tmp22, tmp25];
                  const tmp30 = closure_13(onChangeTrialInterval(7047).TableRowGroup, obj3);
                  cResult[19] = tmp19;
                  cResult[20] = tmp22;
                  cResult[21] = tmp25;
                  cResult[22] = tmp30;
                  tmp28 = tmp30;
                }
              }
              const obj4 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp11 };
              const tmp27 = closure_12(options(19837), obj4);
              cResult[15] = onChangeTrialActiveUserLimit;
              cResult[16] = trialActiveUserLimit;
              cResult[17] = tmp11;
              cResult[18] = tmp27;
              tmp25 = tmp27;
            }
          }
        }
        const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp11 };
        const tmp24 = closure_12(options(19836), obj5);
        cResult[10] = onChangeTrialInterval;
        cResult[11] = selectedOption;
        cResult[12] = options;
        cResult[13] = tmp11;
        cResult[14] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj6 = { label: tmp17, value: null != selectedOption, onValueChange: tmp7, disabled: roleSubscriptionSettingsDisabled };
    const tmp21 = closure_12(onChangeTrialInterval(7355).TableSwitchRow, obj6);
    cResult[6] = tmp7;
    cResult[7] = null != selectedOption;
    cResult[8] = roleSubscriptionSettingsDisabled;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  const fn = function n(arg0) {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    const tmp3 = onChangeTrialInterval;
    if (arg0) {
      value = iter.value;
    }
    tmp3(value);
  };
  cResult[0] = onChangeTrialInterval;
  cResult[1] = options;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function ListFooterSection(onChangeTrialInterval) {
  let TableRowGroup;
  let interval;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj3;
  let onChangeTrialActiveUserLimit;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  let tmp3 = dependencyMap;
  const tmp = closure_14();
  const tmp4 = options(17098)(interval);
  options = tmp4.options;
  const selectedOption = tmp4.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = react.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    const tmp3 = onChangeTrialInterval;
    if (arg0) {
      value = iter.value;
    }
    tmp3(value);
  }, items);
  const obj = onChangeTrialInterval(19818);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let tmp9 = !tmp6;
  if (null != selectedOption) {
    tmp9 = roleSubscriptionSettingsDisabled;
  }
  const obj2 = { style: tmp.listFooterContainer, children: closure_13(TableRowGroup, obj3) };
  obj3 = { title: intl.string(onChangeTrialInterval(1125).t["6anton"]), hasIcons: false, helperText: intl2.string(onChangeTrialInterval(1125).t.urVijS), children: items1 };
  TableRowGroup = tmp7(7047).TableRowGroup;
  intl = tmp7(1125).intl;
  intl2 = tmp7(1125).intl;
  const obj4 = { label: intl3.string(onChangeTrialInterval(1125).t["+hTmdb"]), value: null != selectedOption, onValueChange: callback, disabled: roleSubscriptionSettingsDisabled };
  const TableSwitchRow = tmp7(7355).TableSwitchRow;
  intl3 = tmp7(1125).intl;
  items1 = [closure_12(TableSwitchRow, obj4), closure_12(tmp2(19836), { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp9 }), closure_12(tmp2(19837), { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp9 })];
  return closure_12(closure_7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content(arg0) {
  let closure_4;
  let closure_5;
  let onSave2;
  let onlyChannels;
  let onlyIntangible;
  let roleSubscriptionSettingsDisabled;
  let role_id;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp = _require;
  let tmp2 = role_id;
  let obj = require("react");
  const cResult = obj.c(69);
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp4 = closure_14();
  _require = tmp4;
  const tmpResult = tmp(tmp2[24]);
  const editStateContext = tmpResult.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  const guildId = editStateContext.guildId;
  const tmpResult3 = tmp(tmp2[25]);
  const subscriptionListing = tmpResult3.useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let isFullServerGating = editStateId(tmp2[26])(guildId).isFullServerGating;
  let tmp14 = !tmp5;
  const tmp12 = editStateId;
  if (tmp14) {
    if (!isFullServerGating) {
      isFullServerGating = _slicedToArray(useGroupIsFullGateState(), 1)[0];
    }
    tmp14 = isFullServerGating;
  }
  let obj4 = guildId(tmp2[27]);
  [tmp16, tmp17] = _slicedToArray(obj4.useChannelBenefits(editStateId), 2);
  _slicedToArray = tmp17;
  _slicedToArray(obj4.useChannelBenefits(editStateId), 2);
  const obj5 = guildId(tmp2[27]);
  [tmp19, tmp20] = _slicedToArray(obj5.useIntangibleBenefits(editStateId), 2);
  react = tmp20;
  _slicedToArray(obj5.useIntangibleBenefits(editStateId), 2);
  const obj6 = guildId(tmp2[27]);
  const tmp13Result7 = _slicedToArray(obj6.useTierEmojiIds(editStateId, guildId), 2);
  const initialTierEmojiIds = tmp13Result7[0];
  const onSave = tmp23;
  const obj7 = guildId(tmp2[27]);
  [tmp25, tmp26] = _slicedToArray(obj7.useTrialInterval(editStateId), 2);
  _slicedToArray(obj7.useTrialInterval(editStateId), 2);
  const obj8 = guildId(tmp2[27]);
  [tmp28, tmp29] = _slicedToArray(obj8.useTrialLimit(editStateId), 2);
  _slicedToArray(obj8.useTrialLimit(editStateId), 2);
  const obj9 = guildId(tmp2[27]);
  [tmp31, tmp32] = _slicedToArray(obj9.useChannelAccessFormat(editStateId, guildId), 2);
  const ALL_CHANNELS_ACCESS = roleSubscriptionSettingsDisabled.ALL_CHANNELS_ACCESS;
  _slicedToArray(obj9.useChannelAccessFormat(editStateId, guildId), 2);
  const tmpResult4 = tmp(tmp2[19]);
  roleSubscriptionSettingsDisabled = tmpResult4.useRoleSubscriptionSettingsDisabled();
  if (cResult[0] === tmp17) {
    let tmp34;
    if (cResult[1] === tmp20) {
      tmp34 = cResult[2];
    }
    useGroupIsFullGateState = tmp34;
    if (cResult[3] === tmp17) {
      let tmp35;
      if (cResult[4] === tmp20) {
        tmp35 = cResult[5];
      }
      constants = tmp35;
      if (cResult[6] === tmp17) {
        let tmp37;
        let tmp40;
        if (cResult[7] === tmp20) {
          tmp37 = cResult[8];
        }
        let closure_11 = tmp37;
        const arr = tmp12(tmp2[28])(guildId);
        if (cResult[9] === arr) {
          let tmp39;
          if (cResult[10] === initialTierEmojiIds) {
            tmp39 = cResult[11];
          }
          if (cResult[14] === tmp31 === ALL_CHANNELS_ACCESS) {
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp39) {
                if (cResult[17] === true === onlyIntangible) {
                  if (cResult[18] === (true === onlyIntangible || true === onlyChannels)) {
                    if (cResult[19] === true === onlyChannels) {
                      let tmp43;
                      if (cResult[20] === tmp19) {
                        tmp43 = cResult[21];
                      }
                      if (cResult[28] === tmp34) {
                        if (cResult[29] === editStateId) {
                          if (cResult[30] === guildId) {
                            if (cResult[31] === tmp13Result7[1]) {
                              if (cResult[32] === role_id) {
                                let tmp53;
                                if (cResult[33] === initialTierEmojiIds) {
                                  tmp53 = cResult[34];
                                }
                                let closure_12 = tmp53;
                                if (cResult[35] === tmp35) {
                                  if (cResult[36] === editStateId) {
                                    if (cResult[37] === guildId) {
                                      let tmp54;
                                      if (cResult[38] === tmp37) {
                                        tmp54 = cResult[39];
                                      }
                                      let closure_13 = tmp54;
                                      if (cResult[40] === guildId) {
                                        if (cResult[41] === tmp54) {
                                          let tmp56;
                                          let tmp57;
                                          if (cResult[42] === roleSubscriptionSettingsDisabled) {
                                            tmp56 = cResult[43];
                                          }
                                          if (cResult[44] !== tmp4.sectionTitle) {
                                            function renderSectionHeader(section) {
                                              let stringResult;
                                              const type = section.section.type;
                                              const obj = { style: closure_0.sectionTitle, title: stringResult };
                                              const TableRowGroupTitle = TableRowGroup2.TableRowGroupTitle;
                                              const tmp = authStore2;
                                              if (constants.CHANNEL === type) {
                                                const intl2 = tmp2(1125).intl;
                                                stringResult = intl2.string(tmp2(1125).t.LtfhAj);
                                              } else if (constants.INTANGIBLE === type) {
                                                const intl = tmp2(1125).intl;
                                                stringResult = intl.string(tmp2(1125).t["8oxWpO"]);
                                              } else if (constants.EMOJI === type) {
                                                const intl3 = tmp2(1125).intl;
                                                stringResult = intl3.string(tmp2(1125).t.XBkDoA);
                                              }
                                              return tmp(TableRowGroupTitle, obj);
                                            }
                                            cResult[44] = tmp4.sectionTitle;
                                            class Ae {
                                              constructor(item) {
                                                let tmp3Result;
                                                item = item.item;
                                                const index = item.index;
                                                const tmp2 = index === item.section.data.length - 1;
                                                if ("roles" in item) {
                                                  const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                                  tmp3Result = tmp3(closure_1_17, obj2);
                                                } else {
                                                  const obj = {
                                                    guildId,
                                                    benefit: item,
                                                    start: 0 === index,
                                                    end: tmp2,
                                                    onPress() {
                                                        return closure_13(item, index);
                                                      },
                                                    disabled: roleSubscriptionSettingsDisabled
                                                  };
                                                  tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                                }
                                                return tmp3Result;
                                              }
                                            }
                                            cResult[45] = renderSectionHeader;
                                            tmp57 = renderSectionHeader;
                                          } else {
                                            tmp57 = cResult[45];
                                          }
                                          if (cResult[46] === tmp53) {
                                            let tmp58;
                                            if (cResult[47] === roleSubscriptionSettingsDisabled) {
                                              tmp58 = cResult[48];
                                            }
                                            if (cResult[49] === (true === onlyIntangible || true === onlyChannels)) {
                                              if (cResult[50] === tmp29) {
                                                if (cResult[51] === tmp26) {
                                                  if (cResult[52] === tmp28) {
                                                    let tmp60;
                                                    if (cResult[53] === tmp25) {
                                                      tmp60 = cResult[54];
                                                    }
                                                    if (cResult[55] === tmp14) {
                                                      if (cResult[56] === tmp31) {
                                                        if (cResult[57] === roleSubscriptionSettingsDisabled) {
                                                          if (cResult[58] === tmp32) {
                                                            let tmp62;
                                                            if (cResult[59] === tmp4.allChannelsSwitch) {
                                                              tmp62 = cResult[60];
                                                            }
                                                            if (cResult[61] === tmp60) {
                                                              if (cResult[62] === tmp58) {
                                                                if (cResult[63] === tmp56) {
                                                                  if (cResult[64] === tmp57) {
                                                                    if (cResult[65] === tmp43) {
                                                                      if (cResult[66] === tmp4.listContainer) {
                                                                        let tmp64;
                                                                        if (cResult[67] === tmp62) {
                                                                          tmp64 = cResult[68];
                                                                        }
                                                                        return tmp64;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            class Ae {
                                                              constructor(item) {
                                                                let tmp3Result;
                                                                item = item.item;
                                                                const index = item.index;
                                                                const tmp2 = index === item.section.data.length - 1;
                                                                if ("roles" in item) {
                                                                  const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                                                  tmp3Result = tmp3(closure_1_17, obj2);
                                                                } else {
                                                                  const obj = {
                                                                    guildId,
                                                                    benefit: item,
                                                                    start: 0 === index,
                                                                    end: tmp2,
                                                                    onPress() {
                                                                        return closure_13(item, index);
                                                                      },
                                                                    disabled: roleSubscriptionSettingsDisabled
                                                                  };
                                                                  tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                                                }
                                                                return tmp3Result;
                                                              }
                                                            }
                                                            let obj2 = { sections: tmp43, contentContainerStyle: tmp4.listContainer, renderItem: tmp56, keyExtractor: tmp(tmp2[32]).getBenefitKey, ListHeaderComponent: tmp62, renderSectionHeader: tmp57, stickySectionHeadersEnabled: false, renderSectionFooter: tmp58, ListFooterComponent: tmp60 };
                                                            const tmp66 = closure_12(initialTierEmojiIds, obj2);
                                                            cResult[61] = tmp60;
                                                            cResult[62] = tmp58;
                                                            cResult[63] = tmp56;
                                                            cResult[64] = tmp57;
                                                            cResult[65] = tmp43;
                                                            cResult[66] = tmp4.listContainer;
                                                            cResult[67] = tmp62;
                                                            cResult[68] = tmp66;
                                                            tmp64 = tmp66;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class Ae {
                                                      constructor(item) {
                                                        let tmp3Result;
                                                        item = item.item;
                                                        const index = item.index;
                                                        const tmp2 = index === item.section.data.length - 1;
                                                        if ("roles" in item) {
                                                          const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                                          tmp3Result = tmp3(closure_1_17, obj2);
                                                        } else {
                                                          const obj = {
                                                            guildId,
                                                            benefit: item,
                                                            start: 0 === index,
                                                            end: tmp2,
                                                            onPress() {
                                                                return closure_13(item, index);
                                                              },
                                                            disabled: roleSubscriptionSettingsDisabled
                                                          };
                                                          tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                                        }
                                                        return tmp3Result;
                                                      }
                                                    }
                                                    cResult[55] = tmp14;
                                                    cResult[56] = tmp31;
                                                    cResult[57] = roleSubscriptionSettingsDisabled;
                                                    cResult[58] = tmp32;
                                                    cResult[59] = tmp4.allChannelsSwitch;
                                                    cResult[60] = null;
                                                    tmp62 = tmp63;
                                                  }
                                                }
                                              }
                                            }
                                            class Ae {
                                              constructor(item) {
                                                let tmp3Result;
                                                item = item.item;
                                                const index = item.index;
                                                const tmp2 = index === item.section.data.length - 1;
                                                if ("roles" in item) {
                                                  const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                                  tmp3Result = tmp3(closure_1_17, obj2);
                                                } else {
                                                  const obj = {
                                                    guildId,
                                                    benefit: item,
                                                    start: 0 === index,
                                                    end: tmp2,
                                                    onPress() {
                                                        return closure_13(item, index);
                                                      },
                                                    disabled: roleSubscriptionSettingsDisabled
                                                  };
                                                  tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                                }
                                                return tmp3Result;
                                              }
                                            }
                                            cResult[49] = true === onlyIntangible || true === onlyChannels;
                                            cResult[50] = tmp29;
                                            cResult[51] = tmp26;
                                            cResult[52] = tmp28;
                                            cResult[53] = tmp25;
                                            cResult[54] = null;
                                            tmp60 = tmp61;
                                          }
                                          class Ae {
                                            constructor(item) {
                                              let tmp3Result;
                                              item = item.item;
                                              const index = item.index;
                                              const tmp2 = index === item.section.data.length - 1;
                                              if ("roles" in item) {
                                                const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                                tmp3Result = tmp3(closure_1_17, obj2);
                                              } else {
                                                const obj = {
                                                  guildId,
                                                  benefit: item,
                                                  start: 0 === index,
                                                  end: tmp2,
                                                  onPress() {
                                                      return closure_13(item, index);
                                                    },
                                                  disabled: roleSubscriptionSettingsDisabled
                                                };
                                                tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                              }
                                              return tmp3Result;
                                            }
                                          }
                                          cResult[46] = tmp53;
                                          cResult[47] = roleSubscriptionSettingsDisabled;
                                          cResult[48] = tmp59;
                                          tmp58 = tmp59;
                                        }
                                      }
                                      class Ae {
                                        constructor(item) {
                                          let tmp3Result;
                                          item = item.item;
                                          const index = item.index;
                                          const tmp2 = index === item.section.data.length - 1;
                                          if ("roles" in item) {
                                            const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                                            tmp3Result = tmp3(closure_1_17, obj2);
                                          } else {
                                            const obj = {
                                              guildId,
                                              benefit: item,
                                              start: 0 === index,
                                              end: tmp2,
                                              onPress() {
                                                  return closure_13(item, index);
                                                },
                                              disabled: roleSubscriptionSettingsDisabled
                                            };
                                            tmp3Result = tmp3(editStateId(role_id[30]), obj);
                                          }
                                          return tmp3Result;
                                        }
                                      }
                                      cResult[40] = guildId;
                                      cResult[41] = tmp54;
                                      cResult[42] = roleSubscriptionSettingsDisabled;
                                      cResult[43] = Ae;
                                      tmp56 = Ae;
                                    }
                                  }
                                }
                                cResult[35] = tmp35;
                                cResult[36] = editStateId;
                                cResult[37] = guildId;
                                cResult[38] = tmp37;
                                cResult[39] = tmp55;
                                tmp54 = tmp55;
                              }
                            }
                          }
                        }
                      }
                      function handleAddBenefit(arg0) {
                        if (arg0 === constants.EMOJI) {
                          const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds, onSave, listingId: editStateId };
                          const obj3 = GuildRoleSubscriptionsModalActionCreatorsAll;
                          obj3.showEditEmojisModal(obj2);
                        } else {
                          let INTANGIBLE;
                          if (arg0 === tmp.CHANNEL) {
                            INTANGIBLE = constants.CHANNEL;
                          } else {
                            INTANGIBLE = constants.INTANGIBLE;
                          }
                          const obj4 = { guildId, type: INTANGIBLE, onSave: onSave2, listingId: editStateId };
                          const obj = GuildRoleSubscriptionsModalActionCreatorsAll;
                          const result = obj.showCreateBenefitModal(obj4);
                        }
                      }
                      cResult[28] = tmp34;
                      cResult[29] = editStateId;
                      cResult[30] = guildId;
                      cResult[31] = tmp13Result7[1];
                      cResult[32] = role_id;
                      cResult[33] = initialTierEmojiIds;
                      cResult[34] = handleAddBenefit;
                      tmp53 = handleAddBenefit;
                    }
                  }
                }
              }
            }
          }
          if (true !== onlyIntangible) {
            if (tmp31 !== ALL_CHANNELS_ACCESS) {
              let tmp44;
              if (cResult[22] !== tmp16) {
                let obj3 = { type: constants3.CHANNEL, data: null };
                class Ae {
                  constructor(item) {
                    let tmp3Result;
                    item = item.item;
                    const index = item.index;
                    const tmp2 = index === item.section.data.length - 1;
                    if ("roles" in item) {
                      const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                      tmp3Result = tmp3(closure_1_17, obj2);
                    } else {
                      const obj = {
                        guildId,
                        benefit: item,
                        start: 0 === index,
                        end: tmp2,
                        onPress() {
                            return closure_13(item, index);
                          },
                        disabled: roleSubscriptionSettingsDisabled
                      };
                      tmp3Result = tmp3(editStateId(role_id[30]), obj);
                    }
                    return tmp3Result;
                  }
                }
                cResult[22] = tmp16;
                cResult[23] = obj3;
                tmp44 = obj3;
              } else {
                tmp44 = cResult[23];
              }
              arr2.push(tmp44);
            }
          }
          if (true !== onlyChannels) {
            let tmp47;
            if (cResult[24] !== tmp19) {
              const obj10 = { type: constants3.INTANGIBLE, data: null };
              class Ae {
                constructor(item) {
                  let tmp3Result;
                  item = item.item;
                  const index = item.index;
                  const tmp2 = index === item.section.data.length - 1;
                  if ("roles" in item) {
                    const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                    tmp3Result = tmp3(closure_1_17, obj2);
                  } else {
                    const obj = {
                      guildId,
                      benefit: item,
                      start: 0 === index,
                      end: tmp2,
                      onPress() {
                          return closure_13(item, index);
                        },
                      disabled: roleSubscriptionSettingsDisabled
                    };
                    tmp3Result = tmp3(editStateId(role_id[30]), obj);
                  }
                  return tmp3Result;
                }
              }
              cResult[24] = tmp19;
              cResult[25] = obj10;
              tmp47 = obj10;
            } else {
              tmp47 = cResult[25];
            }
            arr2.push(tmp47);
          }
          if (!(true === onlyIntangible || true === onlyChannels)) {
            let tmp50;
            if (cResult[26] !== tmp39) {
              const obj11 = { type: constants3.EMOJI, data: null };
              class Ae {
                constructor(item) {
                  let tmp3Result;
                  item = item.item;
                  const index = item.index;
                  const tmp2 = index === item.section.data.length - 1;
                  if ("roles" in item) {
                    const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                    tmp3Result = tmp3(closure_1_17, obj2);
                  } else {
                    const obj = {
                      guildId,
                      benefit: item,
                      start: 0 === index,
                      end: tmp2,
                      onPress() {
                          return closure_13(item, index);
                        },
                      disabled: roleSubscriptionSettingsDisabled
                    };
                    tmp3Result = tmp3(editStateId(role_id[30]), obj);
                  }
                  return tmp3Result;
                }
              }
              cResult[26] = tmp39;
              cResult[27] = obj11;
              tmp50 = obj11;
            } else {
              tmp50 = cResult[27];
            }
            arr2.push(tmp50);
          }
          cResult[14] = tmp31 === ALL_CHANNELS_ACCESS;
          cResult[15] = tmp16;
          cResult[16] = tmp39;
          cResult[17] = true === onlyIntangible;
          cResult[18] = true === onlyIntangible || true === onlyChannels;
          cResult[19] = true === onlyChannels;
          cResult[20] = tmp19;
          cResult[21] = arr2;
          tmp43 = arr2;
        }
        if (cResult[12] !== initialTierEmojiIds) {
          function be(id) {
            return first.has(id.id);
          }
          cResult[12] = initialTierEmojiIds;
          class Ae {
            constructor(item) {
              let tmp3Result;
              item = item.item;
              const index = item.index;
              const tmp2 = index === item.section.data.length - 1;
              if ("roles" in item) {
                const obj2 = { emoji: item, start: 0 === index, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
                tmp3Result = tmp3(closure_1_17, obj2);
              } else {
                const obj = {
                  guildId,
                  benefit: item,
                  start: 0 === index,
                  end: tmp2,
                  onPress() {
                      return closure_13(item, index);
                    },
                  disabled: roleSubscriptionSettingsDisabled
                };
                tmp3Result = tmp3(editStateId(role_id[30]), obj);
              }
              return tmp3Result;
            }
          }
          cResult[13] = be;
          tmp40 = be;
        } else {
          tmp40 = cResult[13];
        }
        const found = arr.filter(tmp40);
        cResult[9] = arr;
        cResult[10] = initialTierEmojiIds;
        cResult[11] = found;
        tmp39 = found;
      }
      cResult[6] = tmp17;
      cResult[7] = tmp20;
      cResult[8] = tmp38;
      tmp37 = tmp38;
    }
    cResult[3] = tmp17;
    cResult[4] = tmp20;
    cResult[5] = tmp36;
    tmp35 = tmp36;
  }
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === constants.CHANNEL) {
      tmp17((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    } else {
      tmp20((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  cResult[0] = tmp17;
  cResult[1] = tmp20;
  cResult[2] = addBenefit;
  tmp34 = addBenefit;
}) : (function Content(arg0) {
  let closure_2;
  let closure_3;
  let closure_8;
  let onlyChannels;
  let onlyIntangible;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp34Result;
  let first1;
  disabled = undefined;
  let first2;
  let closure_10;
  let first3;
  let closure_12;
  let closure_13;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === c10.CHANNEL) {
      closure_8((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    } else {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  let tmp = roleSubscriptionSettingsDisabled();
  _require = tmp;
  let tmp2 = true === onlyIntangible;
  importDefault = tmp2;
  const tmp3 = true === onlyChannels;
  importAll = tmp3;
  const tmp4 = tmp2 || tmp3;
  dependencyMap = tmp4;
  const tmp5 = _require;
  let tmp6 = dependencyMap;
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  const guildId = editStateContext.guildId;
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj2.useSubscriptionListing(editStateId);
  let role_id;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let tmp10 = importDefault;
  const isFullServerGating = useRoleSubscriptionFormatDefault(guildId).isFullServerGating;
  const first = editStateId(first2(), 1)[0];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp12 = editStateId(obj3.useChannelBenefits(editStateId), 2);
  first1 = tmp12[0];
  disabled = tmp12[1];
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp14 = editStateId(obj4.useIntangibleBenefits(editStateId), 2);
  first2 = tmp14[0];
  closure_10 = tmp14[1];
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp16 = editStateId(obj5.useTierEmojiIds(editStateId, guildId), 2);
  first3 = tmp16[0];
  closure_12 = tmp16[1];
  const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp19, tmp20] = editStateId(obj6.useTrialInterval(editStateId), 2);
  editStateId(obj6.useTrialInterval(editStateId), 2);
  const obj7 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp22, tmp23] = editStateId(obj7.useTrialLimit(editStateId), 2);
  editStateId(obj7.useTrialLimit(editStateId), 2);
  const obj8 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp24 = editStateId(obj8.useChannelAccessFormat(editStateId, guildId), 2);
  const first4 = tmp24[0];
  closure_13 = tmp27;
  const tmp26 = tmp24[1];
  const tmp5Result = tmp5(19818);
  roleSubscriptionSettingsDisabled = tmp5Result.useRoleSubscriptionSettingsDisabled();
  const tmp29 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp29;
  let items = [first3, tmp29, tmp2, first4 === disabled.ALL_CHANNELS_ACCESS, tmp3, tmp4, first1, first2];
  let tmp31 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      const obj = { type: addBenefit.CHANNEL, data: first1 };
      items.push(obj);
    }
    const tmp6 = closure_2;
    if (!tmp6) {
      const obj2 = { type: addBenefit.INTANGIBLE, data: first2 };
      items.push(obj2);
    }
    const tmp10 = closure_3;
    if (!tmp10) {
      const obj3 = { type: addBenefit.EMOJI, data: found };
      items.push(obj3);
    }
    return items;
  }, items);
  if (!tmp2) {
    tmp31 = null;
    if (!tmp3) {
      const obj9 = { interval: tmp19, onChangeTrialInterval: tmp20, trialActiveUserLimit: tmp22, onChangeTrialActiveUserLimit: tmp23 };
      tmp31 = closure_12(closure_18, obj9);
    }
  }
  const obj10 = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      let tmp3Result;
      item = item.item;
      const index = item.index;
      const tmp2 = index === item.section.data.length - 1;
      if ("roles" in item) {
        let obj2 = { emoji: item, start: tmp, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
        tmp3Result = tmp3(closure_1_17, obj2);
      } else {
        let obj = {
          guildId,
          benefit: item,
          start: tmp,
          end: tmp2,
          onPress() {
              closure_0 = item;
              closure_1 = index;
              const obj = closure_1_2(closure_1_3[29]);
              const obj2 = {
                guildId,
                benefit: item,
                onDelete() {
                  ref_type = closure_1;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arr) => arr.filter((item, index) => index !== closure_1_0));
                  } else {
                    closure_2_10((arr) => arr.filter((item, index) => index !== closure_1_0));
                  }
                },
                onSave(ref_type) {
                  closure_0 = ref_type;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  } else {
                    closure_2_10((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  }
                },
                listingId: editStateId
              };
              obj.showEditBenefitModal(obj2);
            },
          disabled: roleSubscriptionSettingsDisabled
        };
        tmp3Result = tmp3(closure_1(closure_3[30]), obj);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(17097).getBenefitKey,
    ListHeaderComponent: tmp34Result,
    renderSectionHeader(section) {
      let stringResult;
      const type = section.section.type;
      const obj = { style: closure_0.sectionTitle, title: stringResult };
      const TableRowGroupTitle = TableRowGroup2.TableRowGroupTitle;
      const tmp = authStore2;
      if (addBenefit.CHANNEL === type) {
        const intl2 = tmp2(1125).intl;
        stringResult = intl2.string(tmp2(1125).t.LtfhAj);
      } else if (addBenefit.INTANGIBLE === type) {
        const intl = tmp2(1125).intl;
        stringResult = intl.string(tmp2(1125).t["8oxWpO"]);
      } else if (addBenefit.EMOJI === type) {
        const intl3 = tmp2(1125).intl;
        stringResult = intl3.string(tmp2(1125).t.XBkDoA);
      }
      return tmp(TableRowGroupTitle, obj);
    },
    stickySectionHeadersEnabled: false,
    renderSectionFooter: function renderAddBenefitRow(section) {
      let stringResult;
      section = section.section;
      const type = section.type;
      const data = section.data;
      const tmp = onSave;
      const tmp2 = closure_16;
      if (addBenefit.CHANNEL === type) {
        const intl2 = closure_0(closure_3[13]).intl;
        stringResult = intl2.string(closure_0(closure_3[13]).t.WEg7PK);
      } else if (addBenefit.INTANGIBLE === type) {
        const intl = closure_0(closure_3[13]).intl;
        stringResult = intl.string(closure_0(closure_3[13]).t.VinNZr);
      } else if (addBenefit.EMOJI === type) {
        const intl3 = closure_0(closure_3[13]).intl;
        stringResult = intl3.string(closure_0(closure_3[13]).t["0t1aNC"]);
      }
      let obj = {
        label: stringResult,
        onPress() {
          if (type === constants.EMOJI) {
            const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first3, onSave, listingId: editStateId };
            const obj3 = GuildRoleSubscriptionsModalActionCreatorsAll;
            obj3.showEditEmojisModal(obj2);
          } else {
            let INTANGIBLE;
            if (tmp === tmp2.CHANNEL) {
              INTANGIBLE = constants.CHANNEL;
            } else {
              INTANGIBLE = constants.INTANGIBLE;
            }
            const obj4 = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
            const obj = GuildRoleSubscriptionsModalActionCreatorsAll;
            const result = obj.showCreateBenefitModal(obj4);
          }
        },
        disabled: roleSubscriptionSettingsDisabled,
        hasBenefits: data.length > 0
      };
      return tmp(tmp2, obj);
    },
    ListFooterComponent: tmp31
  };
  tmp34Result = null;
  const tmp35 = role_id;
  if (!tmp2) {
    if (isFullServerGating) {
      const obj11 = { style: tmp.allChannelsSwitch, channelAccessFormat: first4, setChannelAccessFormat: tmp26, disabled: roleSubscriptionSettingsDisabled };
      tmp34Result = tmp34(AllChannelsSwitchDefault, obj11);
    } else {
      tmp34Result = null;
    }
  }
  return closure_12(tmp35, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierBenefitsTab(arg0) {
  let onlyChannels;
  let onlyIntangible;
  const obj = react2;
  const cResult = obj.c(3);
  ({ onlyChannels, onlyIntangible } = arg0);
  if (cResult[0] === onlyChannels) {
    let tmp2;
    if (cResult[1] === onlyIntangible) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = authStore2(closure_19, { onlyChannels, onlyIntangible });
  cResult[0] = onlyChannels;
  cResult[1] = onlyIntangible;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function GuildRoleSubscriptionTierBenefitsTab(onlyChannels) {
  const obj = { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible };
  return authStore2(closure_19, obj);
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t["0eV/GY"]);
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(intl4.t.iMSIWp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = authStore2(closure_20, { onlyChannels: true });
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: tmp8 };
    const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
    const merged = Object.assign(arg0);
    const tmp20 = authStore2(tmp15, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t["0eV/GY"]), description: intl2.string(intl4.t.iMSIWp), canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: authStore2(closure_20, { onlyChannels: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return authStore2(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t["+h9nJG"]);
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(intl4.t.oGS4tC);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = authStore2(closure_20, { onlyIntangible: true });
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: tmp8 };
    const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
    const merged = Object.assign(arg0);
    const tmp20 = authStore2(tmp15, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t["+h9nJG"]), description: intl2.string(intl4.t.oGS4tC), canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: authStore2(closure_20, { onlyIntangible: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return authStore2(tmp, obj);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export const GuildRoleSubscriptionTierBenefitsTab = tmp6;
export const GuildRoleSubscriptionTierChannelBenefitsModal = tmp7;
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = tmp8;
