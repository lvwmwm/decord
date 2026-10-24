// Module ID: 10669
// Function ID: 10670
// Name: getBotTagFromUser
// Dependencies: [1375, 2]
// Exports: getBotTagTypeFromUser

// Module 10669 (getBotTagFromUser)
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
