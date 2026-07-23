// Module ID: 7672
// Function ID: 61308
// Name: createUserJoinSystemMessage
// Dependencies: [1348, 1838, 653, 7649, 7673, 7684, 7685, 7688, 1212, 7651, 7652, 2]
// Exports: createUserJoinSystemMessage

// Module 7672 (createUserJoinSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { SystemChannelFlags } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = importDefault(7673).getSystemMessageUserJoinMobile(message.id);
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
      const obj4 = require(7684) /* computeIsStickerReplyEnabled */;
      if (obj4.computeIsStickerReplyEnabled(guildId, channel, message, tmp7)) {
        const obj5 = require(7685) /* transform */;
        transformStickerResult = obj5.transformSticker(require(7688) /* pickHelloSticker */.pickWelcomeSticker(message.id));
        const obj6 = require(7688) /* pickHelloSticker */;
      }
    }
  }
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj.sticker = transformStickerResult;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.stickerLabel = intl2.string(require(1212) /* getSystemLocale */.t["7Tj6HT"]);
  const merged = Object.assign(importDefault(7652)(roleStyle));
  return obj;
};
