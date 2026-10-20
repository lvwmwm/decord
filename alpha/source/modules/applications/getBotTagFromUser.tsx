// Module ID: 10587
// Function ID: 10588
// Name: getBotTagFromUser
// Dependencies: [1375, 2]
// Exports: getBotTagTypeFromUser

// Module 10587 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1375 */;
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
