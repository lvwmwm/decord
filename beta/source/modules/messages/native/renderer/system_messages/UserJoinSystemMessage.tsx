// Module ID: 8248
// Function ID: 8249
// Name: UserJoinSystemMessage
// Dependencies: [2045, 2067, 1078, 8223, 8249, 8260, 8261, 8264, 1119, 8225, 8227, 2]
// Exports: createUserJoinSystemMessage

// Module 8248 (UserJoinSystemMessage)
import util from "util" /* 1119 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8223 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8225 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8249 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
const SystemChannelFlags = fn(1078).SystemChannelFlags;
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
      guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const tmpResult = tmp(8260);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const tmpResult3 = tmp(8261);
        transformStickerResult = tmpResult3.transformSticker(tmp(8264).pickWelcomeSticker(message.id));
        const tmpResult4 = tmp(8264);
      }
    }
  }
  const obj2 = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1119).intl;
  obj2.content = intl.formatToParts(systemMessageUserJoinMobile, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj2.sticker = transformStickerResult;
  const intl2 = tmp(1119).intl;
  obj2.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(8227)(roleStyle));
  return obj2;
};
