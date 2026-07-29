// Module ID: 7785
// Function ID: 7786
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: [7786, 7743, 7745, 1236, 7746, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7785 (createUserPremiumGuildSubscriptionSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = importDefault(7786)(message);
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (tmp3 > 1) {
    const intl2 = tmp4(1236).intl;
    obj = { username: null, usernameOnClick: null, numSubscriptions: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    obj[2] = tmp3;
    let formatToPartsResult = intl2.formatToParts(tmp4(1236).t.rbj006, obj);
  } else {
    const intl = tmp4(1236).intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    formatToPartsResult = intl.formatToParts(tmp4(1236).t.ihxM9x, obj);
  }
  const merged = Object.assign(importDefault(7746)(roleStyle));
  return { content: formatToPartsResult };
};
