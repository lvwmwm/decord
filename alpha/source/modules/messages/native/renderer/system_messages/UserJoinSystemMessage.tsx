// Module ID: 7976
// Function ID: 7977
// Name: UserJoinSystemMessage
// Dependencies: [2063, 2086, 1085, 7951, 7977, 7989, 7990, 7993, 1126, 7953, 7955, 2]
// Exports: createUserJoinSystemMessage

// Module 7976 (UserJoinSystemMessage)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7977 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 7989 */;
import transformSticker2 from "transformSticker" /* 7990 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 7993 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
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
  const intl = tmp(1126).intl;
  formatToParts = intl.formatToParts;
  obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  intl2 = tmp(1126).intl;
  const merged = Object.assign(tmp4(7955)(message));
  return obj2;
};
