// Module ID: 10654
// Function ID: 10655
// Name: getBotTagFromUser
// Dependencies: [1360, 2]
// Exports: getBotTagTypeFromUser

// Module 10654 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
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
