// Module ID: 7692
// Function ID: 61366
// Name: createNewThreadSystemMessage
// Dependencies: []
// Exports: createNewThreadSystemMessage

// Module 7692 (createNewThreadSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = arg1(dependencyMap[3]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  const channel = channel.getChannel(channel_id);
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: importDefault(dependencyMap[5])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  if (null != channel) {
    let content = arg1(dependencyMap[6]).computeChannelName(channel, closure_5, closure_4);
    const obj4 = arg1(dependencyMap[6]);
  } else {
    content = message.content;
  }
  obj.threadName = content;
  const obj1 = {};
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (null != messageReference2) {
    channel_id1 = messageReference2.channel_id;
  }
  obj1.threadId = channel_id1;
  obj.threadOnClick = obj1;
  obj.content = intl.formatToParts(arg1(dependencyMap[4]).t.veX9jq, obj);
  const merged = Object.assign(importDefault(dependencyMap[7])(roleStyle));
  return obj;
};
