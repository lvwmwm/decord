// Module ID: 11210
// Function ID: 11211
// Name: getBotTagFromUser
// Dependencies: [1353, 2]
// Exports: getBotTagTypeFromUser

// Module 11210 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1353 */;
import size from "module_2" /* 2 */;

const BotTagTypes = ApplicationConstants.BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
