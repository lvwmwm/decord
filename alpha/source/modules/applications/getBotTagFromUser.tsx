// Module ID: 10254
// Function ID: 10255
// Name: getBotTagFromUser
// Dependencies: [1372, 2]
// Exports: getBotTagTypeFromUser

// Module 10254 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1372 */;
import size from "module_2" /* 2 */;

const BotTagTypes = ApplicationConstants.BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  let BOT;
  if (user.isSystemUser()) {
    BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
