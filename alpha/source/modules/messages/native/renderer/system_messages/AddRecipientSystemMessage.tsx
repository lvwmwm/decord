// Module ID: 8596
// Function ID: 8597
// Name: AddRecipientSystemMessage
// Dependencies: [4647, 4643, 1386, 8578, 8580, 1112, 8582, 2]
// Exports: createAddRecipientSystemMessage

// Module 8596 (AddRecipientSystemMessage)
import intl2 from "intl" /* 1112 */;
import ChannelRecord from "ChannelRecord" /* 4647 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8578 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8580 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let tmp9;
const createCommonMessageDefault = tmp9(8582);
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export function createAddRecipientSystemMessage(message) {
  let formatToPartsResult;
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const user = UserStore.getUser(first);
  const channel = ChannelStore.getChannel(message.channel_id);
  const hasItem = null != channel && THREAD_CHANNEL_TYPES.has(channel.type);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = useAuthorWithProcessedColor;
  const userAuthorWithProcessedColor = obj2.getUserAuthorWithProcessedColor(user, channel);
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: formatUsernameOnClickDefault({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  const intl = intl2.intl;
  const formatToParts = intl.formatToParts;
  const t = intl2.t;
  if (hasItem) {
    formatToPartsResult = formatToParts(t.Vej1Nw, obj3);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj3);
  }
  const obj4 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj4;
}
