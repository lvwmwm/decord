// Module ID: 8563
// Function ID: 8564
// Name: AddRecipientSystemMessage
// Dependencies: [4996, 4992, 1385, 8564, 8566, 1113, 8568, 2]
// Exports: createAddRecipientSystemMessage

// Module 8563 (AddRecipientSystemMessage)
import intl2 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 4996 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8564 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8566 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp9;
const createCommonMessageDefault = tmp9(8568);
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
