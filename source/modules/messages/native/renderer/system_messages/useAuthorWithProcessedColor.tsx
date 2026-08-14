// Module ID: 8135
// Function ID: 8136
// Name: getMessageAuthorWithProcessedColor
// Dependencies: [17, 4595, 8136, 2]
// Exports: getMessageAuthorWithProcessedColor, getUserAuthorWithProcessedColor

// Module 8135 (getMessageAuthorWithProcessedColor)
import { processColor } from "get ActivityIndicator";

const result = require("processColorStrings").fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let colorStrings;
  let guildId;
  let obj = require(4595) /* useNullableMessageAuthor */;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  obj = { nick: messageAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj[1] = tmp4;
  obj[2] = require(8136) /* processColorStrings */.processColorStrings(colorStrings);
  obj[3] = guildId;
  return obj;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let colorStrings;
  let guildId;
  let obj = require(4595) /* useNullableMessageAuthor */;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  obj = { nick: userAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj[1] = tmp4;
  obj[2] = require(8136) /* processColorStrings */.processColorStrings(colorStrings);
  obj[3] = guildId;
  return obj;
};
