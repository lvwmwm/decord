// Module ID: 7894
// Function ID: 7895
// Name: createUserJoinSystemMessage
// Dependencies: [1387, 1909, 676, 7869, 7895, 7906, 7907, 7910, 1236, 7871, 7873, 2]
// Exports: createUserJoinSystemMessage

// Module 7894 (createUserJoinSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7869 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 7895 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "createGuildRecordFromRust" /* 1909 */;
import { SystemChannelFlags } from "ME" /* 676 */;

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
      let tmpResult = tmp(7906);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(7907);
        transformStickerResult = tmpResult.transformSticker(tmp(7910).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(7910);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(7871)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7873)(roleStyle));
  return obj;
};
