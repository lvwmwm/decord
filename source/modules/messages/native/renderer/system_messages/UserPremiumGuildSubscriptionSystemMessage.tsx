// Module ID: 7934
// Function ID: 7935
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: [7935, 7891, 7893, 1233, 7895, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7934 (createUserPremiumGuildSubscriptionSystemMessage)
import set from "set" /* 2 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7891 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7893 */;
import createCommonMessageDefault from "createCommonMessage" /* 7895 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 7935 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1233).intl;
    obj = { username: null, usernameOnClick: null, numSubscriptions: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    obj[2] = tmp3;
    let formatToPartsResult = intl2.formatToParts(tmp4(1233).t.rbj006, obj);
  } else {
    const intl = tmp4(1233).intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    formatToPartsResult = intl.formatToParts(tmp4(1233).t.ihxM9x, obj);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: formatToPartsResult };
};
