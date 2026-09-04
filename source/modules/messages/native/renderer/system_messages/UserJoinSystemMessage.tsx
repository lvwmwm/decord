// Module ID: 7916
// Function ID: 7917
// Name: createUserJoinSystemMessage
// Dependencies: [1386, 1908, 673, 7891, 7917, 7928, 7929, 7932, 1233, 7893, 7895, 2]
// Exports: createUserJoinSystemMessage

// Module 7916 (createUserJoinSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7891 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 7917 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import { SystemChannelFlags } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = getSystemMessageUserJoinMobileDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      guild = guild.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      let tmpResult = tmp(7928);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(7929);
        transformStickerResult = tmpResult.transformSticker(tmp(7932).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(7932);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1233).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(7893)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7895)(roleStyle));
  return obj;
};
