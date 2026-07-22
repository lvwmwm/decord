// Module ID: 9086
// Function ID: 71198
// Name: getBotTagTypeFromUser
// Dependencies: []
// Exports: getBotTagTypeFromUser

// Module 9086 (getBotTagTypeFromUser)
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
