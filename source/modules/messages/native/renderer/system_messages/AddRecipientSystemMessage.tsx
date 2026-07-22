// Module ID: 7642
// Function ID: 61185
// Name: createAddRecipientSystemMessage
// Dependencies: []
// Exports: createAddRecipientSystemMessage

// Module 7642 (createAddRecipientSystemMessage)
const THREAD_CHANNEL_TYPES = require(dependencyMap[0]).THREAD_CHANNEL_TYPES;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export const createAddRecipientSystemMessage = function createAddRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const user = user.getUser(first);
  const channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = require(dependencyMap[3]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = require(dependencyMap[3]).getUserAuthorWithProcessedColor(user, channel);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[4])({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: importDefault(dependencyMap[4])({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  obj = {};
  const intl = require(dependencyMap[5]).intl;
  const formatToParts = intl.formatToParts;
  const t = require(dependencyMap[5]).t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t.7/Xl0S, obj);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(importDefault(dependencyMap[6])(message));
  return obj;
};
