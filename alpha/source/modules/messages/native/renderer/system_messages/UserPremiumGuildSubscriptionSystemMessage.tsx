// Module ID: 8452
// Function ID: 8453
// Name: UserPremiumGuildSubscriptionSystemMessage
// Dependencies: [8453, 8410, 8412, 1114, 8414, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 8452 (UserPremiumGuildSubscriptionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8410 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8412 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8453 */;
import size from "module_2" /* 2 */;

let tmp;
const createCommonMessageDefault = tmp(8414);
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
    const intl2 = tmp4(1114).intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    formatToPartsResult = intl2.formatToParts(tmp4(1114).t.rbj006, obj2);
  } else {
    const intl = tmp4(1114).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1114).t.ihxM9x, obj3);
  }
  const obj4 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj4;
}
