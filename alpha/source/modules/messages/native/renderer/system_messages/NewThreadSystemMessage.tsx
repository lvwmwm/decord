// Module ID: 8570
// Function ID: 8571
// Name: NewThreadSystemMessage
// Dependencies: [5019, 5112, 1385, 8510, 1113, 8512, 5806, 8514, 2]
// Exports: createNewThreadSystemMessage

// Module 8570 (NewThreadSystemMessage)
import useChannelName from "useChannelName" /* 5806 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8510 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8512 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp7;
const createCommonMessageDefault = tmp7(8514);
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
  const intl = tmp(1113).intl;
  const formatToParts = intl.formatToParts;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), threadName: content, threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true } };
  const veX9jq = tmp(1113).t.veX9jq;
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
