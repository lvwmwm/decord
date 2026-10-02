// Module ID: 7450
// Function ID: 7451
// Name: UserPremiumGuildSubscriptionSystemMessage
// Dependencies: [7451, 7406, 7408, 1127, 7410, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7450 (UserPremiumGuildSubscriptionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7406 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7408 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 7451 */;
import size from "module_2" /* 2 */;

let tmp;
const createCommonMessageDefault = tmp(7410);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(message) {
  let formatToPartsResult;
  message = message.message;
  const roleStyle = message.roleStyle;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1127).intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    formatToPartsResult = intl2.formatToParts(tmp4(1127).t.rbj006, obj2);
  } else {
    const intl = tmp4(1127).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1127).t.ihxM9x, obj3);
  }
  const obj4 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj4;
};
