// Module ID: 7694
// Function ID: 61402
// Name: createGuildStreamSystemMessage
// Dependencies: [4195, 7667, 7649, 7651, 1212, 7652, 2]
// Exports: createGuildStreamSystemMessage

// Module 7694 (createGuildStreamSystemMessage)
import { StreamTypes } from "StreamIssueReportReasons";

const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  let channel_id;
  let guild_id;
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (null == messageReference) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp = importDefault(7667)(message);
  let obj1 = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj1 = { ended: tmp2 };
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require(1212) /* getSystemLocale */.t;
  if (null != tmp) {
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2["duration"] = tmp;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3["onJoinStream"] = { action: "bindJoinStream", stream: obj };
    formatToPartsResult = formatToParts(t.dMmbGk, obj3);
  }
  obj1.content = formatToPartsResult;
  const merged2 = Object.assign(importDefault(7652)(roleStyle));
  return obj1;
};
