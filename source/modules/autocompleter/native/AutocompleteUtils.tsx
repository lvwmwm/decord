// Module ID: 9593
// Function ID: 74697
// Name: getMentionTextWithUser
// Dependencies: [31, 27, 1352, 1907, 3767, 1849, 653, 9594, 4567, 33, 4130, 689, 4320, 4974, 3969, 7191, 2]
// Exports: getAutocompleteResultText, getItemLayout, getItemSeparator, getPrefix, getQuery, isUnbrokenRun, isWhitespaceSeparatingBoundary

// Module 9593 (getMentionTextWithUser)
import "result";
import { isGuildSelectableChannelType as closure_3 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import regExp from "regExp";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_7;
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
({ AutoCompleteResultTypes: closure_7, WHITESPACE_RE: closure_8 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_9, AUTOCOMPLETE_ROW_HEIGHT: closure_10 } = AUTOCOMPLETE_ROW_HEIGHT);
({ CHANNEL_SENTINEL: closure_11, EMOJI_SENTINEL: closure_12, GAME_MENTION_SENTINEL: closure_13, MENTION_SENTINEL: closure_14 } = regExp);
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
  const tmp3 = type === constants.EMOJI ? closure_9 : closure_10;
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
  if (constants.USER === type) {
    return getMentionTextWithUser(channel, type.user);
  } else if (constants.GLOBAL === type) {
    return type.text;
  } else if (constants.ROLE === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + closure_14 + type.name;
  } else if (constants.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
      const _HermesInternal6 = HermesInternal;
      return "#\"" + obj3.escapeChannelName(require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5)) + "\"";
    } else {
      channel2 = type.channel;
      const guildId = channel2.getGuildId();
      if (null != guildId) {
        if (callback(type.channel.type)) {
          const tmp20 = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)[type.channel.id];
          let name;
          if (null != tmp20) {
            name = tmp20.name;
          }
          if (null == name) {
            name = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5);
            const obj2 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
          }
          const _HermesInternal5 = HermesInternal;
          return "" + closure_11 + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "" + closure_11 + require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(type.channel, closure_6, closure_5);
    }
  } else if (constants.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + closure_13 + type.game.name;
  } else if (constants.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_12 + type.name + ":";
  } else {
    if (constants.EMOJI_PREMIUM_UPSELL !== type) {
      if (constants.SLASH !== type) {
        if (constants.CHOICE === type) {
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
export const isWhitespaceSeparatingBoundary = function isWhitespaceSeparatingBoundary(closure_0, lastIndexOfResult) {
  let isMatch = 0 === lastIndexOfResult;
  if (!isMatch) {
    isMatch = regex.test(closure_0[lastIndexOfResult - 1]);
  }
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, arg1, selectionEnd) {
  return !regex.test(arr.slice(arg1, selectionEnd));
};
