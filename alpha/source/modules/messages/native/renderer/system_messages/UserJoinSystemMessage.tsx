// Module ID: 8247
// Function ID: 8248
// Name: UserJoinSystemMessage
// Dependencies: [2042, 2064, 1074, 8222, 8248, 8259, 8260, 8263, 1115, 8224, 8226, 2]
// Exports: createUserJoinSystemMessage

// Module 8247 (UserJoinSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8222 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8224 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8248 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = SystemMessageUtilsDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const tmpResult = tmp(8259);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const tmpResult3 = tmp(8260);
        transformStickerResult = tmpResult3.transformSticker(tmp(8263).pickWelcomeSticker(message.id));
        const tmpResult4 = tmp(8263);
      }
    }
  }
  const obj2 = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1115).intl;
  obj2.content = intl.formatToParts(systemMessageUserJoinMobile, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj2.sticker = transformStickerResult;
  const intl2 = tmp(1115).intl;
  obj2.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(8226)(roleStyle));
  return obj2;
};
