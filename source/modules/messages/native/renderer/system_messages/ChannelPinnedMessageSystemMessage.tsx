// Module ID: 7665
// Function ID: 61259
// Name: createChannelPinnedMessageSystemMessage
// Dependencies: []
// Exports: createChannelPinnedMessageSystemMessage

// Module 7665 (createChannelPinnedMessageSystemMessage)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[1])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), pinsOnClick: obj };
  obj = { "Bool(true)": "accessibilityLabel", "Bool(true)": "r", "Bool(true)": "isArray", messageChannelId: message.channel_id };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = require(dependencyMap[2]).intl;
    const obj1 = {};
    const merged = Object.assign(obj);
    const obj2 = { action: "bindJumpToMessage" };
    ({ channel_id: obj5.targetChannelId, message_id: obj5.targetMessageId } = messageReference);
    obj2.medium = true;
    obj1["messageOnClick"] = obj2;
    let formatToPartsResult = intl2.formatToParts(require(dependencyMap[2]).t.7mvRNF, obj1);
  } else {
    const intl = require(dependencyMap[2]).intl;
    formatToPartsResult = intl.formatToParts(require(dependencyMap[2]).t.6TrHq2, obj);
  }
  const tmp10 = importDefault(dependencyMap[3])(roleStyle);
  let accessibilityActions = tmp10.accessibilityActions;
  if (null == accessibilityActions) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const obj3 = {};
  const intl3 = require(dependencyMap[2]).intl;
  obj3.label = intl3.string(require(dependencyMap[2]).t.mp1N/2);
  obj3.name = require(dependencyMap[4]).MessageAccessibilityAction.OPEN_PINS;
  items.push(obj3);
  if (null != messageReference) {
    const obj4 = {};
    const intl4 = require(dependencyMap[2]).intl;
    obj4.label = intl4.string(require(dependencyMap[2]).t.+TSRGD);
    obj4.name = require(dependencyMap[4]).MessageAccessibilityAction.JUMP_TO_MESSAGE;
    items.push(obj4);
  }
  const obj5 = { content: formatToPartsResult };
  const merged1 = Object.assign(tmp10);
  obj5["accessibilityActions"] = items;
  return obj5;
};
