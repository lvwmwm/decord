// Module ID: 7683
// Function ID: 61476
// Name: createAddRecipientSystemMessage
// Dependencies: [1352, 1348, 1850, 7684, 7686, 1212, 7687, 2]
// Exports: createAddRecipientSystemMessage

// Module 7683 (createAddRecipientSystemMessage)
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export const createAddRecipientSystemMessage = function createAddRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  user = user.getUser(first);
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = require(7684) /* getMessageAuthorWithProcessedColor */.getUserAuthorWithProcessedColor(user, channel);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: importDefault(7686)({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require(1212) /* getSystemLocale */.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(importDefault(7687)(message));
  return obj;
};
