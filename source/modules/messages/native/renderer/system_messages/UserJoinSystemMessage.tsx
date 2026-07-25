// Module ID: 7707
// Function ID: 61562
// Name: createUserJoinSystemMessage
// Dependencies: [1348, 1838, 653, 7684, 7708, 7720, 7721, 7724, 1212, 7686, 7687, 2]
// Exports: createUserJoinSystemMessage

// Module 7707 (createUserJoinSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { SystemChannelFlags } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = importDefault(7708).getSystemMessageUserJoinMobile(message.id);
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      guild = guild.getGuild(guildId);
      let tmp7 = null != guild;
      if (tmp7) {
        tmp7 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const obj4 = require(7720) /* computeIsStickerReplyEnabled */;
      if (obj4.computeIsStickerReplyEnabled(guildId, channel, message, tmp7)) {
        const obj5 = require(7721) /* transform */;
        transformStickerResult = obj5.transformSticker(require(7724) /* pickHelloSticker */.pickWelcomeSticker(message.id));
        const obj6 = require(7724) /* pickHelloSticker */;
      }
    }
  }
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj.sticker = transformStickerResult;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.stickerLabel = intl2.string(require(1212) /* getSystemLocale */.t["7Tj6HT"]);
  const merged = Object.assign(importDefault(7687)(roleStyle));
  return obj;
};
