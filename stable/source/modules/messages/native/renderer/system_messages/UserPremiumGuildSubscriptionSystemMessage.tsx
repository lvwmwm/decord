// Module ID: 8107
// Function ID: 8108
// Name: UserPremiumGuildSubscriptionSystemMessage
// Dependencies: [8108, 8064, 8066, 1114, 8068, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 8107 (UserPremiumGuildSubscriptionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8064 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8066 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8108 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1114).intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    let formatToPartsResult = intl2.formatToParts(tmp4(1114).t.rbj006, obj2);
  } else {
    const intl = tmp4(1114).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1114).t.ihxM9x, obj3);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: formatToPartsResult };
};
