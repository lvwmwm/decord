// Module ID: 7665
// Function ID: 61287
// Name: createRemoveRecipientSystemMessage
// Dependencies: [1352, 1348, 1849, 7649, 7651, 1212, 7652, 2]
// Exports: createRemoveRecipientSystemMessage

// Module 7665 (createRemoveRecipientSystemMessage)
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    const formatToParts = intl.formatToParts;
    const t = require(1212) /* getSystemLocale */.t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj);
    }
    obj.content = formatToPartsResult;
    const merged = Object.assign(importDefault(7652)(message));
    return obj;
  } else {
    user = user.getUser(first);
    let obj3 = require(7649) /* getMessageAuthorWithProcessedColor */;
    const userAuthorWithProcessedColor = obj3.getUserAuthorWithProcessedColor(user, channel);
    const obj1 = {};
    const merged1 = Object.assign(obj);
    obj1["otherUsername"] = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    obj1["otherUsernameOnClick"] = importDefault(7651)(obj2);
    obj3 = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = require(1212) /* getSystemLocale */.t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj1);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj1);
    }
    obj3.content = formatToParts2Result;
    const merged2 = Object.assign(importDefault(7652)(message));
    return obj3;
  }
};
