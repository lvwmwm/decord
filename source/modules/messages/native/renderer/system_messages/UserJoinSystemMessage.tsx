// Module ID: 7665
// Function ID: 61249
// Name: createUserJoinSystemMessage
// Dependencies: []
// Exports: createUserJoinSystemMessage

// Module 7665 (createUserJoinSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SystemChannelFlags = arg1(dependencyMap[2]).SystemChannelFlags;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = arg1(dependencyMap[3]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = importDefault(dependencyMap[4]).getSystemMessageUserJoinMobile(message.id);
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = guild.getGuild(guildId);
      let tmp7 = null != guild;
      if (tmp7) {
        tmp7 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const obj4 = arg1(dependencyMap[5]);
      if (obj4.computeIsStickerReplyEnabled(guildId, channel, message, tmp7)) {
        const obj5 = arg1(dependencyMap[6]);
        transformStickerResult = obj5.transformSticker(arg1(dependencyMap[7]).pickWelcomeSticker(message.id));
        const obj6 = arg1(dependencyMap[7]);
      }
    }
  }
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[9])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj.sticker = transformStickerResult;
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.stickerLabel = intl2.string(arg1(dependencyMap[8]).t.7Tj6HT);
  const merged = Object.assign(importDefault(dependencyMap[10])(roleStyle));
  return obj;
};
