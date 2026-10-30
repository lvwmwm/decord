// Module ID: 10760
// Function ID: 10761
// Name: getBotTagFromUser
// Dependencies: [1361, 2]
// Exports: getBotTagTypeFromUser

// Module 10760 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1361 */;
import size from "module_2" /* 2 */;

const BotTagTypes = ApplicationConstants.BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export function getBotTagTypeFromUser(user) {
  let BOT;
  if (user.isSystemUser()) {
    BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
}
