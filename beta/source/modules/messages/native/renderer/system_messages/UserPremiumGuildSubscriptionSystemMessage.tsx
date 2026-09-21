// Module ID: 8261
// Function ID: 8262
// Name: UserPremiumGuildSubscriptionSystemMessage
// Dependencies: [8262, 8218, 8220, 1115, 8222, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 8261 (UserPremiumGuildSubscriptionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8218 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8220 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8262 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1115).intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    let formatToPartsResult = intl2.formatToParts(tmp4(1115).t.rbj006, obj2);
  } else {
    const intl = tmp4(1115).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1115).t.ihxM9x, obj3);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: formatToPartsResult };
};
