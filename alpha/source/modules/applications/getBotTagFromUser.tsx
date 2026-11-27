// Module ID: 11387
// Function ID: 11388
// Name: getBotTagFromUser
// Dependencies: [1364, 2]
// Exports: getBotTagTypeFromUser

// Module 11387 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1364 */;
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
