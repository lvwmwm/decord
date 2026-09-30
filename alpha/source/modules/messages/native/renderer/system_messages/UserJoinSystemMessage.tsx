// Module ID: 7622
// Function ID: 7623
// Name: UserJoinSystemMessage
// Dependencies: [2045, 2067, 1074, 7597, 7623, 7635, 7636, 7639, 1115, 7599, 7601, 2]
// Exports: createUserJoinSystemMessage

// Module 7622 (UserJoinSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7597 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7599 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7623 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;

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
      const tmpResult = tmp(7635);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const tmpResult3 = tmp(7636);
        transformStickerResult = tmpResult3.transformSticker(tmp(7639).pickWelcomeSticker(message.id));
        const tmpResult4 = tmp(7639);
      }
    }
  }
  const obj2 = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1115).intl;
  obj2.content = intl.formatToParts(systemMessageUserJoinMobile, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj2.sticker = transformStickerResult;
  const intl2 = tmp(1115).intl;
  obj2.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7601)(roleStyle));
  return obj2;
};
