// Module ID: 13827
// Function ID: 13828
// Name: getBotTagFromUser
// Dependencies: [1363, 2]
// Exports: getBotTagTypeFromUser

// Module 13827 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1363 */;
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
