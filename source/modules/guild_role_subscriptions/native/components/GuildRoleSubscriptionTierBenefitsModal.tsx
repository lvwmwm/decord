// Module ID: 16314
// Function ID: 125893
// Name: AddBenefitButton
// Dependencies: []
// Exports: GuildRoleSubscriptionTierChannelBenefitsModal, GuildRoleSubscriptionTierIntangibleBenefitsModal

// Module 16314 (AddBenefitButton)
function AddBenefitButton(disabled) {
  let label;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback4();
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
  const tmp3 = importDefault(dependencyMap[9]);
  obj.source = importDefault(dependencyMap[11]);
  const items1 = [callback2(importDefault(dependencyMap[10]), obj), ];
  const obj1 = { delete: -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, raw: 0.158, style: tmp.addBenefitLabel, children: label };
  items1[1] = callback2(arg1(dependencyMap[12]).Text, obj1);
  obj.children = items1;
  return tmp2(tmp3, obj);
}
function getSectionLabel(arg0) {
  if (constants3.CHANNEL === arg0) {
    const intl3 = arg1(dependencyMap[13]).intl;
    return intl3.string(arg1(dependencyMap[13]).t.LtfhAj);
  } else if (constants3.INTANGIBLE === arg0) {
    const intl2 = arg1(dependencyMap[13]).intl;
    return intl2.string(arg1(dependencyMap[13]).t.8oxWpO);
  } else if (constants3.EMOJI === arg0) {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.XBkDoA);
  }
}
function getAddItemLabel(arg0) {
  if (constants3.CHANNEL === arg0) {
    const intl3 = arg1(dependencyMap[13]).intl;
    return intl3.string(arg1(dependencyMap[13]).t.WEg7PK);
  } else if (constants3.INTANGIBLE === arg0) {
    const intl2 = arg1(dependencyMap[13]).intl;
    return intl2.string(arg1(dependencyMap[13]).t.VinNZr);
  } else if (constants3.EMOJI === arg0) {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.0t1aNC);
  }
}
function Separator() {
  return callback2(closure_7, { style: callback4().separator });
}
function ItemSeparator() {
  const tmp = callback4();
  let obj = { style: tmp.itemSeparatorContainer, children: callback2(closure_7, obj) };
  obj = { style: tmp.itemSeparator };
  return callback2(closure_7, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  let obj = {};
  obj = { style: callback4().emojiImage };
  obj = {};
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[10]);
  obj.uri = importDefault(dependencyMap[14]).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj;
  const items = [callback2(tmp2, obj), callback2(importDefault(dependencyMap[15]), { name: emoji.name })];
  obj.children = items;
  return callback3(closure_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  let interval;
  let onChangeTrialActiveUserLimit;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  const arg1 = onChangeTrialInterval;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[16])();
  const tmp3 = importDefault(dependencyMap[17])(interval);
  const options = tmp3.options;
  const importDefault = options;
  const selectedOption = tmp3.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = React.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    options(closure_3[18])(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  let obj = arg1(dependencyMap[19]);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp.listFooterContainer };
  obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.label = intl.string(arg1(dependencyMap[13]).t.+hTmdb);
  obj.value = null != selectedOption;
  obj.onValueChange = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [callback2(arg1(dependencyMap[20]).FormSwitchRow, obj), ];
  const obj1 = {};
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  obj1.style = disabledSection;
  const obj2 = { style: items2 };
  const items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[13]).t.urVijS);
  const items3 = [callback2(arg1(dependencyMap[12]).Text, obj2), , , , , , ];
  const obj3 = { style: tmp2.header };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[13]).t.m1KuWd);
  items3[1] = callback2(importDefault(dependencyMap[21]), obj3);
  const obj4 = { style: items4 };
  const items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const intl4 = arg1(dependencyMap[13]).intl;
  obj4.children = intl4.string(arg1(dependencyMap[13]).t.NB9NLF);
  items3[2] = callback2(arg1(dependencyMap[12]).Text, obj4);
  const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options };
  let tmp14 = !tmp5;
  let tmp15 = tmp14;
  const tmp10 = closure_7;
  const tmp11 = importDefault(dependencyMap[21]);
  const tmp12 = callback2;
  const tmp7 = closure_13;
  const tmp8 = closure_7;
  const tmp9 = closure_13;
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj5.disabled = tmp15;
  items3[3] = tmp12(importDefault(dependencyMap[22]), obj5);
  const obj6 = { style: tmp2.header };
  const tmp13 = importDefault(dependencyMap[22]);
  const intl5 = arg1(dependencyMap[13]).intl;
  obj6.children = intl5.string(arg1(dependencyMap[13]).t./JD9oe);
  items3[4] = callback2(importDefault(dependencyMap[21]), obj6);
  const obj7 = { style: items5 };
  const items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const intl6 = arg1(dependencyMap[13]).intl;
  obj7.children = intl6.string(arg1(dependencyMap[13]).t.Cg5eBm);
  items3[5] = callback2(arg1(dependencyMap[12]).Text, obj7);
  const obj8 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit };
  const tmp16 = importDefault(dependencyMap[21]);
  const tmp17 = callback2;
  if (null != selectedOption) {
    tmp14 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp14;
  items3[6] = tmp17(importDefault(dependencyMap[23]), obj8);
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
  let callback;
  let React;
  let tmp8;
  let first;
  let constants;
  let useGroupIsFullGateState;
  let closure_10;
  let first2;
  let callback2;
  let tmp23;
  let roleSubscriptionSettingsDisabled;
  let callback4;
  function addBenefit(ref_type) {
    if (ref_type.ref_type === lib.CHANNEL) {
      callback((arg0) => {
        const items = [...arg0, arg0];
        return items;
      });
    } else {
      lib((arg0) => {
        const items = [...arg0, arg0];
        return items;
      });
    }
  }
  function handleEditBenefit(benefit) {
    let obj = tmp3(tmp4[29]);
    obj = {
      guildId,
      benefit,
      onDelete() {
        function deleteBenefit(ref_type, arg1) {
          if (ref_type === lib.CHANNEL) {
            callback((arr) => arr.filter(/* F125911 */ function() { ... }));
          } else {
            lib((arr) => arr.filter(/* F125913 */ function() { ... }));
          }
        }(arg0.ref_type, arg1);
      },
      onSave(ref_type) {
        function replaceBenefit(ref_type, arg1) {
          if (ref_type.ref_type === lib.CHANNEL) {
            callback((arg0) => {
              const items = [...arg0, arg0];
              return items;
            });
          } else {
            lib((arg0) => {
              const items = [...arg0, arg0];
              return items;
            });
          }
        }(ref_type, arg1);
      },
      listingId: editStateId
    };
    obj.showEditBenefitModal(obj);
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    const obj = { style: tmp2(tmp4[16])().header };
    const tmp2 = tmp2(tmp4[21]);
    obj.children = GuildRoleSubscriptionTierBenefitsModalHeader(type.type);
    return callback2(tmp2, obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = callback4();
  const arg1 = tmp;
  const importDefault = tmp2;
  const importAll = tmp3;
  let tmp4 = tmp2;
  if (true !== onlyIntangible) {
    tmp4 = tmp3;
  }
  dependencyMap = tmp4;
  let obj = arg1(dependencyMap[24]);
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  callback = editStateId;
  const guildId = editStateContext.guildId;
  React = guildId;
  let obj1 = arg1(dependencyMap[25]);
  const subscriptionListing = obj1.useSubscriptionListing(editStateId);
  let role_id;
  if (null != subscriptionListing) {
    role_id = subscriptionListing.role_id;
  }
  tmp8 = null;
  if (null != role_id) {
    tmp8 = role_id;
  }
  const tmp9 = callback(importAll(dependencyMap[27]).useChannelBenefits(editStateId), 2);
  first = tmp9[0];
  constants = tmp9[1];
  const obj3 = importAll(dependencyMap[27]);
  const tmp11 = callback(importAll(dependencyMap[27]).useIntangibleBenefits(editStateId), 2);
  const first1 = tmp11[0];
  useGroupIsFullGateState = first1;
  closure_10 = tmp11[1];
  const obj4 = importAll(dependencyMap[27]);
  const tmp13 = callback(importAll(dependencyMap[27]).useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp13[0];
  callback2 = tmp13[1];
  const obj5 = importAll(dependencyMap[27]);
  const obj6 = importAll(dependencyMap[27]);
  [tmp16, tmp17] = callback(importAll(dependencyMap[27]).useTrialInterval(editStateId), 2);
  const tmp15 = callback(importAll(dependencyMap[27]).useTrialInterval(editStateId), 2);
  const obj7 = importAll(dependencyMap[27]);
  [tmp19, tmp20] = callback(importAll(dependencyMap[27]).useTrialLimit(editStateId), 2);
  const tmp18 = callback(importAll(dependencyMap[27]).useTrialLimit(editStateId), 2);
  const tmp21 = callback(importAll(dependencyMap[27]).useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp21[0];
  tmp23 = first3 === constants.ALL_CHANNELS_ACCESS;
  const obj8 = importAll(dependencyMap[27]);
  roleSubscriptionSettingsDisabled = arg1(dependencyMap[19]).useRoleSubscriptionSettingsDisabled();
  const tmp25 = importDefault(dependencyMap[28])(guildId);
  callback4 = tmp25;
  const items = [first2, tmp25, true === onlyIntangible, tmp23, true === onlyChannels, tmp4, first, first1];
  let tmp27 = null;
  const memo = React.useMemo(() => {
    const items = [];
    const found = tmp25.filter((id) => set.has(id.id));
    if (!tmp2) {
      const tmp2 = tmp23;
    }
    if (!tmp2) {
      let obj = { type: addBenefit.CHANNEL, data: first };
      items.push(obj);
      const tmp3 = addBenefit;
      const tmp4 = first;
    }
    if (!tmp3) {
      obj = { type: addBenefit.INTANGIBLE, data: first1 };
      items.push(obj);
    }
    if (!tmp4) {
      obj = { type: addBenefit.EMOJI, data: found };
      items.push(obj);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp27 = null;
    if (!tmp3) {
      obj = { interval: tmp16, onChangeTrialInterval: tmp17, trialActiveUserLimit: tmp19, onChangeTrialActiveUserLimit: tmp20 };
      tmp27 = callback2(ListFooterSection, obj);
    }
  }
  obj = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      item = item.item;
      const tmp = item;
      const index = item.index;
      let tmp2 = index;
      let itemLast = index === item.section.data.length - 1;
      const items = [tmp.item, , ];
      let itemFirst = 0 === index;
      if (itemFirst) {
        itemFirst = tmp.itemFirst;
      }
      items[1] = itemFirst;
      if (itemLast) {
        tmp2 = tmp;
        itemLast = tmp.itemLast;
      }
      items[2] = itemLast;
      if ("roles" in item) {
        let obj = {};
        const items1 = [items, ];
        let disabled2 = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled2 = tmp.disabled;
        }
        items1[1] = disabled2;
        obj.style = items1;
        obj = { emoji: item };
        obj.children = callback2(closure_22, obj);
        let tmp3Result = tmp3(first, obj);
        const tmp15 = first;
      } else {
        obj = {};
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp.disabled;
        }
        items2[1] = disabled;
        obj.style = items2;
        obj.accessibilityRole = "button";
        const obj1 = { disabled: roleSubscriptionSettingsDisabled };
        obj.accessibilityState = obj1;
        obj.onPress = function onPress() {
          callback(item, index);
        };
        obj.disabled = roleSubscriptionSettingsDisabled;
        const obj2 = { guildId, benefit: item };
        obj.children = callback2(tmp(tmp2[30]).GuildRoleSubscriptionBenefitPreview, obj2);
        tmp3Result = tmp3(tmp2(tmp2[9]), obj);
        const tmp6 = tmp2(tmp2[9]);
      }
      return tmp3Result;
    },
    keyExtractor: arg1(dependencyMap[31]).getBenefitKey
  };
  let tmp32 = null;
  if (true !== onlyIntangible) {
    if (importDefault(dependencyMap[26])(guildId).isFullServerGating) {
      obj1 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp21[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32 = callback2(importDefault(dependencyMap[32]), obj1);
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
      label: callback3(type),
      onPress() {
        if (type === constants2.EMOJI) {
          let obj = { guildId: closure_5, subscriptionRoleId: closure_6, initialTierEmojiIds: closure_11, onSave: closure_12, listingId: closure_4 };
          callback(closure_3[29]).showEditEmojisModal(obj);
          const obj3 = callback(closure_3[29]);
        } else {
          if (tmp === constants2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          obj = callback(closure_3[29]);
          obj = { guildId: closure_5, type: INTANGIBLE, onSave: constants2, listingId: closure_4 };
          const result = obj.showCreateBenefitModal(obj);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj.ItemSeparatorComponent = ItemSeparator;
  obj.SectionSeparatorComponent = Separator;
  obj.ListFooterComponent = tmp27;
  return callback2(tmp8, obj);
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(arg0) {
    obj = { onlyChannels: global.onlyChannels, onlyIntangible: global.onlyIntangible };
    return jsx(Content, obj);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ SectionList: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const AllChannelAccessOptions = arg1(dependencyMap[3]).AllChannelAccessOptions;
const useGroupIsFullGateState = arg1(dependencyMap[4]).useGroupIsFullGateState;
const tmp2 = arg1(dependencyMap[2]);
({ GuildRoleSubscriptionBenefitTypes: closure_10, GuildRoleSubscriptionsTierScenes: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { listContainer: { paddingBottom: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.card = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.item = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.none };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.none };
obj.itemFirst = { borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[8]).radii.sm };
const obj2 = { borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[8]).radii.sm };
obj.itemLast = { borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[8]).radii.sm };
const obj3 = { borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[8]).radii.sm };
obj.itemSeparatorContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const obj5 = { -1446235189: true, 1347605089: true, 1658268125: true, 1263606231: true, backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.itemSeparator = obj5;
obj.listFooterText = { marginHorizontal: 16 };
obj.listFooterSubtitle = { marginTop: 8 };
obj.listFooterSectionDescription = { marginBottom: 16 };
obj.listFooterContainer = { marginVertical: 24 };
obj.disabledSection = { opacity: 0.5 };
obj.allChannelsSwitch = {};
obj.addBenefitLabel = { marginStart: 16 };
obj.separator = { height: 8 };
obj.emojiImage = {};
obj.disabled = { opacity: 0.5 };
let closure_15 = obj.createStyles(obj);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.0eV/GY);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.description = intl2.string(arg1(dependencyMap[13]).t.iMSIWp);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants2.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj["scrollable"] = false;
  obj["children"] = callback2(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true });
  return callback2(importDefault(dependencyMap[33]), obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.+h9nJG);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.description = intl2.string(arg1(dependencyMap[13]).t.oGS4tC);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants2.DESIGN;
  const merged = Object.assign(arg0);
  obj["scrollable"] = false;
  obj["children"] = callback2(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true });
  return callback2(importDefault(dependencyMap[33]), obj);
};
