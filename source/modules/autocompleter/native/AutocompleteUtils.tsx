// Module ID: 9550
// Function ID: 74447
// Name: getMentionTextWithUser
// Dependencies: []
// Exports: getAutocompleteResultText, getItemLayout, getItemSeparator, getPrefix, getQuery

// Module 9550 (getMentionTextWithUser)
function getMentionTextWithUser(messageChannel, user) {
  if (obj.hasSameRoleAsUsername(messageChannel, user)) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + tmp + user.tag;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp + importDefault(dependencyMap[14]).getUserTag(user);
    const obj2 = importDefault(dependencyMap[14]);
  }
  return combined;
}
function AutocompleteFormDivider() {
  const tmp = callback2();
  return jsx(importDefault(dependencyMap[15]), { style: callback2().itemDivider });
}
importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[2]).isGuildSelectableChannelType;
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
arg1(dependencyMap[6]).AutoCompleteResultTypes;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_8, AUTOCOMPLETE_ROW_HEIGHT: closure_9 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ CHANNEL_SENTINEL: closure_10, EMOJI_SENTINEL: closure_11, MENTION_SENTINEL: closure_12 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
const hairlineWidth = arg1(dependencyMap[1]).StyleSheet.hairlineWidth;
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { marginLeft: 16, backgroundColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
obj.itemDivider = obj;
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

export const getItemLayout = function getItemLayout(arg0, index) {
  let type;
  if (null != arg0) {
    if (null != arg0[index]) {
      type = tmp2.type;
    }
  }
  const tmp3 = type === AutoCompleteResultTypes.EMOJI ? closure_8 : closure_9;
  const result = index * tmp3;
  return { length: tmp3, offset: result + Math.max(0, (index - 1) * hairlineWidth), index };
};
export const getAutocompleteResultText = function getAutocompleteResultText(type, channel, channel2) {
  if (null != channel2) {
    if (!channel2.has(type.type)) {
      return "";
    }
  }
  type = type.type;
  if (AutoCompleteResultTypes.USER === type) {
    return getMentionTextWithUser(channel, type.user);
  } else if (AutoCompleteResultTypes.GLOBAL === type) {
    return type.text;
  } else if (AutoCompleteResultTypes.ROLE === type) {
    const _HermesInternal6 = HermesInternal;
    return "" + closure_12 + type.name;
  } else if (AutoCompleteResultTypes.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const obj3 = channel(dependencyMap[12]);
      const _HermesInternal5 = HermesInternal;
      return "#\"" + obj3.escapeChannelName(channel(dependencyMap[12]).computeChannelName(type.channel, closure_6, closure_5)) + "\"";
    } else {
      channel2 = type.channel;
      const guildId = channel2.getGuildId();
      if (null != guildId) {
        if (callback(type.channel.type)) {
          const tmp18 = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)[type.channel.id];
          let name;
          if (null != tmp18) {
            name = tmp18.name;
          }
          if (null == name) {
            name = channel(dependencyMap[12]).computeChannelName(type.channel, closure_6, closure_5);
            const obj2 = channel(dependencyMap[12]);
          }
          const _HermesInternal4 = HermesInternal;
          return "" + closure_10 + name;
        }
      }
      const _HermesInternal3 = HermesInternal;
      return "" + closure_10 + channel(dependencyMap[12]).computeChannelName(type.channel, closure_6, closure_5);
    }
  } else if (AutoCompleteResultTypes.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_11 + type.name + ":";
  } else {
    if (AutoCompleteResultTypes.EMOJI_PREMIUM_UPSELL !== type) {
      if (AutoCompleteResultTypes.SLASH !== type) {
        if (AutoCompleteResultTypes.CHOICE === type) {
          const _HermesInternal = HermesInternal;
          return "" + type.choice.displayName;
        } else {
          return "";
        }
      }
    }
    return "";
  }
};
export { getMentionTextWithUser };
export const getItemSeparator = function getItemSeparator() {
  return <AutocompleteFormDivider />;
};
export const getPrefix = function getPrefix(substr1) {
  return substr1[0];
};
export const getQuery = function getQuery(arr) {
  return arr.slice(1).toLowerCase();
};
