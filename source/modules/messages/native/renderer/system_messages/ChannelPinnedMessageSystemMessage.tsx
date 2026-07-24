// Module ID: 7760
// Function ID: 61592
// Name: createChannelPinnedMessageSystemMessage
// Dependencies: [7738, 7740, 1212, 7741, 7744, 2]
// Exports: createChannelPinnedMessageSystemMessage

// Module 7760 (createChannelPinnedMessageSystemMessage)
const result = require("getSystemLocale").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), pinsOnClick: obj };
  obj = { action: "bindOpenPins", messageChannelId: message.channel_id, medium: true };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    const merged = Object.assign(obj);
    const obj2 = { action: "bindJumpToMessage" };
    ({ channel_id: obj5.targetChannelId, message_id: obj5.targetMessageId } = messageReference);
    obj2.medium = true;
    obj1["messageOnClick"] = obj2;
    let formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t["7mvRNF"], obj1);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t["6TrHq2"], obj);
  }
  const tmp10 = importDefault(7741)(roleStyle);
  let accessibilityActions = tmp10.accessibilityActions;
  if (null == accessibilityActions) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl3.string(require(1212) /* getSystemLocale */.t["mp1N/2"]);
  obj3.name = require(7744) /* getQuickReactionLabel */.MessageAccessibilityAction.OPEN_PINS;
  items.push(obj3);
  if (null != messageReference) {
    const obj4 = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj4.label = intl4.string(require(1212) /* getSystemLocale */.t["+TSRGD"]);
    obj4.name = require(7744) /* getQuickReactionLabel */.MessageAccessibilityAction.JUMP_TO_MESSAGE;
    items.push(obj4);
  }
  const obj5 = { content: formatToPartsResult };
  const merged1 = Object.assign(tmp10);
  obj5["accessibilityActions"] = items;
  return obj5;
};
