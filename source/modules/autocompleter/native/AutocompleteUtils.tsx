// Module ID: 9557
// Function ID: 74488
// Name: getMentionTextWithUser
// Dependencies: [31, 27, 1352, 1907, 3767, 1849, 653, 9558, 4567, 33, 4130, 689, 4320, 4974, 3969, 7191, 2]
// Exports: getAutocompleteResultText, getItemLayout, getItemSeparator, getPrefix, getQuery

// Module 9557 (getMentionTextWithUser)
import "result";
import { isGuildSelectableChannelType as closure_3 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import MENTION_SENTINEL from "MENTION_SENTINEL";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function getMentionTextWithUser(messageChannel, user) {
  if (obj.hasSameRoleAsUsername(messageChannel, user)) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + tmp + user.tag;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp + importDefault(3969).getUserTag(user);
    const obj2 = importDefault(3969);
  }
  return combined;
}
function AutocompleteFormDivider() {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(importDefault(7191), { style: _createForOfIteratorHelperLoose().itemDivider });
}
require("ME").AutoCompleteResultTypes;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_8, AUTOCOMPLETE_ROW_HEIGHT: closure_9 } = AUTOCOMPLETE_ROW_HEIGHT);
({ CHANNEL_SENTINEL: closure_10, EMOJI_SENTINEL: closure_11, MENTION_SENTINEL: closure_12 } = MENTION_SENTINEL);
const hairlineWidth = require("get ActivityIndicator").StyleSheet.hairlineWidth;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginLeft: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.itemDivider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_callSuper").fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

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
      const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
      const _HermesInternal5 = HermesInternal;
      return "#\"" + obj3.escapeChannelName(require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5)) + "\"";
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
            name = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5);
            const obj2 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
          }
          const _HermesInternal4 = HermesInternal;
          return "" + closure_10 + name;
        }
      }
      const _HermesInternal3 = HermesInternal;
      return "" + closure_10 + require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5);
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
