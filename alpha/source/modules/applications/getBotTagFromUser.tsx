// Module ID: 10598
// Function ID: 10599
// Name: getBotTagFromUser
// Dependencies: [1375, 2]
// Exports: getBotTagTypeFromUser

// Module 10598 (getBotTagFromUser)
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
