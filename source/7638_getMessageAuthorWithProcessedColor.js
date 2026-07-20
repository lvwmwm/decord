// Module ID: 7638
// Function ID: 61153
// Name: getMessageAuthorWithProcessedColor
// Dependencies: []
// Exports: getMessageAuthorWithProcessedColor, getUserAuthorWithProcessedColor

// Module 7638 (getMessageAuthorWithProcessedColor)
const processColor = require(dependencyMap[0]).processColor;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let colorStrings;
  let guildId;
  let obj = require(dependencyMap[1]);
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  obj = { nick: messageAuthor.nick };
  let tmp2;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp2 = processColor(colorString);
  }
  obj.colorString = tmp2;
  obj.colorStrings = require(dependencyMap[2]).processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let colorStrings;
  let guildId;
  let obj = require(dependencyMap[1]);
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  obj = { nick: userAuthor.nick };
  let tmp2;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp2 = processColor(colorString);
  }
  obj.colorString = tmp2;
  obj.colorStrings = require(dependencyMap[2]).processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
