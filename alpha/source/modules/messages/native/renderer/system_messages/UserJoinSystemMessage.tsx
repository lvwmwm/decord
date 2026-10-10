// Module ID: 8002
// Function ID: 8003
// Name: UserJoinSystemMessage
// Dependencies: [2065, 2087, 1085, 7978, 7980, 1126, 7982, 8003, 8015, 8016, 8019, 2]
// Exports: createUserJoinSystemMessage

// Module 8002 (UserJoinSystemMessage)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7978 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7980 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8003 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 8015 */;
import transformSticker2 from "transformSticker" /* 8016 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 8019 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import size from "module_2" /* 2 */;

const SystemChannelFlags = Constants.SystemChannelFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(message) {
  let formatToParts;
  let formatToParts2;
  let intl2;
  let intl3;
  let message2;
  let obj11;
  let obj12;
  let obj4;
  let obj7;
  let obj8;
  let prop;
  let roleStyle;
  message = message.message;
  if (message.author.bot) {
    let obj6;
    ({ message: message2, roleStyle } = message);
    const obj9 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj9.getMessageAuthorWithProcessedColor(message2);
    const obj2 = { appName: messageAuthorWithProcessedColor.nick, appNameOnClick: formatUsernameOnClickDefault(obj4) };
    const actor = message2.actor;
    obj4 = { message: message2, author: messageAuthorWithProcessedColor, roleStyle };
    if (null == actor) {
      const obj5 = { content: intl3.formatToParts(intl5.t.EAkHd2, obj2) };
      intl3 = tmp23(1126).intl;
      const merged = Object.assign(tmp26(7982)(message));
      obj6 = obj5;
    } else {
      const tmp23Result = useAuthorWithProcessedColor;
      const userAuthorWithProcessedColor = tmp23Result.getUserAuthorWithProcessedColor(actor, ChannelStore.getChannel(message2.channel_id));
      obj6 = { content: formatToParts2(prop, obj7) };
      const intl4 = tmp23(1126).intl;
      formatToParts2 = intl4.formatToParts;
      obj7 = { username: userAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj8) };
      prop = tmp23(1126).t["x6G/Rr"];
      obj8 = { userId: actor.id, message: message2, author: userAuthorWithProcessedColor, roleStyle };
      const merged1 = Object.assign(obj2);
      const merged2 = Object.assign(tmp26(7982)(message));
    }
    return obj6;
  } else {
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor1 = obj.getMessageAuthorWithProcessedColor(message);
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
        const tmp13 = null != guild && !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
        const tmp2Result = useIsStickerReplyEnabled;
        if (tmp2Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp13)) {
          const transformSticker = transformSticker2.transformSticker;
          transformSticker2;
          const tmp2Result4 = WelcomeCTAUtils;
          transformStickerResult = transformSticker(tmp2Result4.pickWelcomeSticker(message.id));
        }
      }
    }
    const obj10 = { content: formatToParts(systemMessageUserJoinMobile, obj11), sticker: transformStickerResult, stickerLabel: intl2.string(intl5.t["7Tj6HT"]) };
    const intl = tmp2(1126).intl;
    formatToParts = intl.formatToParts;
    obj11 = { username: messageAuthorWithProcessedColor1.nick, usernameOnClick: formatUsernameOnClickDefault(obj12) };
    obj12 = { message, author: messageAuthorWithProcessedColor1, roleStyle: tmp };
    intl2 = tmp2(1126).intl;
    const merged3 = Object.assign(tmp6(7982)(message));
    return obj10;
  }
};
