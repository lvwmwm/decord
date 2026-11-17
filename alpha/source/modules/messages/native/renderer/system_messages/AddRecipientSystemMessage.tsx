// Module ID: 9217
// Function ID: 9218
// Name: AddRecipientSystemMessage
// Dependencies: [5163, 5159, 1388, 9199, 9201, 1113, 9203, 2]
// Exports: createAddRecipientSystemMessage

// Module 9217 (AddRecipientSystemMessage)
import intl2 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 5163 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9199 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9201 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let tmp9;
const createCommonMessageDefault = tmp9(9203);
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
