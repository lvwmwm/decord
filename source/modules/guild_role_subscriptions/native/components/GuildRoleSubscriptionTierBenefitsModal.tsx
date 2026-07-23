// Module ID: 16439
// Function ID: 128109
// Name: AddBenefitButton
// Dependencies: [57, 31, 27, 14117, 16424, 14094, 33, 4130, 689, 8474, 5085, 16440, 4126, 1212, 1392, 16441, 12905, 14121, 44, 16419, 7495, 7494, 16442, 16443, 16436, 14101, 16415, 14116, 16445, 16446, 16455, 14120, 16456, 16428, 2]
// Exports: GuildRoleSubscriptionTierChannelBenefitsModal, GuildRoleSubscriptionTierIntangibleBenefitsModal

// Module 16439 (AddBenefitButton)
import _slicedToArray from "_slicedToArray";
import getBenefitKey from "getBenefitKey";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import { AllChannelAccessOptions } from "AllChannelAccessOptions";
import { useGroupIsFullGateState } from "_createForOfIteratorHelperLoose";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "Header";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let require = arg1;
function AddBenefitButton(disabled) {
  let label;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.card, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  obj.style = items;
  obj.accessibilityRole = "button";
  obj = { disabled: flag };
  obj.accessibilityState = obj;
  obj.onPress = onPress;
  obj.disabled = flag;
  obj = {};
  const tmp2 = closure_13;
  const tmp3 = importDefault(8474);
  obj.source = importDefault(16440);
  const items1 = [callback(importDefault(5085), obj), ];
  const obj1 = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return tmp2(tmp3, obj);
}
function getSectionLabel(arg0) {
  if (constants2.CHANNEL === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.LtfhAj);
  } else if (constants2.INTANGIBLE === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["8oxWpO"]);
  } else if (constants2.EMOJI === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XBkDoA);
  }
}
function getAddItemLabel(arg0) {
  if (constants2.CHANNEL === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.WEg7PK);
  } else if (constants2.INTANGIBLE === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.VinNZr);
  } else if (constants2.EMOJI === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["0t1aNC"]);
  }
}
function Separator() {
  return callback(closure_7, { style: _createForOfIteratorHelperLoose().separator });
}
function ItemSeparator() {
  const tmp = _createForOfIteratorHelperLoose();
  obj = { style: tmp.itemSeparatorContainer, children: callback(closure_7, obj) };
  obj = { style: tmp.itemSeparator };
  return callback(closure_7, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  let obj = {};
  obj = { style: _createForOfIteratorHelperLoose().emojiImage };
  obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(5085);
  obj.uri = importDefault(1392).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj;
  const items = [callback(tmp2, obj), callback(importDefault(16441), { name: emoji.name })];
  obj.children = items;
  return callback2(closure_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  let interval;
  let onChangeTrialActiveUserLimit;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = options(12905)();
  const tmp3 = options(14121)(interval);
  options = tmp3.options;
  const selectedOption = tmp3.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = React.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    options(outer1_3[18])(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  let obj = onChangeTrialInterval(16419);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp.listFooterContainer };
  obj = {};
  const intl = onChangeTrialInterval(1212).intl;
  obj.label = intl.string(onChangeTrialInterval(1212).t["+hTmdb"]);
  obj.value = null != selectedOption;
  obj.onValueChange = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [callback(onChangeTrialInterval(7495).FormSwitchRow, obj), ];
  const obj1 = {};
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  obj1.style = disabledSection;
  const obj2 = { style: null, variant: "text-sm/medium", color: "text-default" };
  const items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  obj2.style = items2;
  const intl2 = onChangeTrialInterval(1212).intl;
  obj2.children = intl2.string(onChangeTrialInterval(1212).t.urVijS);
  const items3 = [callback(onChangeTrialInterval(4126).Text, obj2), , , , , , ];
  const obj3 = { style: tmp2.header };
  const intl3 = onChangeTrialInterval(1212).intl;
  obj3.children = intl3.string(onChangeTrialInterval(1212).t.m1KuWd);
  items3[1] = callback(options(7494), obj3);
  const obj4 = { style: null, variant: "text-sm/medium", color: "text-default" };
  const items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  obj4.style = items4;
  const intl4 = onChangeTrialInterval(1212).intl;
  obj4.children = intl4.string(onChangeTrialInterval(1212).t.NB9NLF);
  items3[2] = callback(onChangeTrialInterval(4126).Text, obj4);
  const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options };
  let tmp14 = !tmp5;
  let tmp15 = tmp14;
  const tmp10 = closure_7;
  const tmp11 = options(7494);
  const tmp12 = callback;
  const tmp7 = closure_13;
  const tmp8 = closure_7;
  const tmp9 = closure_13;
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj5.disabled = tmp15;
  items3[3] = tmp12(options(16442), obj5);
  const obj6 = { style: tmp2.header };
  const tmp13 = options(16442);
  const intl5 = onChangeTrialInterval(1212).intl;
  obj6.children = intl5.string(onChangeTrialInterval(1212).t["/JD9oe"]);
  items3[4] = callback(options(7494), obj6);
  const obj7 = { style: null, variant: "text-sm/medium", color: "text-default" };
  const items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  obj7.style = items5;
  const intl6 = onChangeTrialInterval(1212).intl;
  obj7.children = intl6.string(onChangeTrialInterval(1212).t.Cg5eBm);
  items3[5] = callback(onChangeTrialInterval(4126).Text, obj7);
  const obj8 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit };
  const tmp16 = options(7494);
  const tmp17 = callback;
  if (null != selectedOption) {
    tmp14 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp14;
  items3[6] = tmp17(options(16443), obj8);
  obj1.children = items3;
  items1[1] = tmp9(tmp10, obj1);
  obj.children = items1;
  return tmp7(tmp8, obj);
}
function Content(arg0) {
  let onlyChannels;
  let onlyIntangible;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let dependencyMap;
  let editStateId;
  let guildId;
  let c6;
  let first;
  let AllChannelAccessOptions;
  let first1;
  let closure_10;
  let first2;
  let callback;
  let c13;
  let roleSubscriptionSettingsDisabled;
  let _createForOfIteratorHelperLoose;
  function addBenefit(ref_type) {
    let closure_0 = ref_type;
    if (ref_type.ref_type === lib.CHANNEL) {
      callback((arg0) => {
        const items = [...arg0, closure_0];
        return items;
      });
    } else {
      lib((arg0) => {
        const items = [...arg0, closure_0];
        return items;
      });
    }
  }
  function handleEditBenefit(benefit) {
    let closure_0 = benefit;
    let closure_1 = arg1;
    let obj = tmp3(_undefined[29]);
    obj = {
      guildId,
      benefit,
      onDelete() {
        (function deleteBenefit(ref_type, closure_1) {
          let closure_0 = closure_1;
          if (ref_type === constants.CHANNEL) {
            outer2_8((arr) => arr.filter(/* F128127 */ function() { ... }));
          } else {
            outer2_10((arr) => arr.filter(/* F128129 */ function() { ... }));
          }
        })(benefit.ref_type, closure_1);
      },
      onSave(ref_type) {
        (function replaceBenefit(ref_type, closure_1) {
          let closure_0 = ref_type;
          if (ref_type.ref_type === constants.CHANNEL) {
            outer2_8((arg0) => {
              const items = [...arg0, closure_0];
              return items;
            });
          } else {
            outer2_10((arg0) => {
              const items = [...arg0, closure_0];
              return items;
            });
          }
        })(ref_type, closure_1);
      },
      listingId: editStateId
    };
    obj.showEditBenefitModal(obj);
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    const obj = { style: tmp2(_undefined[16])().header };
    tmp2 = tmp2(_undefined[21]);
    obj.children = GuildRoleSubscriptionTierBenefitsModalHeader(type.type);
    return callback2(tmp2, obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const importDefault = tmp2;
  const importAll = tmp3;
  let tmp4 = tmp2;
  if (true !== onlyIntangible) {
    tmp4 = tmp3;
  }
  dependencyMap = tmp4;
  let obj = require(16436) /* useEditStateContext */;
  const editStateContext = obj.useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj1 = require(14101) /* _createForOfIteratorHelperLoose */;
  const subscriptionListing = obj1.useSubscriptionListing(editStateId);
  let role_id;
  if (null != subscriptionListing) {
    role_id = subscriptionListing.role_id;
  }
  let tmp8 = null;
  if (null != role_id) {
    tmp8 = role_id;
  }
  c6 = tmp8;
  const tmp9 = editStateId(importAll(14116).useChannelBenefits(editStateId), 2);
  first = tmp9[0];
  AllChannelAccessOptions = tmp9[1];
  let obj3 = importAll(14116);
  const tmp11 = editStateId(importAll(14116).useIntangibleBenefits(editStateId), 2);
  first1 = tmp11[0];
  closure_10 = tmp11[1];
  const obj4 = importAll(14116);
  const tmp13 = editStateId(importAll(14116).useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp13[0];
  callback = tmp13[1];
  const obj5 = importAll(14116);
  const obj6 = importAll(14116);
  [tmp16, tmp17] = editStateId(importAll(14116).useTrialInterval(editStateId), 2);
  let tmp15 = editStateId(importAll(14116).useTrialInterval(editStateId), 2);
  const obj7 = importAll(14116);
  [tmp19, tmp20] = editStateId(importAll(14116).useTrialLimit(editStateId), 2);
  const tmp18 = editStateId(importAll(14116).useTrialLimit(editStateId), 2);
  const tmp21 = editStateId(importAll(14116).useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp21[0];
  c13 = tmp23;
  const obj8 = importAll(14116);
  roleSubscriptionSettingsDisabled = require(16419) /* useRoleSubscriptionSettingsDisabled */.useRoleSubscriptionSettingsDisabled();
  const tmp25 = importDefault(16445)(guildId);
  _createForOfIteratorHelperLoose = tmp25;
  let items = [first2, tmp25, true === onlyIntangible, first3 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, first, first1];
  let tmp27 = null;
  const memo = guildId.useMemo(() => {
    const items = [];
    let tmp2 = closure_1;
    const found = _undefined2.filter((id) => outer1_11.has(id.id));
    if (!closure_1) {
      tmp2 = c13;
    }
    if (!tmp2) {
      let obj = { type: addBenefit.CHANNEL, data: first };
      items.push(obj);
    }
    if (!closure_2) {
      obj = { type: addBenefit.INTANGIBLE, data: first1 };
      items.push(obj);
    }
    if (!c3) {
      obj = { type: addBenefit.EMOJI, data: found };
      items.push(obj);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp27 = null;
    if (!tmp3) {
      obj = { interval: tmp16, onChangeTrialInterval: tmp17, trialActiveUserLimit: tmp19, onChangeTrialActiveUserLimit: tmp20 };
      tmp27 = callback(ListFooterSection, obj);
    }
  }
  obj = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      item = item.item;
      const index = item.index;
      let itemLast = index === item.section.data.length - 1;
      const items = [item.item, , ];
      let itemFirst = 0 === index;
      if (itemFirst) {
        itemFirst = item.itemFirst;
      }
      items[1] = itemFirst;
      if (itemLast) {
        itemLast = item.itemLast;
      }
      items[2] = itemLast;
      if ("roles" in item) {
        let obj = {};
        const items1 = [items, ];
        let disabled2 = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled2 = item.disabled;
        }
        items1[1] = disabled2;
        obj.style = items1;
        obj = { emoji: item };
        obj.children = callback2(outer1_22, obj);
        let tmp3Result = tmp3(first, obj);
        const tmp15 = first;
      } else {
        obj = {};
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = item.disabled;
        }
        items2[1] = disabled;
        obj.style = items2;
        obj.accessibilityRole = "button";
        const obj1 = { disabled: roleSubscriptionSettingsDisabled };
        obj.accessibilityState = obj1;
        obj.onPress = function onPress() {
          outer1_17(item, index);
        };
        obj.disabled = roleSubscriptionSettingsDisabled;
        const obj2 = { guildId, benefit: item };
        obj.children = callback2(tmp(_undefined[30]).GuildRoleSubscriptionBenefitPreview, obj2);
        tmp3Result = tmp3(tmp2(_undefined[9]), obj);
        const tmp6 = tmp2(_undefined[9]);
      }
      return tmp3Result;
    },
    keyExtractor: require(14120) /* getBenefitKey */.getBenefitKey
  };
  let tmp32 = null;
  if (true !== onlyIntangible) {
    if (importDefault(16415)(guildId).isFullServerGating) {
      obj1 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp21[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32 = callback(importDefault(16456), obj1);
    } else {
      tmp32 = null;
    }
  }
  obj.ListHeaderComponent = tmp32;
  obj.renderSectionHeader = function renderSectionHeader(section) {
    return callback2(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj.stickySectionHeadersEnabled = false;
  obj.renderSectionFooter = function renderSectionFooter(section) {
    const type = section.section.type;
    return callback2(handleEditBenefit, {
      label: outer1_19(type),
      onPress() {
        if (type === addBenefit.EMOJI) {
          let obj = { guildId: outer1_5, subscriptionRoleId: outer1_6, initialTierEmojiIds: outer1_11, onSave: outer1_12, listingId: outer1_4 };
          callback(16446).showEditEmojisModal(obj);
          const obj3 = callback(16446);
        } else {
          if (tmp === addBenefit.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          obj = callback(16446);
          obj = { guildId: outer1_5, type: INTANGIBLE, onSave: outer1_16, listingId: outer1_4 };
          const result = obj.showCreateBenefitModal(obj);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj.ItemSeparatorComponent = ItemSeparator;
  obj.SectionSeparatorComponent = Separator;
  obj.ListFooterComponent = tmp27;
  return callback(c6, obj);
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(arg0) {
    obj = { onlyChannels: global.onlyChannels, onlyIntangible: global.onlyIntangible };
    return jsx(Content, obj);
  }
}
({ SectionList: closure_6, View: closure_7 } = get_ActivityIndicator);
({ GuildRoleSubscriptionBenefitTypes: closure_10, GuildRoleSubscriptionsTierScenes: closure_11 } = MAX_SUBSCRIPTION_TIERS);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { listContainer: { paddingBottom: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.none };
_createForOfIteratorHelperLoose.item = obj1;
_createForOfIteratorHelperLoose.itemFirst = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj2 = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.itemLast = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
_createForOfIteratorHelperLoose.itemSeparatorContainer = obj4;
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
_createForOfIteratorHelperLoose.itemSeparator = obj5;
_createForOfIteratorHelperLoose.listFooterText = { marginHorizontal: 16 };
_createForOfIteratorHelperLoose.listFooterSubtitle = { marginTop: 8 };
_createForOfIteratorHelperLoose.listFooterSectionDescription = { marginBottom: 16 };
_createForOfIteratorHelperLoose.listFooterContainer = { marginVertical: 24 };
_createForOfIteratorHelperLoose.disabledSection = { opacity: 0.5 };
_createForOfIteratorHelperLoose.allChannelsSwitch = { marginHorizontal: 16, marginTop: 24 };
_createForOfIteratorHelperLoose.addBenefitLabel = { marginStart: 16 };
_createForOfIteratorHelperLoose.separator = { height: 8 };
_createForOfIteratorHelperLoose.emojiImage = { width: 24, height: 24, marginRight: 16 };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let obj3 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["0eV/GY"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.iMSIWp);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj["scrollable"] = false;
  obj["children"] = callback(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true });
  return callback(importDefault(16428), obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["+h9nJG"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.oGS4tC);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.DESIGN;
  const merged = Object.assign(arg0);
  obj["scrollable"] = false;
  obj["children"] = callback(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true });
  return callback(importDefault(16428), obj);
};
