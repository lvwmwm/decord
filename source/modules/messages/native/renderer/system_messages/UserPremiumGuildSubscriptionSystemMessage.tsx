// Module ID: 8151
// Function ID: 8152
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: [8152, 8110, 8112, 1236, 8113, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 8151 (createUserPremiumGuildSubscriptionSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = importDefault(8152)(message);
  let obj = require(8110) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = importDefault(8112)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
  const merged = Object.assign(importDefault(8113)(roleStyle));
  return { content: formatToPartsResult };
};
