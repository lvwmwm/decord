// Module ID: 7793
// Function ID: 7794
// Name: createNewThreadSystemMessage
// Dependencies: [1372, 3826, 1874, 7743, 1236, 7745, 4380, 7746, 2]
// Exports: createNewThreadSystemMessage

// Module 7793 (createNewThreadSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  channel = channel.getChannel(channel_id);
  const intl = tmp(1236).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: null, threadName: null, threadOnClick: null };
  obj[1] = importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (null != channel) {
    let content = tmp(4380).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    const tmpResult = tmp(4380);
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
  const merged = Object.assign(importDefault(7746)(roleStyle));
  return obj;
};
