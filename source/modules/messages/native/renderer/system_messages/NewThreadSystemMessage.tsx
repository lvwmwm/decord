// Module ID: 7770
// Function ID: 61762
// Name: createNewThreadSystemMessage
// Dependencies: [1348, 3802, 1850, 7720, 1212, 7722, 4355, 7723, 2]
// Exports: createNewThreadSystemMessage

// Module 7770 (createNewThreadSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  channel = channel.getChannel(channel_id);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  if (null != channel) {
    let content = require(4355) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_5, closure_4);
    const obj4 = require(4355) /* computeDefaultGroupDmNameFromUserIds */;
  } else {
    content = message.content;
  }
  obj.threadName = content;
  const obj1 = { action: "bindOpenThreadChannel", threadId: null, medium: true };
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (null != messageReference2) {
    channel_id1 = messageReference2.channel_id;
  }
  obj1.threadId = channel_id1;
  obj.threadOnClick = obj1;
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.veX9jq, obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
