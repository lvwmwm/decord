// Module ID: 8134
// Function ID: 8135
// Name: createAddRecipientSystemMessage
// Dependencies: [1395, 1391, 1922, 8135, 8137, 1236, 8138, 2]
// Exports: createAddRecipientSystemMessage

// Module 8134 (createAddRecipientSystemMessage)
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

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
  let obj = require(8135) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = require(8135) /* getMessageAuthorWithProcessedColor */.getUserAuthorWithProcessedColor(user, channel);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8137)({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: importDefault(8137)({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  const intl = require(1236) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require(1236) /* getSystemLocale */.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj);
  }
  obj = { content: formatToPartsResult };
  const merged = Object.assign(importDefault(8138)(message));
  return obj;
};
