// Module ID: 7920
// Function ID: 7921
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: [7921, 7879, 7881, 1236, 7882, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7920 (createUserPremiumGuildSubscriptionSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = importDefault(7921)(message);
  let obj = require(7879) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = importDefault(7881)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
  const merged = Object.assign(importDefault(7882)(roleStyle));
  return { content: formatToPartsResult };
};
