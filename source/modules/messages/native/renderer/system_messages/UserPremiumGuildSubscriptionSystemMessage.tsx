// Module ID: 7684
// Function ID: 61347
// Name: createUserPremiumGuildSubscriptionSystemMessage
// Dependencies: []
// Exports: createUserPremiumGuildSubscriptionSystemMessage

// Module 7684 (createUserPremiumGuildSubscriptionSystemMessage)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp = importDefault(dependencyMap[0])(message);
  let obj = require(dependencyMap[1]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj = {};
  if (tmp > 1) {
    const intl2 = require(dependencyMap[3]).intl;
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3, numSubscriptions: tmp };
    let formatToPartsResult = intl2.formatToParts(require(dependencyMap[3]).t.rbj006, obj);
  } else {
    const intl = require(dependencyMap[3]).intl;
    const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp3 };
    formatToPartsResult = intl.formatToParts(require(dependencyMap[3]).t.ihxM9x, obj1);
  }
  obj.content = formatToPartsResult;
  const merged = Object.assign(importDefault(dependencyMap[4])(roleStyle));
  return obj;
};
