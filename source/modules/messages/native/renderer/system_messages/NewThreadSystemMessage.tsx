// Module ID: 8159
// Function ID: 8160
// Name: createNewThreadSystemMessage
// Dependencies: [1391, 3998, 1922, 8110, 1236, 8112, 4534, 8113, 2]
// Exports: createNewThreadSystemMessage

// Module 8159 (createNewThreadSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8110) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  channel = channel.getChannel(channel_id);
  const intl = tmp(1236).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: null, threadName: null, threadOnClick: null };
  obj[1] = importDefault(8112)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (null != channel) {
    let content = tmp(4534).computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
    const tmpResult = tmp(4534);
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
  const merged = Object.assign(importDefault(8113)(roleStyle));
  return obj;
};
