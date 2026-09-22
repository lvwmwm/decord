// Module ID: 8273
// Function ID: 8274
// Name: NewThreadSystemMessage
// Dependencies: [2042, 4406, 1372, 8222, 1115, 8224, 4910, 8226, 2]
// Exports: createNewThreadSystemMessage

// Module 8273 (NewThreadSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8222 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8224 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;
import UserStore from "UserStore" /* 1372 */;

const createCommonMessageDefault = tmp7(8226);
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
    let content = tmp(4910).computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = tmp(4910);
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
