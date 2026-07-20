// Module ID: 9081
// Function ID: 71162
// Name: getBotTagTypeFromUser
// Dependencies: []
// Exports: getBotTagTypeFromUser

// Module 9081 (getBotTagTypeFromUser)
const BotTagTypes = require(dependencyMap[0]).BotTagTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
