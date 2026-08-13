// Module ID: 8159
// Function ID: 8160
// Name: createGuildStreamSystemMessage
// Dependencies: [4409, 8132, 8114, 8116, 1236, 8117, 2]
// Exports: createGuildStreamSystemMessage

// Module 8159 (createGuildStreamSystemMessage)
import { StreamTypes } from "StreamIssueReportReasons";

const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  let channel_id;
  let guild_id;
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = importDefault(8132)(message);
  let obj1 = require(8114) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8116)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj1 = { ended: tmp4, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require(1236) /* getSystemLocale */.t;
  if (null != tmp3) {
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2.duration = tmp3;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.onJoinStream = { action: "bindJoinStream", stream: obj };
    formatToPartsResult = formatToParts(t.dMmbGk, obj3);
  }
  obj1[1] = formatToPartsResult;
  const merged2 = Object.assign(importDefault(8117)(roleStyle));
  return obj1;
};
