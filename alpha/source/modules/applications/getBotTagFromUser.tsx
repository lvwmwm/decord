// Module ID: 13753
// Function ID: 13754
// Name: getBotTagFromUser
// Dependencies: [1365, 2]
// Exports: getBotTagTypeFromUser

// Module 13753 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1365 */;
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
