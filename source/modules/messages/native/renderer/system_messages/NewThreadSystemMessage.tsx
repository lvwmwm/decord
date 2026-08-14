// Module ID: 8184
// Function ID: 8185
// Name: createNewThreadSystemMessage
// Dependencies: [1391, 3998, 1922, 8135, 1236, 8137, 4535, 8138, 2]
// Exports: createNewThreadSystemMessage

// Module 8184 (createNewThreadSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8135) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  channel = channel.getChannel(channel_id);
  const intl = tmp(1236).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: null, threadName: null, threadOnClick: null };
  obj[1] = importDefault(8137)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (null != channel) {
    let content = tmp(4535).computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
    const tmpResult = tmp(4535);
  } else {
    content = message.content;
  }
  obj[2] = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj = { content: intl.formatToParts(tmp(1236).t.veX9jq, obj) };
  obj[3] = { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true };
  const merged = Object.assign(importDefault(8138)(roleStyle));
  return obj;
};
