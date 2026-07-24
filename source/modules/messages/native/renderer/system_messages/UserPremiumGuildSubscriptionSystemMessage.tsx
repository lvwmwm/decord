// Module ID: 7779
// Function ID: 61680
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: [7780, 7738, 7740, 1212, 7741, 2]
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7779 (createUserPremiumGuildSubscriptionSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp = importDefault(7780)(message);
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj = {};
  if (tmp > 1) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3, numSubscriptions: tmp };
    let formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t.rbj006, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3 };
    formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.ihxM9x, obj1);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(importDefault(7741)(roleStyle));
  return obj;
};
