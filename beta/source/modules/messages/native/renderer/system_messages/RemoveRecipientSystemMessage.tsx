// Module ID: 8506
// Function ID: 8507
// Name: RemoveRecipientSystemMessage
// Dependencies: [4993, 4989, 1385, 8489, 8491, 1113, 8493, 2]
// Exports: createRemoveRecipientSystemMessage

// Module 8506 (RemoveRecipientSystemMessage)
import ChannelRecord from "ChannelRecord" /* 4993 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8489 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8491 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export function createRemoveRecipientSystemMessage(message) {
  let obj5;
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const author = message.author;
  const channel = ChannelStore.getChannel(message.channel_id);
  const hasItem = null != channel && THREAD_CHANNEL_TYPES.has(channel.type);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (author.id === first) {
    let formatToPartsResult;
    const intl = tmp5(1113).intl;
    const formatToParts = intl.formatToParts;
    const t = tmp5(1113).t;
    if (hasItem) {
      formatToPartsResult = formatToParts(t.uHmblj, obj2);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj2);
    }
    const obj3 = { content: formatToPartsResult };
    const merged = Object.assign(tmp8(8493)(message));
    return obj3;
  } else {
    let formatToParts2Result;
    const user = UserStore.getUser(first);
    const tmp5Result = useAuthorWithProcessedColor;
    const userAuthorWithProcessedColor = tmp5Result.getUserAuthorWithProcessedColor(user, channel);
    const obj4 = { otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: formatUsernameOnClickDefault(obj5) };
    const merged1 = Object.assign(obj2);
    obj5 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    const intl2 = tmp5(1113).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = tmp5(1113).t;
    if (hasItem) {
      formatToParts2Result = formatToParts2(t2.KBrM5t, obj4);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj4);
    }
    const obj6 = { content: formatToParts2Result };
    const merged2 = Object.assign(tmp8(8493)(message));
    return obj6;
  }
}
