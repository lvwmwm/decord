// Module ID: 7431
// Function ID: 7432
// Name: UserJoinSystemMessage
// Dependencies: [2051, 2073, 1086, 7406, 7432, 7444, 7445, 7448, 1127, 7408, 7410, 2]
// Exports: createUserJoinSystemMessage

// Module 7431 (UserJoinSystemMessage)
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7406 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7408 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7432 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 7444 */;
import transformSticker2 from "transformSticker" /* 7445 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 7448 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2073 */;
import size from "module_2" /* 2 */;

const SystemChannelFlags = Constants.SystemChannelFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(message) {
  let formatToParts;
  let intl2;
  let obj4;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const obj3 = SystemMessageUtilsDefault;
  const systemMessageUserJoinMobile = obj3.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = GuildStore.getGuild(guildId);
      const tmp10 = null != guild && !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      const tmpResult = useIsStickerReplyEnabled;
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const transformSticker = transformSticker2.transformSticker;
        transformSticker2;
        const tmpResult4 = WelcomeCTAUtils;
        transformStickerResult = transformSticker(tmpResult4.pickWelcomeSticker(message.id));
      }
    }
  }
  const obj2 = { content: formatToParts(systemMessageUserJoinMobile, obj4), sticker: transformStickerResult, stickerLabel: intl2.string(intl3.t["7Tj6HT"]) };
  const intl = tmp(1127).intl;
  formatToParts = intl.formatToParts;
  obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  intl2 = tmp(1127).intl;
  const merged = Object.assign(tmp4(7410)(message));
  return obj2;
};
