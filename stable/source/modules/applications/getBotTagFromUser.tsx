// Module ID: 11039
// Function ID: 11040
// Name: getBotTagFromUser
// Dependencies: [1348, 2]
// Exports: getBotTagTypeFromUser

// Module 11039 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1348 */;
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
