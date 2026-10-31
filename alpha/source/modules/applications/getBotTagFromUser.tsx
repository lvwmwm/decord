// Module ID: 10780
// Function ID: 10781
// Name: getBotTagFromUser
// Dependencies: [1360, 2]
// Exports: getBotTagTypeFromUser

// Module 10780 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
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
