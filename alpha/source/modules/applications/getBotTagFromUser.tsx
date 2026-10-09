// Module ID: 10239
// Function ID: 10240
// Name: getBotTagFromUser
// Dependencies: [1373, 2]
// Exports: getBotTagTypeFromUser

// Module 10239 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1373 */;
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
