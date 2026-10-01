// Module ID: 7637
// Function ID: 7638
// Name: NewThreadSystemMessage
// Dependencies: [2044, 4508, 1372, 7575, 1115, 7577, 4998, 7579, 2]
// Exports: createNewThreadSystemMessage

// Module 7637 (NewThreadSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7575 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7577 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RelationshipStore from "RelationshipStore" /* 4508 */;
import UserStore from "UserStore" /* 1372 */;

const createCommonMessageDefault = tmp7(7579);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const channel = ChannelStore.getChannel(channel_id);
  const intl = tmp(1115).intl;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), threadName: null, threadOnClick: null };
  if (null != channel) {
    let content = tmp(4998).computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = tmp(4998);
  } else {
    content = message.content;
  }
  obj2.threadName = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj2.threadOnClick = { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: intl.formatToParts(util.t.veX9jq, obj2) };
};
