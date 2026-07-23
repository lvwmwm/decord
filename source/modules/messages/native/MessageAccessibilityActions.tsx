// Module ID: 7655
// Function ID: 61242
// Name: getQuickReactionLabel
// Dependencies: [4946, 3758, 653, 3803, 7656, 1212, 7663, 2]
// Exports: createMessageAccessibilityActions, getMessageAccessibilityActionFromLabel

// Module 7655 (getQuickReactionLabel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function getQuickReactionLabel() {
  const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (null != setting) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true === disableDoubleTap) {
    return null;
  } else {
    if (null != setting) {
      let obj = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */;
      const result = obj.disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { emojiName: result.name };
        return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.eQIttH, obj);
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { emojiName: "heart" };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eQIttH, obj);
  }
}
let obj = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
let result = require("ME").fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export const MessageAccessibilityAction = obj;
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj[intl.string(require(1212) /* getSystemLocale */.t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj[intl2.string(require(1212) /* getSystemLocale */.t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj[intl3.string(require(1212) /* getSystemLocale */.t["5IEsGx"])] = obj.REPLY;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj[intl4.string(require(1212) /* getSystemLocale */.t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj[intl5.string(require(1212) /* getSystemLocale */.t["5Q9+/L"])] = obj.EDIT_GDM;
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj[intl6.string(require(1212) /* getSystemLocale */.t["mp1N/2"])] = obj.OPEN_PINS;
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj[intl7.string(require(1212) /* getSystemLocale */.t["+TSRGD"])] = obj.JUMP_TO_MESSAGE;
  const tmp = getQuickReactionLabel();
  if (null != tmp) {
    obj[tmp] = obj.ADD_QUICK_REACTION;
  }
  return obj[action];
};
export const createMessageAccessibilityActions = function createMessageAccessibilityActions(message, channel) {
  if (null == channel) {
    return [];
  } else {
    const guildId = channel.getGuildId();
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = _isNativeReflectConstruct.canChatInGuild(guildId);
    }
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_3.can(Permissions.ADD_REACTIONS, channel);
    }
    if (!canChatInGuildResult) {
      canChatInGuildResult = channel.isPrivate();
    }
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.iXAna6);
    obj.name = obj.VIEW_PROFILE;
    const items = [obj];
    if (canChatInGuildResult) {
      obj = {};
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.label = intl2.string(require(1212) /* getSystemLocale */.t.lfIHs4);
      obj.name = obj.ADD_REACTION;
      items.push(obj);
      const tmp13 = getQuickReactionLabel();
      if (null != tmp13) {
        obj = { label: tmp13 };
        obj.name = obj.ADD_QUICK_REACTION;
        items.push(obj);
      }
    }
    if (obj4.canReplyToMessage(channel, message)) {
      const obj1 = {};
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj1.label = intl3.string(require(1212) /* getSystemLocale */.t["5IEsGx"]);
      obj1.name = obj.REPLY;
      items.push(obj1);
    }
    const obj2 = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.label = intl4.string(require(1212) /* getSystemLocale */.t.ChPNkN);
    obj2.name = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj2);
    return items;
  }
};
