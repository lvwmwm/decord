// Module ID: 9166
// Function ID: 9167
// Name: UserPremiumGuildSubscriptionSystemMessage
// Dependencies: [9167, 9122, 9124, 1113, 9126, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 9166 (UserPremiumGuildSubscriptionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9122 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9124 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 9167 */;
import size from "module_2" /* 2 */;

let tmp;
const createCommonMessageDefault = tmp(9126);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export function createUserPremiumGuildSubscriptionSystemMessage(message) {
  let formatToPartsResult;
  message = message.message;
  const roleStyle = message.roleStyle;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1113).intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    formatToPartsResult = intl2.formatToParts(tmp4(1113).t.rbj006, obj2);
  } else {
    const intl = tmp4(1113).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1113).t.ihxM9x, obj3);
  }
  const obj4 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj4;
}
