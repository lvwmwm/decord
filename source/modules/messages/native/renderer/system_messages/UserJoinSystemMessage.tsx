// Module ID: 8158
// Function ID: 8159
// Name: createUserJoinSystemMessage
// Dependencies: [1391, 1910, 676, 8135, 8159, 8170, 8171, 8174, 1236, 8137, 8138, 2]
// Exports: createUserJoinSystemMessage

// Module 8158 (createUserJoinSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { SystemChannelFlags } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8135) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = importDefault(8159).getSystemMessageUserJoinMobile(message.id);
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
      let tmpResult = tmp(8170);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(8171);
        transformStickerResult = tmpResult.transformSticker(tmp(8174).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(8174);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(8137)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(8138)(roleStyle));
  return obj;
};
