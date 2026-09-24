// Module ID: 8302
// Function ID: 8303
// Name: GuildStreamSystemMessage
// Dependencies: [4832, 8275, 8255, 8257, 1119, 8259, 2]
// Exports: createGuildStreamSystemMessage

// Module 8302 (GuildStreamSystemMessage)
import util from "util" /* 1119 */;
import Constants from "Constants" /* 4832 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8255 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8257 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8275 */;
import size from "module_2" /* 2 */;

const StreamTypes = Constants.StreamTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = getHumanizedCallDurationDefault(message);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj3 = { action: "bindJoinStream", stream: { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id } };
  const obj5 = { ended: null != tmp3, content: null };
  const intl = util.intl;
  const formatToParts = intl.formatToParts;
  const t = util.t;
  if (null != tmp3) {
    const obj6 = {};
    const merged = Object.assign(obj);
    obj6.duration = tmp3;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj6);
  } else {
    const obj7 = {};
    const merged1 = Object.assign(obj);
    obj7.onJoinStream = obj3;
    formatToPartsResult = formatToParts(t.dMmbGk, obj7);
  }
  obj5.content = formatToPartsResult;
  const merged2 = Object.assign(createCommonMessageDefault(roleStyle));
  return obj5;
};
