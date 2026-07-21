// Module ID: 7687
// Function ID: 61343
// Name: createGuildStreamSystemMessage
// Dependencies: []
// Exports: createGuildStreamSystemMessage

// Module 7687 (createGuildStreamSystemMessage)
const StreamTypes = require(dependencyMap[0]).StreamTypes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  let channel_id;
  let guild_id;
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (null == messageReference) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp = importDefault(dependencyMap[1])(message);
  let obj1 = require(dependencyMap[2]);
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[3])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj1 = { ended: tmp2 };
  const intl = require(dependencyMap[4]).intl;
  const formatToParts = intl.formatToParts;
  const t = require(dependencyMap[4]).t;
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
  const merged2 = Object.assign(importDefault(dependencyMap[5])(roleStyle));
  return obj1;
};
