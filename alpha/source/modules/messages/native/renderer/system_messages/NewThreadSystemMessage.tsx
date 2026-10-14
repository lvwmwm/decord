// Module ID: 8047
// Function ID: 8048
// Name: NewThreadSystemMessage
// Dependencies: [2065, 4762, 1390, 7986, 1126, 7988, 5426, 7990, 2]
// Exports: createNewThreadSystemMessage

// Module 8047 (NewThreadSystemMessage)
import useChannelName from "useChannelName" /* 5426 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7986 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7988 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RelationshipStore from "RelationshipStore" /* 4762 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let tmp7;
const createCommonMessageDefault = tmp7(7990);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(message) {
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
  const intl = tmp(1126).intl;
  const formatToParts = intl.formatToParts;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), threadName: content, threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true } };
  const veX9jq = tmp(1126).t.veX9jq;
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
};
