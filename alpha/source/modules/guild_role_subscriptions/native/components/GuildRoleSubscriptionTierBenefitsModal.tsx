// Module ID: 19956
// Function ID: 19957
// Name: GuildRoleSubscriptionTierBenefitsModal
// Dependencies: [32, 19, 17, 17204, 19942, 17183, 21, 5014, 575, 6975, 11488, 1113, 5717, 1409, 19957, 17208, 38, 19938, 7060, 7369, 19958, 19959, 19953, 17190, 19934, 17203, 19961, 19962, 19970, 17207, 19971, 19945, 2]
// Exports: GuildRoleSubscriptionTierChannelBenefitsModal, GuildRoleSubscriptionTierIntangibleBenefitsModal

// Module 19956 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import CirclePlusIcon2 from "CirclePlusIcon" /* 11488 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 17204 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 19934 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import EmojiAliasDefault from "EmojiAlias" /* 19957 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 19961 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 19962 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, dependencyMap, importAll, importDefault;

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
const AllChannelsSwitchDefault = tmp10(19971);
function AddBenefitRow(disabled) {
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
}
function EmojiBenefitRow(emoji) {
  let disabled;
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
}
function ListFooterSection(onChangeTrialInterval) {
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
  const tmp4 = options(17208)(interval);
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
  const obj = onChangeTrialInterval(19938);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let tmp9 = !tmp6;
  if (null != selectedOption) {
    tmp9 = roleSubscriptionSettingsDisabled;
  }
  const obj2 = { style: tmp.listFooterContainer, children: closure_13(TableRowGroup, obj3) };
  obj3 = { title: intl.string(onChangeTrialInterval(1113).t["6anton"]), hasIcons: false, helperText: intl2.string(onChangeTrialInterval(1113).t.urVijS), children: items1 };
  TableRowGroup = tmp7(7060).TableRowGroup;
  intl = tmp7(1113).intl;
  intl2 = tmp7(1113).intl;
  const obj4 = { label: intl3.string(onChangeTrialInterval(1113).t["+hTmdb"]), value: null != selectedOption, onValueChange: callback, disabled: roleSubscriptionSettingsDisabled };
  const TableSwitchRow = tmp7(7369).TableSwitchRow;
  intl3 = tmp7(1113).intl;
  items1 = [closure_12(TableSwitchRow, obj4), closure_12(tmp2(19958), { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp9 }), closure_12(tmp2(19959), { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp9 })];
  return closure_12(closure_7, obj2);
}
function Content(arg0) {
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
  AllChannelAccessOptions = undefined;
  let first2;
  let closure_10;
  let first3;
  let closure_12;
  let closure_13;
  let roleSubscriptionSettingsDisabled;
  let closure_16;
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
  AllChannelAccessOptions = tmp12[1];
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
  const tmp5Result = tmp5(19938);
  roleSubscriptionSettingsDisabled = tmp5Result.useRoleSubscriptionSettingsDisabled();
  const tmp29 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp29;
  let items = [first3, tmp29, tmp2, first4 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, tmp3, tmp4, first1, first2];
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
      tmp31 = closure_12(ListFooterSection, obj9);
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
        tmp3Result = tmp3(EmojiBenefitRow, obj2);
      } else {
        let obj = {
          guildId,
          benefit: item,
          start: tmp,
          end: tmp2,
          onPress() {
              closure_0 = item;
              closure_1 = index;
              const obj = closure_1_2(closure_1_3[27]);
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
        tmp3Result = tmp3(closure_1(closure_3[28]), obj);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(17207).getBenefitKey,
    ListHeaderComponent: tmp34Result,
    renderSectionHeader(section) {
      let stringResult;
      const type = section.section.type;
      const obj = { style: closure_0.sectionTitle, title: stringResult };
      const TableRowGroupTitle = TableRowGroup2.TableRowGroupTitle;
      const tmp = authStore2;
      if (addBenefit.CHANNEL === type) {
        const intl2 = tmp2(1113).intl;
        stringResult = intl2.string(tmp2(1113).t.LtfhAj);
      } else if (addBenefit.INTANGIBLE === type) {
        const intl = tmp2(1113).intl;
        stringResult = intl.string(tmp2(1113).t["8oxWpO"]);
      } else if (addBenefit.EMOJI === type) {
        const intl3 = tmp2(1113).intl;
        stringResult = intl3.string(tmp2(1113).t.XBkDoA);
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
        const intl2 = closure_0(closure_3[11]).intl;
        stringResult = intl2.string(closure_0(closure_3[11]).t.WEg7PK);
      } else if (addBenefit.INTANGIBLE === type) {
        const intl = closure_0(closure_3[11]).intl;
        stringResult = intl.string(closure_0(closure_3[11]).t.VinNZr);
      } else if (addBenefit.EMOJI === type) {
        const intl3 = closure_0(closure_3[11]).intl;
        stringResult = intl3.string(closure_0(closure_3[11]).t["0t1aNC"]);
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
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(onlyChannels) {
    const obj = { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible };
    return authStore2(Content, obj);
  }
}
({ SectionList: metroRequire, View: metroImportDefault } = react_native);
let AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const useGroupIsFullGateState = RoleTierEditStore.useGroupIsFullGateState;
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = GuildRoleSubscriptionsConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listContainer: obj2, sectionTitle: obj3, listFooterContainer: { marginVertical: 24 }, allChannelsSwitch: { marginTop: 24 }, emojiImage: { width: 24, height: 24 }, addBenefitRowAfterBenefits: obj4 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let closure_15 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t["0eV/GY"]), description: intl2.string(intl4.t.iMSIWp), canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: authStore2(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return authStore2(tmp, obj);
}
export function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t["+h9nJG"]), description: intl2.string(intl4.t.oGS4tC), canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: authStore2(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return authStore2(tmp, obj);
}
