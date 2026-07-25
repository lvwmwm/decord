// Module ID: 7684
// Function ID: 61478
// Name: getMessageAuthorWithProcessedColor
// Dependencies: [27, 4361, 7685, 2]
// Exports: getMessageAuthorWithProcessedColor, getUserAuthorWithProcessedColor

// Module 7684 (getMessageAuthorWithProcessedColor)
import { processColor } from "get ActivityIndicator";

const result = require("processColorStringsInternal").fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let colorStrings;
  let guildId;
  let obj = require(4361) /* useNullableMessageAuthor */;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  obj = { nick: messageAuthor.nick };
  let tmp2;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp2 = processColor(colorString);
  }
  obj.colorString = tmp2;
  obj.colorStrings = require(7685) /* processColorStringsInternal */.processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let colorStrings;
  let guildId;
  let obj = require(4361) /* useNullableMessageAuthor */;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  obj = { nick: userAuthor.nick };
  let tmp2;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp2 = processColor(colorString);
  }
  obj.colorString = tmp2;
  obj.colorStrings = require(7685) /* processColorStringsInternal */.processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
