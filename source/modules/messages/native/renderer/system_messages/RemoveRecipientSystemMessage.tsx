// Module ID: 7659
// Function ID: 61250
// Name: createRemoveRecipientSystemMessage
// Dependencies: []
// Exports: createRemoveRecipientSystemMessage

// Module 7659 (createRemoveRecipientSystemMessage)
const THREAD_CHANNEL_TYPES = require(dependencyMap[0]).THREAD_CHANNEL_TYPES;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = require(dependencyMap[3]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[4])({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    obj = {};
    const intl = require(dependencyMap[5]).intl;
    const formatToParts = intl.formatToParts;
    const t = require(dependencyMap[5]).t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj);
    } else {
      formatToPartsResult = formatToParts(t.Qn5+Lf, obj);
    }
    obj.content = formatToPartsResult;
    const merged = Object.assign(importDefault(dependencyMap[6])(message));
    return obj;
  } else {
    const user = user.getUser(first);
    let obj3 = require(dependencyMap[3]);
    const userAuthorWithProcessedColor = obj3.getUserAuthorWithProcessedColor(user, channel);
    const obj1 = {};
    const merged1 = Object.assign(obj);
    obj1["otherUsername"] = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    obj1["otherUsernameOnClick"] = importDefault(dependencyMap[4])(obj2);
    obj3 = {};
    const intl2 = require(dependencyMap[5]).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = require(dependencyMap[5]).t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj1);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj1);
    }
    obj3.content = formatToParts2Result;
    const merged2 = Object.assign(importDefault(dependencyMap[6])(message));
    return obj3;
  }
};
