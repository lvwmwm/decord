// Module ID: 7427
// Function ID: 7428
// Name: UserJoinSystemMessage
// Dependencies: [2045, 2067, 1074, 7402, 7428, 7440, 7441, 7444, 1115, 7404, 7406, 2]
// Exports: createUserJoinSystemMessage

// Module 7427 (UserJoinSystemMessage)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7402 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7404 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7428 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 7440 */;
import transformSticker2 from "transformSticker" /* 7441 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 7444 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
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
  const intl = tmp(1115).intl;
  formatToParts = intl.formatToParts;
  obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  intl2 = tmp(1115).intl;
  const merged = Object.assign(tmp4(7406)(message));
  return obj2;
};
