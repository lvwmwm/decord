// Module ID: 7660
// Function ID: 61235
// Name: createChannelPinnedMessageSystemMessage
// Dependencies: []
// Exports: createChannelPinnedMessageSystemMessage

// Module 7660 (createChannelPinnedMessageSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[1])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), pinsOnClick: obj };
  obj = { revision: false, hashKey: false, unitType: false, messageChannelId: message.channel_id };
  const messageReference = message.messageReference;
  const obj1 = {};
  if (null != messageReference) {
    const intl2 = require(dependencyMap[2]).intl;
    const obj2 = {};
    const merged = Object.assign(obj);
    const obj3 = { action: "bindJumpToMessage" };
    ({ channel_id: obj6.targetChannelId, message_id: obj6.targetMessageId } = messageReference);
    obj3.medium = true;
    obj2["messageOnClick"] = obj3;
    let formatToPartsResult = intl2.formatToParts(require(dependencyMap[2]).t.7mvRNF, obj2);
  } else {
    const intl = require(dependencyMap[2]).intl;
    formatToPartsResult = intl.formatToParts(require(dependencyMap[2]).t.6TrHq2, obj);
  }
  obj1.content = formatToPartsResult;
  const merged1 = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj1;
};
