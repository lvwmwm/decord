// Module ID: 8542
// Function ID: 8543
// Name: useAuthorWithProcessedColor
// Dependencies: [17, 6558, 8543, 2]
// Exports: getMessageAuthorWithProcessedColor, getUserAuthorWithProcessedColor

// Module 8542 (useAuthorWithProcessedColor)
import react_native from "react-native" /* 17 */;
import useMessageAuthor from "useMessageAuthor" /* 6558 */;
import size from "module_2" /* 2 */;

let tmp;
const enhanced_role_colors_EnhancedRoleColorUtils = tmp(8543);
const processColor = react_native.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export function getMessageAuthorWithProcessedColor(message) {
  let colorStrings;
  let guildId;
  let tmp4;
  let tmpResult;
  const obj = useMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  const obj2 = { nick: messageAuthor.nick, colorString: tmp4, colorStrings: tmpResult.processColorStrings(colorStrings), guildId };
  tmp4 = undefined;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
  return obj2;
}
export function getUserAuthorWithProcessedColor(user, channel) {
  let colorStrings;
  let guildId;
  let tmp4;
  let tmpResult;
  const obj = useMessageAuthor;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  const obj2 = { nick: userAuthor.nick, colorString: tmp4, colorStrings: tmpResult.processColorStrings(colorStrings), guildId };
  tmp4 = undefined;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
  return obj2;
}
