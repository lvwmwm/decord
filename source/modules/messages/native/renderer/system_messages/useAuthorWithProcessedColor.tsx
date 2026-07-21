// Module ID: 7642
// Function ID: 61165
// Name: getMessageAuthorWithProcessedColor
// Dependencies: [31, 27, 1852, 33]
// Exports: getMessageAuthorWithProcessedColor, getUserAuthorWithProcessedColor

// Module 7642 (getMessageAuthorWithProcessedColor)
import { processColor } from "module_31";
import module_33 from "module_33";

const result = module_33.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

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
