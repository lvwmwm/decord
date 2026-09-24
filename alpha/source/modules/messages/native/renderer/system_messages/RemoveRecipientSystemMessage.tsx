// Module ID: 8326
// Function ID: 8327
// Name: RemoveRecipientSystemMessage
// Dependencies: [2048, 2044, 1372, 8308, 8310, 1115, 8312, 2]
// Exports: createRemoveRecipientSystemMessage

// Module 8326 (RemoveRecipientSystemMessage)
import ChannelRecord from "ChannelRecord" /* 2048 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8308 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8310 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const channel = ChannelStore.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    const intl = tmp5(1115).intl;
    const formatToParts = intl.formatToParts;
    const t = tmp5(1115).t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj2);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj2);
    }
    const obj3 = { content: formatToPartsResult };
    const merged = Object.assign(tmp8(8312)(message));
    return obj3;
  } else {
    const user = UserStore.getUser(first);
    const userAuthorWithProcessedColor = tmp5(8308).getUserAuthorWithProcessedColor(user, channel);
    const obj4 = {};
    const merged1 = Object.assign(obj2);
    obj4.otherUsername = userAuthorWithProcessedColor.nick;
    const obj5 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    obj4.otherUsernameOnClick = tmp8(8310)(obj5);
    const intl2 = tmp5(1115).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = tmp5(1115).t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj4);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj4);
    }
    const obj6 = { content: formatToParts2Result };
    const merged2 = Object.assign(tmp8(8312)(message));
    return obj6;
  }
};
