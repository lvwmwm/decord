// Module ID: 8309
// Function ID: 8310
// Name: NewThreadSystemMessage
// Dependencies: [2068, 4855, 1392, 8246, 1128, 8248, 5521, 8250, 2]
// Exports: createNewThreadSystemMessage

// Module 8309 (NewThreadSystemMessage)
import useChannelName from "useChannelName" /* 5521 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8246 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8248 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let tmp7;
const createCommonMessageDefault = tmp7(8250);
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
  const intl = tmp(1128).intl;
  const formatToParts = intl.formatToParts;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), threadName: content, threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true } };
  const veX9jq = tmp(1128).t.veX9jq;
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
