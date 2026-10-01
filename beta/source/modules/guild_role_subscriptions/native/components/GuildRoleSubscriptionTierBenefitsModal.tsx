// Module ID: 17572
// Function ID: 17573
// Name: GuildRoleSubscriptionTierBenefitsModal
// Dependencies: [32, 19, 17, 14773, 17557, 14750, 21, 4836, 576, 9203, 5899, 17573, 4832, 1115, 1397, 17574, 13442, 14777, 38, 17552, 8053, 9271, 17575, 17576, 17569, 14757, 17548, 14772, 17578, 17579, 17588, 14776, 17589, 17561, 2]
// Exports: GuildRoleSubscriptionTierChannelBenefitsModal, GuildRoleSubscriptionTierIntangibleBenefitsModal

// Module 17572 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 14773 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 17548 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17561 */;
import AssetRegistryDefault from "AssetRegistry" /* 17573 */;
import EmojiAliasDefault from "EmojiAlias" /* 17574 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 17578 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 17579 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, dependencyMap, importAll, importDefault;

let c10;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp10;
let unpackModuleId;
const AllChannelsSwitchDefault = tmp10(17589);
function AddBenefitButton(disabled) {
  let items1;
  let label;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  const items = [tmp.card, ];
  disabled = flag;
  const tmp2 = map1;
  const tmp5 = TouchableHitBoxDefault;
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: items1 };
  items[1] = disabled;
  const obj2 = { source: AssetRegistryDefault };
  const tmp3Result = FastImageDefault;
  items1 = [closure_12(tmp3Result, obj2), ];
  const obj3 = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = closure_12(Text_Text.Text, obj3);
  return tmp2(tmp5, obj);
}
function Separator() {
  const obj = { style: closure_15().separator };
  return closure_12(metroImportDefault, obj);
}
function ItemSeparator() {
  let obj2;
  const tmp = closure_15();
  const obj = { style: tmp.itemSeparatorContainer, children: closure_12(metroImportDefault, obj2) };
  obj2 = { style: tmp.itemSeparator };
  return closure_12(metroImportDefault, obj);
}
function EmojiRowLabel(emoji) {
  let items;
  let obj3;
  let obj4;
  let obj5;
  emoji = emoji.emoji;
  const obj = { children: items };
  const obj2 = { style: closure_15().emojiImage, source: obj3 };
  obj3 = { uri: obj4.getEmojiURL(obj5) };
  const tmp2 = FastImageDefault;
  obj4 = AvatarUtilsDefault;
  obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  items = [closure_12(tmp2, obj2), ];
  const obj6 = { name: emoji.name };
  items[1] = closure_12(EmojiAliasDefault, obj6);
  return map1(authStore2, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  let disabledSection;
  let interval;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let onChangeTrialActiveUserLimit;
  let tmp16;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  let tmp3 = dependencyMap;
  const tmp4 = options(13442)();
  const tmp5 = options(14777)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
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
  const obj = onChangeTrialInterval(17552);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const obj2 = { style: tmp.listFooterContainer, children: items1 };
  const obj3 = { label: intl.string(onChangeTrialInterval(1115).t["+hTmdb"]), value: null != selectedOption, onValueChange: callback, disabled: roleSubscriptionSettingsDisabled };
  const FormSwitchRow = onChangeTrialInterval(8053).FormSwitchRow;
  intl = onChangeTrialInterval(1115).intl;
  items1 = [closure_12(FormSwitchRow, obj3), ];
  if (null == selectedOption) {
    disabledSection = tmp.disabledSection;
  }
  const obj4 = { style: disabledSection, children: items3 };
  const obj5 = { style: items2, variant: "text-sm/medium", color: "text-default", children: intl2.string(onChangeTrialInterval(1115).t.urVijS) };
  items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const Text = tmp8(4832).Text;
  intl2 = tmp8(1115).intl;
  items3 = [closure_12(Text, obj5), , , , , , ];
  const obj6 = { style: tmp4.header, children: intl3.string(onChangeTrialInterval(1115).t.m1KuWd) };
  const tmp2Result = options(9271);
  intl3 = tmp8(1115).intl;
  items3[1] = closure_12(tmp2Result, obj6);
  const obj7 = { style: items4, variant: "text-sm/medium", color: "text-default", children: intl4.string(onChangeTrialInterval(1115).t.NB9NLF) };
  items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const Text2 = tmp8(4832).Text;
  intl4 = tmp8(1115).intl;
  items3[2] = closure_12(Text2, obj7);
  let tmp15 = !tmp7;
  const obj8 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp16 };
  tmp16 = tmp15;
  const tmp2Result4 = options(17575);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  items3[3] = closure_12(tmp2Result4, obj8);
  const obj9 = { style: tmp4.header, children: intl5.string(onChangeTrialInterval(1115).t["/JD9oe"]) };
  const tmp2Result5 = options(9271);
  intl5 = tmp8(1115).intl;
  items3[4] = closure_12(tmp2Result5, obj9);
  const obj10 = { style: items5, variant: "text-sm/medium", color: "text-default", children: intl6.string(onChangeTrialInterval(1115).t.Cg5eBm) };
  items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const Text3 = tmp8(4832).Text;
  intl6 = tmp8(1115).intl;
  items3[5] = closure_12(Text3, obj10);
  const obj11 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp15 };
  const tmp2Result6 = options(17576);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  items3[6] = closure_12(tmp2Result6, obj11);
  items1[1] = closure_13(closure_7, obj4);
  return closure_13(closure_7, obj2);
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
  closure_12 = undefined;
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
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    let stringResult;
    type = type.type;
    const obj = { style: closure_1(closure_3[16])().header, children: stringResult };
    const tmp3 = closure_12;
    const tmp4 = closure_1(closure_3[21]);
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(tmp[13]).intl;
      stringResult = intl2.string(closure_0(tmp[13]).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(tmp[13]).intl;
      stringResult = intl.string(closure_0(tmp[13]).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(tmp[13]).intl;
      stringResult = intl3.string(closure_0(tmp[13]).t.XBkDoA);
    }
    return tmp3(tmp4, obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  let tmp = addBenefit();
  _require = tmp;
  let tmp2 = true === onlyIntangible;
  importDefault = tmp2;
  let tmp3 = true === onlyChannels;
  importAll = tmp3;
  let tmp4 = tmp2 || tmp3;
  dependencyMap = tmp4;
  let tmp5 = _require;
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
  let tmp12 = editStateId(obj3.useChannelBenefits(editStateId), 2);
  first1 = tmp12[0];
  AllChannelAccessOptions = tmp12[1];
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp14 = editStateId(obj4.useIntangibleBenefits(editStateId), 2);
  first2 = tmp14[0];
  closure_10 = tmp14[1];
  let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
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
  const tmp5Result = tmp5(17552);
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
      const obj = { type: closure_16.CHANNEL, data: first1 };
      items.push(obj);
    }
    const tmp6 = closure_2;
    if (!tmp6) {
      const obj2 = { type: closure_16.INTANGIBLE, data: first2 };
      items.push(obj2);
    }
    const tmp10 = closure_3;
    if (!tmp10) {
      const obj3 = { type: closure_16.EMOJI, data: found };
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
      let obj3;
      let obj4;
      let obj5;
      let tmp3Result;
      item = item.item;
      const index = item.index;
      let items = [item.item, , ];
      let itemFirst = 0 === index;
      const diff = item.section.data.length - 1;
      if (itemFirst) {
        itemFirst = tmp2.itemFirst;
      }
      let itemLast = index === diff;
      items[1] = itemFirst;
      if (itemLast) {
        itemLast = tmp2.itemLast;
      }
      items[2] = itemLast;
      if ("roles" in item) {
        const items1 = [items, ];
        let disabled2 = roleSubscriptionSettingsDisabled;
        const tmp12 = first1;
        if (roleSubscriptionSettingsDisabled) {
          disabled2 = tmp2.disabled;
        }
        let obj2 = { style: items1, children: closure_12(EmojiRowLabel, obj3) };
        items1[1] = disabled2;
        obj3 = { emoji: item };
        tmp3Result = tmp3(tmp12, obj2);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        const tmp5 = closure_3;
        const tmp6 = closure_1(closure_3[9]);
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        let obj = {
          style: items2,
          accessibilityRole: "button",
          accessibilityState: obj4,
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
          disabled: roleSubscriptionSettingsDisabled,
          children: closure_12(closure_0(tmp5[30]).GuildRoleSubscriptionBenefitPreview, obj5)
        };
        items2[1] = disabled;
        obj4 = { disabled: roleSubscriptionSettingsDisabled };
        obj5 = { guildId, benefit: item };
        tmp3Result = tmp3(tmp6, obj);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(14776).getBenefitKey,
    ListHeaderComponent: tmp34Result,
    renderSectionHeader(section) {
      const obj = { type: section.section.type };
      return closure_12(GuildRoleSubscriptionTierBenefitsModalHeader, obj);
    },
    stickySectionHeadersEnabled: false,
    renderSectionFooter(section) {
      let stringResult;
      const type = section.section.type;
      const tmp = onSave;
      const tmp2 = GuildRoleSubscriptionTierBenefitsModalHeader;
      if (constants.CHANNEL === type) {
        const intl2 = closure_0(closure_3[13]).intl;
        stringResult = intl2.string(closure_0(closure_3[13]).t.WEg7PK);
      } else if (constants.INTANGIBLE === type) {
        const intl = closure_0(closure_3[13]).intl;
        stringResult = intl.string(closure_0(closure_3[13]).t.VinNZr);
      } else if (constants.EMOJI === type) {
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
        disabled: roleSubscriptionSettingsDisabled
      };
      return tmp(tmp2, obj);
    },
    ItemSeparatorComponent: ItemSeparator,
    SectionSeparatorComponent: Separator,
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
    return closure_12(Content, obj);
  }
}
({ SectionList: metroRequire, View: metroImportDefault } = react_native);
let AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const useGroupIsFullGateState = RoleTierEditStore.useGroupIsFullGateState;
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = GuildRoleSubscriptionsConstants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listContainer: { paddingBottom: 16 }, card: obj2, item: obj3, itemFirst: obj4, itemLast: obj5, itemSeparatorContainer: obj6, itemSeparator: obj7, listFooterText: { marginHorizontal: 16 }, listFooterSubtitle: { marginTop: 8 }, listFooterSectionDescription: { marginBottom: 16 }, listFooterContainer: { marginVertical: 24 }, disabledSection: { opacity: 0.5 }, allChannelsSwitch: { marginHorizontal: 16, marginTop: 24 }, addBenefitLabel: { marginStart: 16 }, separator: { height: 8 }, emojiImage: { width: 24, height: 24, marginRight: 16 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
obj4 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj5 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
let closure_15 = createStyles(obj);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl7.t["0eV/GY"]), description: intl2.string(intl7.t.iMSIWp), canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: closure_12(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  const merged = Object.assign(arg0);
  return closure_12(tmp, obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl7.t["+h9nJG"]), description: intl2.string(intl7.t.oGS4tC), canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: closure_12(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  const merged = Object.assign(arg0);
  return closure_12(tmp, obj);
};
