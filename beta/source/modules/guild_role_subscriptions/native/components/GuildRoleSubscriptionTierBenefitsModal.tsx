// Module ID: 19328
// Function ID: 19329
// Name: GuildRoleSubscriptionTierBenefitsModal
// Dependencies: [32, 19, 17, 16619, 19316, 16596, 21, 5003, 587, 558, 576, 11188, 5266, 9073, 1128, 1417, 5701, 19329, 15179, 16623, 38, 19312, 7327, 9076, 19330, 19331, 19333, 16603, 19308, 16618, 19334, 19335, 19343, 16622, 19344, 19318, 2]

// Module 19328 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import Text_Text from "Text/Text" /* 5266 */;
import FastImageDefault from "FastImage" /* 5701 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9073 */;
import CirclePlusIcon2 from "CirclePlusIcon" /* 11188 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16618 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 16619 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 19308 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19316 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19318 */;
import EmojiAliasDefault from "EmojiAlias" /* 19329 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 19334 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 19335 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16596 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
const AllChannelsSwitchDefault = tmp10(19344);
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
    const obj = { style: closure_1(closure_3[18])().header, children: stringResult };
    const tmp3 = closure_12;
    const tmp4 = closure_1(closure_3[23]);
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(tmp[14]).intl;
      stringResult = intl2.string(closure_0(tmp[14]).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(tmp[14]).intl;
      stringResult = intl.string(closure_0(tmp[14]).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(tmp[14]).intl;
      stringResult = intl3.string(closure_0(tmp[14]).t.XBkDoA);
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
  const tmp5Result = tmp5(19312);
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
      tmp31 = closure_12(closure_21, obj9);
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
        let obj2 = { style: items1, children: closure_12(closure_1_20, obj3) };
        items1[1] = disabled2;
        obj3 = { emoji: item };
        tmp3Result = tmp3(tmp12, obj2);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        const tmp5 = closure_3;
        const tmp6 = closure_1(closure_3[13]);
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
              const obj = closure_1_2(closure_1_3[31]);
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
          children: closure_12(closure_0(tmp5[32]).GuildRoleSubscriptionBenefitPreview, obj5)
        };
        items2[1] = disabled;
        obj4 = { disabled: roleSubscriptionSettingsDisabled };
        obj5 = { guildId, benefit: item };
        tmp3Result = tmp3(tmp6, obj);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(16622).getBenefitKey,
    ListHeaderComponent: tmp34Result,
    renderSectionHeader(section) {
      const obj = { type: section.section.type };
      return authStore2(GuildRoleSubscriptionTierBenefitsModalHeader, obj);
    },
    stickySectionHeadersEnabled: false,
    renderSectionFooter: function renderAddBenefitButton(section) {
      let stringResult;
      const type = section.section.type;
      const tmp = onSave;
      const tmp2 = GuildRoleSubscriptionTierBenefitsModalHeader;
      if (constants.CHANNEL === type) {
        const intl2 = closure_0(closure_3[14]).intl;
        stringResult = intl2.string(closure_0(closure_3[14]).t.WEg7PK);
      } else if (constants.INTANGIBLE === type) {
        const intl = closure_0(closure_3[14]).intl;
        stringResult = intl.string(closure_0(closure_3[14]).t.VinNZr);
      } else if (constants.EMOJI === type) {
        const intl3 = closure_0(closure_3[14]).intl;
        stringResult = intl3.string(closure_0(closure_3[14]).t["0t1aNC"]);
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
    ItemSeparatorComponent,
    SectionSeparatorComponent,
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
({ SectionList: metroRequire, View: metroImportDefault } = react_native);
let AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const useGroupIsFullGateState = RoleTierEditStore.useGroupIsFullGateState;
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = GuildRoleSubscriptionsConstants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listContainer: { paddingBottom: 16 }, card: obj2, item: obj3, itemFirst: obj4, itemLast: obj5, itemSeparatorContainer: obj6, itemSeparator: obj7, listFooterText: { marginHorizontal: 16 }, listFooterSubtitle: { marginTop: 8 }, listFooterSectionDescription: { marginBottom: 16 }, listFooterContainer: { marginVertical: 24 }, trialSwitchRow: { marginHorizontal: 16 }, disabledSection: { opacity: 0.5 }, allChannelsSwitch: { marginHorizontal: 16, marginTop: 24 }, addBenefitLabel: { marginStart: 16 }, separator: { height: 8 }, emojiImage: { width: 24, height: 24, marginRight: 16 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
obj4 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj5 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
let closure_15 = createStyles(obj);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddBenefitButton(arg0) {
  let disabled;
  let items;
  let label;
  let onPress;
  const obj = react2;
  const cResult = obj.c(15);
  ({ label, onPress, disabled } = arg0);
  const tmp5 = closure_15();
  if (cResult[0] === tmp5.card) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[1] === (undefined !== disabled && disabled && tmp5.disabled)) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== (undefined !== disabled && disabled)) {
      const obj2 = { disabled: undefined !== disabled && disabled };
      cResult[3] = undefined !== disabled && disabled;
      cResult[4] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_BRAND };
      const CirclePlusIcon = tmp(11188).CirclePlusIcon;
      const tmp13 = authStore2(CirclePlusIcon, obj3);
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === label) {
      let tmp14;
      if (cResult[7] === tmp5.addBenefitLabel) {
        tmp14 = cResult[8];
      }
      if (cResult[9] === (undefined !== disabled && disabled)) {
        if (cResult[10] === onPress) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
              let tmp17;
              if (cResult[13] === tmp14) {
                tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
      }
      const obj4 = { style: tmp7, accessibilityRole: "button", accessibilityState: tmp8, onPress, disabled: undefined !== disabled && disabled, children: items };
      items = [tmp10, tmp14];
      const tmp20 = map1(TouchableHitBoxDefault, obj4);
      cResult[9] = undefined !== disabled && disabled;
      cResult[10] = onPress;
      cResult[11] = tmp7;
      cResult[12] = tmp8;
      cResult[13] = tmp14;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { style: tmp5.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
    const tmp16 = authStore2(Text_Text.Text, obj5);
    cResult[6] = label;
    cResult[7] = tmp5.addBenefitLabel;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [tmp5.card, undefined !== disabled && disabled && tmp5.disabled];
  cResult[0] = tmp5.card;
  cResult[1] = undefined !== disabled && disabled && tmp5.disabled;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function AddBenefitButton(disabled) {
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
  const obj2 = { size: "md", color: nativeDefault.colors.ICON_BRAND };
  const CirclePlusIcon = CirclePlusIcon2.CirclePlusIcon;
  items1 = [authStore2(CirclePlusIcon, obj2), ];
  const obj3 = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = authStore2(Text_Text.Text, obj3);
  return tmp2(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const SectionSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = authStore2(metroImportDefault, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Separator() {
  const obj = { style: closure_15().separator };
  return authStore2(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemSeparator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.itemSeparator) {
    const obj2 = { style: tmp2.itemSeparator };
    const tmp6 = authStore2(metroImportDefault, obj2);
    cResult[0] = tmp2.itemSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.itemSeparatorContainer) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { style: tmp2.itemSeparatorContainer, children: tmp3 };
  const tmp8 = authStore2(metroImportDefault, obj3);
  cResult[2] = tmp2.itemSeparatorContainer;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function ItemSeparator() {
  let obj2;
  const tmp = closure_15();
  const obj = { style: tmp.itemSeparatorContainer, children: authStore2(metroImportDefault, obj2) };
  obj2 = { style: tmp.itemSeparator };
  return authStore2(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiRowLabel(emoji) {
  let items;
  const obj = react2;
  const cResult = obj.c(13);
  emoji = emoji.emoji;
  const tmp3 = closure_15();
  if (cResult[0] === emoji.animated) {
    let tmp5;
    let tmp7;
    if (cResult[1] === emoji.id) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { uri: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp3.emojiImage) {
      let tmp8;
      let tmp12;
      if (cResult[6] === tmp7) {
        tmp8 = cResult[7];
      }
      if (cResult[8] !== emoji.name) {
        const obj4 = { name: emoji.name };
        const tmp15 = authStore2(EmojiAliasDefault, obj4);
        cResult[8] = emoji.name;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        let tmp16;
        if (cResult[11] === tmp12) {
          tmp16 = cResult[12];
        }
        return tmp16;
      }
      const obj5 = { children: items };
      items = [tmp8, tmp12];
      const tmp19 = map1(syncedClientThemes, obj5);
      cResult[10] = tmp8;
      cResult[11] = tmp12;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
    const obj6 = { style: tmp4, source: tmp7 };
    const tmp11 = authStore2(FastImageDefault, obj6);
    cResult[5] = tmp3.emojiImage;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const obj2 = AvatarUtilsDefault;
  const obj7 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const emojiURL = obj2.getEmojiURL(obj7);
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : (function EmojiRowLabel(emoji) {
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
  items = [authStore2(tmp2, obj2), ];
  const obj6 = { name: emoji.name };
  items[1] = authStore2(EmojiAliasDefault, obj6);
  return map1(syncedClientThemes, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListFooterSection(onChangeTrialInterval) {
  let items;
  let items1;
  let listFooterContainer;
  let onChangeTrialActiveUserLimit;
  let options;
  let trialActiveUserLimit;
  let trialSwitchRow;
  const obj = onChangeTrialInterval(576);
  const cResult = obj.c(57);
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const interval = onChangeTrialInterval.interval;
  const tmp4 = closure_15();
  const tmp6 = options(15179)();
  const tmp7 = options(16623)(interval);
  options = tmp7.options;
  const selectedOption = tmp7.selectedOption;
  if (cResult[0] === onChangeTrialInterval) {
    let tmp8;
    let tmp13;
    if (cResult[1] === options) {
      tmp8 = cResult[2];
    }
    const tmpResult = onChangeTrialInterval(19312);
    const roleSubscriptionSettingsDisabled = tmpResult.useRoleSubscriptionSettingsDisabled();
    const _Symbol = Symbol;
    ({ listFooterContainer, trialSwitchRow } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(onChangeTrialInterval(1128).t["+hTmdb"]);
      cResult[3] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === tmp8) {
      if (cResult[5] === null != selectedOption) {
        let tmp15;
        if (cResult[6] === roleSubscriptionSettingsDisabled) {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp4.trialSwitchRow) {
          let tmp18;
          let disabledSection;
          if (cResult[9] === tmp15) {
            tmp18 = cResult[10];
          }
          if (null == selectedOption) {
            disabledSection = tmp4.disabledSection;
          }
          if (cResult[11] === tmp4.listFooterSubtitle) {
            let tmp22;
            let tmp23;
            let tmp25;
            let tmp28;
            let tmp30;
            if (cResult[12] === tmp4.listFooterText) {
              tmp22 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1128).intl;
              const stringResult1 = intl2.string(onChangeTrialInterval(1128).t.urVijS);
              cResult[14] = stringResult1;
              tmp23 = stringResult1;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] !== tmp22) {
              const obj2 = { style: tmp22, variant: "text-sm/medium", color: "text-default", children: tmp23 };
              const tmp27 = closure_12(onChangeTrialInterval(5266).Text, obj2);
              cResult[15] = tmp22;
              cResult[16] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            const _Symbol3 = Symbol;
            const header = tmp6.header;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1128).intl;
              const stringResult2 = intl3.string(onChangeTrialInterval(1128).t.m1KuWd);
              cResult[17] = stringResult2;
              tmp28 = stringResult2;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] !== tmp6.header) {
              const obj3 = { style: header, children: tmp28 };
              const tmp32 = closure_12(options(9076), obj3);
              cResult[18] = tmp6.header;
              cResult[19] = tmp32;
              tmp30 = tmp32;
            } else {
              tmp30 = cResult[19];
            }
            if (cResult[20] === tmp4.listFooterSectionDescription) {
              let tmp33;
              let tmp34;
              let tmp36;
              if (cResult[21] === tmp4.listFooterText) {
                tmp33 = cResult[22];
              }
              const _Symbol4 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(1128).intl;
                const stringResult3 = intl4.string(onChangeTrialInterval(1128).t.NB9NLF);
                cResult[23] = stringResult3;
                tmp34 = stringResult3;
              } else {
                tmp34 = cResult[23];
              }
              if (cResult[24] !== tmp33) {
                const obj4 = { style: tmp33, variant: "text-sm/medium", color: "text-default", children: tmp34 };
                const tmp38 = closure_12(onChangeTrialInterval(5266).Text, obj4);
                cResult[24] = tmp33;
                cResult[25] = tmp38;
                tmp36 = tmp38;
              } else {
                tmp36 = cResult[25];
              }
              let tmp39 = !tmp10;
              let tmp40 = tmp39;
              if (null != selectedOption) {
                tmp40 = roleSubscriptionSettingsDisabled;
              }
              if (cResult[26] === onChangeTrialInterval) {
                if (cResult[27] === selectedOption) {
                  if (cResult[28] === tmp40) {
                    let tmp41;
                    let tmp44;
                    let tmp46;
                    if (cResult[29] === options) {
                      tmp41 = cResult[30];
                    }
                    const _Symbol5 = Symbol;
                    const header2 = tmp6.header;
                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = tmp(1128).intl;
                      const stringResult4 = intl5.string(onChangeTrialInterval(1128).t["/JD9oe"]);
                      cResult[31] = stringResult4;
                      tmp44 = stringResult4;
                    } else {
                      tmp44 = cResult[31];
                    }
                    if (cResult[32] !== tmp6.header) {
                      const obj5 = { style: header2, children: tmp44 };
                      const tmp48 = closure_12(options(9076), obj5);
                      cResult[32] = tmp6.header;
                      cResult[33] = tmp48;
                      tmp46 = tmp48;
                    } else {
                      tmp46 = cResult[33];
                    }
                    if (cResult[34] === tmp4.listFooterSectionDescription) {
                      let tmp49;
                      let tmp50;
                      let tmp52;
                      if (cResult[35] === tmp4.listFooterText) {
                        tmp49 = cResult[36];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl6 = tmp(1128).intl;
                        const stringResult5 = intl6.string(onChangeTrialInterval(1128).t.Cg5eBm);
                        cResult[37] = stringResult5;
                        tmp50 = stringResult5;
                      } else {
                        tmp50 = cResult[37];
                      }
                      if (cResult[38] !== tmp49) {
                        const obj6 = { style: tmp49, variant: "text-sm/medium", color: "text-default", children: tmp50 };
                        const tmp54 = closure_12(onChangeTrialInterval(5266).Text, obj6);
                        cResult[38] = tmp49;
                        cResult[39] = tmp54;
                        tmp52 = tmp54;
                      } else {
                        tmp52 = cResult[39];
                      }
                      if (null != selectedOption) {
                        tmp39 = roleSubscriptionSettingsDisabled;
                      }
                      if (cResult[40] === onChangeTrialActiveUserLimit) {
                        if (cResult[41] === tmp39) {
                          let tmp55;
                          if (cResult[42] === trialActiveUserLimit) {
                            tmp55 = cResult[43];
                          }
                          if (cResult[44] === tmp25) {
                            if (cResult[45] === tmp30) {
                              if (cResult[46] === tmp36) {
                                if (cResult[47] === tmp41) {
                                  if (cResult[48] === tmp46) {
                                    if (cResult[49] === tmp52) {
                                      if (cResult[50] === tmp55) {
                                        let tmp58;
                                        if (cResult[51] === disabledSection) {
                                          tmp58 = cResult[52];
                                        }
                                        if (cResult[53] === tmp4.listFooterContainer) {
                                          if (cResult[54] === tmp58) {
                                            let tmp62;
                                            if (cResult[55] === tmp18) {
                                              tmp62 = cResult[56];
                                            }
                                            return tmp62;
                                          }
                                        }
                                        const obj7 = { style: listFooterContainer, children: items };
                                        items = [tmp18, tmp58];
                                        const tmp65 = closure_13(closure_7, obj7);
                                        cResult[53] = tmp4.listFooterContainer;
                                        cResult[54] = tmp58;
                                        cResult[55] = tmp18;
                                        cResult[56] = tmp65;
                                        tmp62 = tmp65;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj8 = { style: disabledSection, children: items1 };
                          items1 = [tmp25, tmp30, tmp36, tmp41, tmp46, tmp52, tmp55];
                          const tmp61 = closure_13(closure_7, obj8);
                          cResult[44] = tmp25;
                          cResult[45] = tmp30;
                          cResult[46] = tmp36;
                          cResult[47] = tmp41;
                          cResult[48] = tmp46;
                          cResult[49] = tmp52;
                          cResult[50] = tmp55;
                          cResult[51] = disabledSection;
                          cResult[52] = tmp61;
                          tmp58 = tmp61;
                        }
                      }
                      const obj9 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp39 };
                      const tmp57 = closure_12(options(19331), obj9);
                      cResult[40] = onChangeTrialActiveUserLimit;
                      cResult[41] = tmp39;
                      cResult[42] = trialActiveUserLimit;
                      cResult[43] = tmp57;
                      tmp55 = tmp57;
                    }
                    const items2 = [, ];
                    ({ listFooterSectionDescription: arr3[0], listFooterText: arr3[1] } = tmp4);
                    cResult[34] = tmp4.listFooterSectionDescription;
                    cResult[35] = tmp4.listFooterText;
                    cResult[36] = items2;
                    tmp49 = items2;
                  }
                }
              }
              const obj10 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp40 };
              const tmp43 = closure_12(options(19330), obj10);
              cResult[26] = onChangeTrialInterval;
              cResult[27] = selectedOption;
              cResult[28] = tmp40;
              cResult[29] = options;
              cResult[30] = tmp43;
              tmp41 = tmp43;
            }
            const items3 = [, ];
            ({ listFooterSectionDescription: arr2[0], listFooterText: arr2[1] } = tmp4);
            cResult[20] = tmp4.listFooterSectionDescription;
            cResult[21] = tmp4.listFooterText;
            cResult[22] = items3;
            tmp33 = items3;
          }
          const items4 = [, ];
          ({ listFooterText: arr[0], listFooterSubtitle: arr[1] } = tmp4);
          cResult[11] = tmp4.listFooterSubtitle;
          cResult[12] = tmp4.listFooterText;
          cResult[13] = items4;
          tmp22 = items4;
        }
        const obj11 = { style: trialSwitchRow, children: tmp15 };
        const tmp21 = closure_12(closure_7, obj11);
        cResult[8] = tmp4.trialSwitchRow;
        cResult[9] = tmp15;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
    }
    const obj12 = { start: true, end: true, label: tmp13, value: null != selectedOption, onValueChange: tmp8, disabled: roleSubscriptionSettingsDisabled };
    const tmp17 = closure_12(onChangeTrialInterval(7327).TableSwitchRow, obj12);
    cResult[4] = tmp8;
    cResult[5] = null != selectedOption;
    cResult[6] = roleSubscriptionSettingsDisabled;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function i(arg0) {
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
  tmp8 = fn;
}) : (function ListFooterSection(onChangeTrialInterval) {
  let TableSwitchRow;
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
  let obj4;
  let onChangeTrialActiveUserLimit;
  let tmp16;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  let tmp3 = dependencyMap;
  const tmp4 = options(15179)();
  const tmp5 = options(16623)(interval);
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
  const obj = onChangeTrialInterval(19312);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const obj2 = { style: tmp.listFooterContainer, children: items1 };
  const obj3 = { style: tmp.trialSwitchRow, children: closure_12(TableSwitchRow, obj4) };
  obj4 = { start: true, end: true, label: intl.string(onChangeTrialInterval(1128).t["+hTmdb"]), value: null != selectedOption, onValueChange: callback, disabled: roleSubscriptionSettingsDisabled };
  TableSwitchRow = onChangeTrialInterval(7327).TableSwitchRow;
  intl = onChangeTrialInterval(1128).intl;
  items1 = [closure_12(closure_7, obj3), ];
  if (null == selectedOption) {
    disabledSection = tmp.disabledSection;
  }
  const obj5 = { style: disabledSection, children: items3 };
  const obj6 = { style: items2, variant: "text-sm/medium", color: "text-default", children: intl2.string(onChangeTrialInterval(1128).t.urVijS) };
  items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const Text = tmp8(5266).Text;
  intl2 = tmp8(1128).intl;
  items3 = [closure_12(Text, obj6), , , , , , ];
  const obj7 = { style: tmp4.header, children: intl3.string(onChangeTrialInterval(1128).t.m1KuWd) };
  const tmp2Result = options(9076);
  intl3 = tmp8(1128).intl;
  items3[1] = closure_12(tmp2Result, obj7);
  const obj8 = { style: items4, variant: "text-sm/medium", color: "text-default", children: intl4.string(onChangeTrialInterval(1128).t.NB9NLF) };
  items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const Text2 = tmp8(5266).Text;
  intl4 = tmp8(1128).intl;
  items3[2] = closure_12(Text2, obj8);
  let tmp15 = !tmp7;
  const obj9 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp16 };
  tmp16 = tmp15;
  const tmp2Result4 = options(19330);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  items3[3] = closure_12(tmp2Result4, obj9);
  const obj10 = { style: tmp4.header, children: intl5.string(onChangeTrialInterval(1128).t["/JD9oe"]) };
  const tmp2Result5 = options(9076);
  intl5 = tmp8(1128).intl;
  items3[4] = closure_12(tmp2Result5, obj10);
  const obj11 = { style: items5, variant: "text-sm/medium", color: "text-default", children: intl6.string(onChangeTrialInterval(1128).t.Cg5eBm) };
  items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const Text3 = tmp8(5266).Text;
  intl6 = tmp8(1128).intl;
  items3[5] = closure_12(Text3, obj11);
  const obj12 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp15 };
  const tmp2Result6 = options(19331);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  items3[6] = closure_12(tmp2Result6, obj12);
  items1[1] = closure_13(closure_7, obj5);
  return closure_13(closure_7, obj2);
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
  const tmp3 = authStore2(Content, { onlyChannels, onlyIntangible });
  cResult[0] = onlyChannels;
  cResult[1] = onlyIntangible;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function GuildRoleSubscriptionTierBenefitsTab(onlyChannels) {
  const obj = { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible };
  return authStore2(Content, obj);
});
let closure_23 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl7.t["0eV/GY"]);
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(intl7.t.iMSIWp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = authStore2(closure_23, { onlyChannels: true });
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
  const obj = { title: intl.string(intl7.t["0eV/GY"]), description: intl2.string(intl7.t.iMSIWp), canProceedToNextStep: true, nextStep: unpackModuleId.INTANGIBLE_BENEFITS, scrollable: false, children: authStore2(closure_23, { onlyChannels: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
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
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl7.t["+h9nJG"]);
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(intl7.t.oGS4tC);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = authStore2(closure_23, { onlyIntangible: true });
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
  const obj = { title: intl.string(intl7.t["+h9nJG"]), description: intl2.string(intl7.t.oGS4tC), canProceedToNextStep: true, nextStep: unpackModuleId.DESIGN, scrollable: false, children: authStore2(closure_23, { onlyIntangible: true }) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  const merged = Object.assign(arg0);
  return authStore2(tmp, obj);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export const GuildRoleSubscriptionTierBenefitsTab = tmp6;
export const GuildRoleSubscriptionTierChannelBenefitsModal = tmp7;
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = tmp8;
