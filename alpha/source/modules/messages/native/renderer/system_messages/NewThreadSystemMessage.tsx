// Module ID: 14400
// Function ID: 14401
// Name: NewThreadSystemMessage
// Dependencies: [4892, 4985, 1387, 12008, 1112, 14379, 5659, 14380, 2]
// Exports: createNewThreadSystemMessage

// Module 14400 (NewThreadSystemMessage)
import useChannelName from "useChannelName" /* 5659 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

let tmp7;
const createCommonMessageDefault = tmp7(14380);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export function createNewThreadSystemMessage(message) {
  let channel_id1;
  let content;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  const getChannel = ChannelStore.getChannel;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const channel = getChannel(channel_id);
  const intl = tmp(1112).intl;
  const formatToParts = intl.formatToParts;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), threadName: content, threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true } };
  const veX9jq = tmp(1112).t.veX9jq;
  if (null != channel) {
    const tmpResult = useChannelName;
    content = tmpResult.computeChannelName(channel, UserStore, RelationshipStore);
  } else {
    content = message.content;
  }
  const messageReference2 = message.messageReference;
  channel_id1 = undefined;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  const obj3 = { content: formatToParts(veX9jq, obj2) };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
}
